// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import {Poker, PokerStatus} from "./entity/poker"
import PokerUI from "./pokerUI"
import Client from './client'
import { RPC_URL, MY_CKB_PRIVATE_KEY, MY_CKB_ADDRESS } from "./config";

const POKER_COUNT: number = 11;
const SHUFFLE_COUNT: number = 100;
const PLAYER_CARD_INDEX: number = 9;
const ROBOT_CARD_INDEX: number = 10;
const ROBOT_SKIP_POSSIBILITY: number = 0.5;
const WINNER_PICK_CARD_DURATION: number = 0.5;
const LOSER_PICK_CARD_DURATION: number = 1.0;
const WINNER_OPEN_CARD_DURATION: number = 0.3;
const LOSER_OPEN_CARD_DURATION: number = 0.5;

@ccclass
export default class Game extends cc.Component {
    @property(cc.Node) pokerContainer: cc.Node = null;
    @property(cc.Prefab) pokerPrefab: cc.Prefab = null;
    private pokers: Poker[] = []
    private restPokerCnt: number = POKER_COUNT - 2;

    @property(cc.Button) hitBtn: cc.Button = null;
    @property(cc.Button) stayBtn: cc.Button = null;
    @property(cc.Button) restartBtn: cc.Button = null;
    @property(cc.Node) closeBtn: cc.Node = null;

    @property(cc.Node) playerArea: cc.Node = null;
    @property(cc.Node) robotArea: cc.Node = null;
    @property(cc.Label) playerPoint: cc.Label = null;
    @property(cc.Label) robotPoint: cc.Label = null;
    @property(cc.Label) robotChoice: cc.Label = null;

    @property(cc.Label) result: cc.Label = null;
    @property(cc.Label) txHash: cc.Label = null;

    @property(cc.AudioClip) bgMusic: cc.AudioClip = null;
    @property(cc.AudioClip) flipMusic: cc.AudioClip = null;
    @property(cc.AudioClip) successMusic: cc.AudioClip = null;
    @property(cc.AudioClip) failedMusic: cc.AudioClip = null;
    @property(cc.AudioClip) clickMusic: cc.AudioClip = null;
    @property(cc.AudioClip) stayMusic: cc.AudioClip = null;
    @property(cc.AudioClip) restartMusic: cc.AudioClip = null;

    @property(cc.Sprite) win: cc.Sprite = null;

    private player: Player = null;
    private robot: Player = null;
    private turnPlayer: boolean = true;
    private playerFirst: boolean = true;
    private gameOver: boolean = false;

    private client: Client = null;

    start () {
        cc.audioEngine.playEffect(this.bgMusic, true);

        for (let point = 1; point <= POKER_COUNT; point++) {
            let poker = new Poker(point, PokerStatus.CLOSE);
            this.pokers.push(poker);
        }

        this.init();

        this.hitBtn.node.on('click', this.onHitBtnClick, this);
        this.stayBtn.node.on('click', this.onStayBtnClick, this);
        this.restartBtn.node.on('click', this.onRestartBtnClick, this);
        this.closeBtn.on(cc.Node.EventType.TOUCH_START, this.onCloseBtnClick, this);

        this.client = new Client(RPC_URL, MY_CKB_PRIVATE_KEY, MY_CKB_ADDRESS);
    }

    private init() {
        this.txHash.string = "";
        this.win.node.active = false;
        this.gameOver = false;
        this.shuffle();
        this.restPokerCnt = POKER_COUNT - 2;

        this.pokerContainer.removeAllChildren();
        for (let i = 0; i < POKER_COUNT - 2; i++) {
            let pokerUI = this.createPokerUI(this.pokers[i]);
            pokerUI.node.x = -0.3 * i;
            pokerUI.node.y = 0.3 * i;
            this.pokerContainer.addChild(pokerUI.node);
        }

        this.playerArea.removeAllChildren();
        this.robotArea.removeAllChildren();

        this.player = new Player();
        this.robot = new Player();

        this.player.score += this.pokers[PLAYER_CARD_INDEX].point;
        this.playerPoint.string = `Point: ${this.player.score}`;
        this.robotPoint.string = 'Point: 0';
        this.result.string = '';
        this.robotChoice.string = '';

        this.placePlayerHoldCard();
        this.placeRobotHoldCard();
    }

    private reset() {
        this.init();
        this.turnPlayer = true;
    }

    private placePlayerHoldCard() {
        let pokerUI = this.createPokerUI(this.pokers[PLAYER_CARD_INDEX]);
        pokerUI.node.x = -400;
        pokerUI.node.y = 70;
        pokerUI.setStatus(PokerStatus.OPEN);
        this.playerArea.addChild(pokerUI.node);
        pokerUI.node.runAction(cc.sequence(
            cc.delayTime(0.0),
            cc.moveTo(0.5, -143, 3),
        ));
    }

    private placeRobotHoldCard() {
        let pokerUI = this.createPokerUI(this.pokers[ROBOT_CARD_INDEX]);
        pokerUI.node.x = -400;
        pokerUI.node.y = 70;
        this.robotArea.addChild(pokerUI.node);
        pokerUI.node.runAction(cc.sequence(
            cc.delayTime(0.0),
            cc.moveTo(0.5, -143, 2),
        ));
    }

    private shuffle() {
        for (let i = 0; i < SHUFFLE_COUNT; ++i) {
            let sIdx = Math.floor(Math.random() * this.pokers.length);
            let eIdx = Math.floor(Math.random() * this.pokers.length);
            let tmpVal = this.pokers[sIdx]
            this.pokers[sIdx] = this.pokers[eIdx]
            this.pokers[eIdx] = tmpVal
        }
    }

    private createPokerUI(poker: Poker): PokerUI {
        let pokerUiNode = cc.instantiate(this.pokerPrefab);
        let pokerUI: PokerUI = pokerUiNode.getComponent(PokerUI);
        pokerUI.init(poker);
        return pokerUI;
    }

    private async onHitBtnClick() {
        if (this.restPokerCnt <= 0) return await this.whoWin();
        if (!this.turnPlayer || this.gameOver) return;

        let pokerNode = this.pokerContainer.children[this.restPokerCnt - 1];
        let worldPosition = pokerNode.convertToWorldSpaceAR(cc.v3(this.playerCardPosX(), -150, 0));
        let areaPosition = this.playerArea.convertToNodeSpaceAR(worldPosition);
        pokerNode.removeFromParent();
        this.playerArea.addChild(pokerNode);

        cc.audioEngine.playEffect(this.flipMusic, false);

        pokerNode.x = -400;
        pokerNode.y = 70;

        if (this.playerFirst) {
            pokerNode.runAction(cc.sequence(
                cc.delayTime(0.0),
                cc.moveTo(WINNER_PICK_CARD_DURATION, areaPosition.x, areaPosition.y),
                cc.scaleTo(WINNER_OPEN_CARD_DURATION, 0, 1),
                cc.callFunc(() => {
                    let pokerUI = pokerNode.getComponent(PokerUI);
                    pokerUI.setStatus(PokerStatus.OPEN);
                }),
                cc.scaleTo(WINNER_OPEN_CARD_DURATION, 1, 1)
            ));
        } else {
            pokerNode.runAction(cc.sequence(
                cc.delayTime(0.0),
                cc.moveTo(LOSER_PICK_CARD_DURATION, areaPosition.x, areaPosition.y),
                cc.scaleTo(LOSER_OPEN_CARD_DURATION, 0, 1),
                cc.callFunc(() => {
                    let pokerUI = pokerNode.getComponent(PokerUI);
                    pokerUI.setStatus(PokerStatus.OPEN);
                }),
                cc.scaleTo(LOSER_OPEN_CARD_DURATION, 1, 1)
            ));
        }

        this.player.score += this.pokers[this.restPokerCnt - 1].point;
        ++this.player.cardCnt;
        --this.restPokerCnt;
        this.turnPlayer = false;

        this.playerPoint.string = `Point: ${this.player.score}`;
        this.player.skip = false;

        await this.robotHit();
    }

    private playerCardPosX() {
        return 330 + 70 * this.player.cardCnt;
    }

    private async robotHit() {
        if (this.restPokerCnt <= 0) return await this.whoWin();
        if (this.turnPlayer || this.gameOver) return;

        if (this.robot.score >= 17 
            || this.robot.score + this.pokers[ROBOT_CARD_INDEX].point >= 21
            || (this.robot.score >= 10 && Math.random() < ROBOT_SKIP_POSSIBILITY)) {
            return this.robotStay();
        }

        let pokerNode = this.pokerContainer.children[this.restPokerCnt - 1];
        let worldPosition = pokerNode.convertToWorldSpaceAR(cc.v3(this.robotCardPosX(), 150, 0));
        let areaPosition = this.robotArea.convertToNodeSpaceAR(worldPosition);
        pokerNode.removeFromParent();
        this.robotArea.addChild(pokerNode);

        pokerNode.x = -400;
        pokerNode.y = 70;

        if (this.playerFirst) {
            pokerNode.runAction(cc.sequence(
                cc.delayTime(0.0),
                cc.moveTo(LOSER_PICK_CARD_DURATION, areaPosition.x, areaPosition.y),
                cc.scaleTo(LOSER_OPEN_CARD_DURATION, 0, 1),
                cc.callFunc(() => {
                    let pokerUI = pokerNode.getComponent(PokerUI);
                    pokerUI.setStatus(PokerStatus.OPEN);
                }),
                cc.scaleTo(LOSER_OPEN_CARD_DURATION, 1, 1)
            ));
        } else {
            pokerNode.runAction(cc.sequence(
                cc.delayTime(0.0),
                cc.moveTo(WINNER_PICK_CARD_DURATION, areaPosition.x, areaPosition.y),
                cc.scaleTo(WINNER_OPEN_CARD_DURATION, 0, 1),
                cc.callFunc(() => {
                    let pokerUI = pokerNode.getComponent(PokerUI);
                    pokerUI.setStatus(PokerStatus.OPEN);
                }),
                cc.scaleTo(WINNER_OPEN_CARD_DURATION, 1, 1)
            ));
        }

        this.robot.score += this.pokers[this.restPokerCnt - 1].point;
        ++this.robot.cardCnt;
        --this.restPokerCnt;
        this.turnPlayer = true;
        this.robot.skip = false;

        this.robotPoint.string = `Point: ${this.robot.score}`;
        this.robotChoice.string = ''
    }

    private async robotStay() {
        if (this.restPokerCnt <= 0) return await this.whoWin();
        this.turnPlayer = true;
        this.robotChoice.string = 'Stay'
        this.robot.skip = true;

        if (this.player.skip) {
            await this.whoWin();
        }
    }

    private robotCardPosX() {
        return 330 + 70 * this.robot.cardCnt;
    }

    private async onStayBtnClick() {
        cc.audioEngine.playEffect(this.stayMusic, false);
        if (this.restPokerCnt <= 0) return this.whoWin();
        if (!this.turnPlayer || this.gameOver) return;
        this.turnPlayer = false;
        this.player.skip = true;

        if (this.robot.skip) {
            return await this.whoWin();
        }

        await this.robotHit();
    }

    private onRestartBtnClick() {
        cc.audioEngine.playEffect(this.restartMusic, false);
        this.reset();
    }

    private async whoWin() {
        let robotHoldCardNode = this.robotArea.children[0];
        let robotHoldCard = robotHoldCardNode.getComponent(PokerUI);
        robotHoldCard.setStatus(PokerStatus.OPEN);

        console.log('player score: ' + this.player.score +
                    ', player hold: ' + this.pokers[PLAYER_CARD_INDEX].point);
        console.log('robot score: ' + this.player.score +
                    ', robot hold: ' + this.pokers[ROBOT_CARD_INDEX].point);

        this.robot.score += this.pokers[ROBOT_CARD_INDEX].point;

        this.playerPoint.string = `Point: ${this.player.score}`;
        this.robotPoint.string = `Point: ${this.robot.score}`;

        let playerWin: WinStatus = WinStatus.DRAW;

        if (this.player.score == this.robot.score) {
            playerWin = WinStatus.DRAW;
        } else if (this.player.score > 21 && this.robot.score > 21) {
            if (this.player.score < this.robot.score) {
                playerWin = WinStatus.WIN;
            } else {
                playerWin = WinStatus.LOSE;
            }
        } else if (this.player.score > 21) {
            playerWin = WinStatus.LOSE;
        } else if (this.robot.score > 21) {
            playerWin = WinStatus.WIN;
        } else {
            if (this.player.score > this.robot.score) {
                playerWin = WinStatus.WIN;
            } else {
                playerWin = WinStatus.LOSE;
            }
        }

        this.gameOver = true;
        var txHash: String = "";
        if (playerWin === WinStatus.WIN) {
            this.result.string = 'You Win';
            this.playerFirst = true;
            this.win.node.active = true;
            cc.audioEngine.playEffect(this.successMusic, false);
            txHash = await this.client.battle_win();
        } else  {
            this.playerFirst = false;
            cc.audioEngine.playEffect(this.failedMusic, false);
            if (playerWin === WinStatus.DRAW) {
                this.result.string = 'Draw';
            } else {
                this.result.string = 'You Lose';
                txHash = await this.client.battle_lose();
            }
        }
        this.txHash.string = `tx hash: ${txHash}`
    }

    private onCloseBtnClick() {
        cc.audioEngine.playEffect(this.clickMusic, false);
        cc.director.loadScene('menu');
        this.reset();
    }
}

class Player {
    public score: number;
    public cardCnt: number;
    public skip: boolean;

    constructor() {
        this.score = 0;
        this.cardCnt = 0;
        this.skip = false;
    }
};

enum WinStatus {
    WIN = 0,
    DRAW = 1,
    LOSE = 2,
};
