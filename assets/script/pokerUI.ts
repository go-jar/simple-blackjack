// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import Poker from "./poker"
import {PokerStatus} from "./config"

@ccclass
export default class PokerUI extends cc.Component {

    @property(cc.Label) point: cc.Label = null;
    @property(cc.Sprite) card: cc.Sprite = null;

    @property(cc.SpriteFrame) cardBack: cc.SpriteFrame = null;
    @property(cc.SpriteFrame) cardFront: cc.SpriteFrame = null;

    start () {
    }

    public init(poker: Poker) {
        this.point.string = `${poker.point}`;
        this.setStatus(poker.status)
    }

    public setStatus(status: PokerStatus) {
        if (status == PokerStatus.CLOSE) {
            this.point.node.active = false;
            this.card.spriteFrame = this.cardBack;
        } else {
            this.point.node.active = true;
            this.card.spriteFrame = this.cardFront;
        }
    }
}
