"use strict";
cc._RF.push(module, '51a8dVLtCZFA47GntUOPC1J', 'game');
// script/game.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var poker_1 = require("./entity/poker");
var pokerUI_1 = require("./pokerUI");
var POKER_COUNT = 11;
var SHUFFLE_COUNT = 100;
var PLAYER_CARD_INDEX = 9;
var ROBOT_CARD_INDEX = 10;
var ROBOT_SKIP_POSSIBILITY = 0.5;
var WINNER_PICK_CARD_DURATION = 0.5;
var LOSER_PICK_CARD_DURATION = 1.0;
var WINNER_OPEN_CARD_DURATION = 0.3;
var LOSER_OPEN_CARD_DURATION = 0.5;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pokerContainer = null;
        _this.pokerPrefab = null;
        _this.pokers = [];
        _this.restPokerCnt = POKER_COUNT - 2;
        _this.hitBtn = null;
        _this.stayBtn = null;
        _this.restartBtn = null;
        _this.closeBtn = null;
        _this.playerArea = null;
        _this.robotArea = null;
        _this.playerPoint = null;
        _this.robotPoint = null;
        _this.robotChoice = null;
        _this.result = null;
        _this.bgMusic = null;
        _this.flipMusic = null;
        _this.successMusic = null;
        _this.failedMusic = null;
        _this.clickMusic = null;
        _this.stayMusic = null;
        _this.restartMusic = null;
        _this.win = null;
        _this.player = null;
        _this.robot = null;
        _this.turnPlayer = true;
        _this.playerFirst = true;
        _this.gameOver = false;
        _this.client = null;
        return _this;
    }
    Game.prototype.start = function () {
        cc.audioEngine.playEffect(this.bgMusic, true);
        for (var point = 1; point <= POKER_COUNT; point++) {
            var poker = new poker_1.Poker(point, poker_1.PokerStatus.CLOSE);
            this.pokers.push(poker);
        }
        this.init();
        this.hitBtn.node.on('click', this.onHitBtnClick, this);
        this.stayBtn.node.on('click', this.onStayBtnClick, this);
        this.restartBtn.node.on('click', this.onRestartBtnClick, this);
        this.closeBtn.on(cc.Node.EventType.TOUCH_START, this.onCloseBtnClick, this);
        // this.client = new Client();
    };
    Game.prototype.init = function () {
        this.win.node.active = false;
        this.gameOver = false;
        this.shuffle();
        this.restPokerCnt = POKER_COUNT - 2;
        this.pokerContainer.removeAllChildren();
        for (var i = 0; i < POKER_COUNT - 2; i++) {
            var pokerUI = this.createPokerUI(this.pokers[i]);
            pokerUI.node.x = -0.3 * i;
            pokerUI.node.y = 0.3 * i;
            this.pokerContainer.addChild(pokerUI.node);
        }
        this.playerArea.removeAllChildren();
        this.robotArea.removeAllChildren();
        this.player = new Player();
        this.robot = new Player();
        this.player.score += this.pokers[PLAYER_CARD_INDEX].point;
        this.playerPoint.string = "Point: " + this.player.score;
        this.robotPoint.string = 'Point: 0';
        this.result.string = '';
        this.robotChoice.string = '';
        this.placePlayerHoldCard();
        this.placeRobotHoldCard();
    };
    Game.prototype.reset = function () {
        this.init();
        this.turnPlayer = true;
    };
    Game.prototype.placePlayerHoldCard = function () {
        var pokerUI = this.createPokerUI(this.pokers[PLAYER_CARD_INDEX]);
        pokerUI.node.x = -400;
        pokerUI.node.y = 70;
        pokerUI.setStatus(poker_1.PokerStatus.OPEN);
        this.playerArea.addChild(pokerUI.node);
        pokerUI.node.runAction(cc.sequence(cc.delayTime(0.0), cc.moveTo(0.5, -143, 3)));
    };
    Game.prototype.placeRobotHoldCard = function () {
        var pokerUI = this.createPokerUI(this.pokers[ROBOT_CARD_INDEX]);
        pokerUI.node.x = -400;
        pokerUI.node.y = 70;
        this.robotArea.addChild(pokerUI.node);
        pokerUI.node.runAction(cc.sequence(cc.delayTime(0.0), cc.moveTo(0.5, -143, 2)));
    };
    Game.prototype.shuffle = function () {
        for (var i = 0; i < SHUFFLE_COUNT; ++i) {
            var sIdx = Math.floor(Math.random() * this.pokers.length);
            var eIdx = Math.floor(Math.random() * this.pokers.length);
            var tmpVal = this.pokers[sIdx];
            this.pokers[sIdx] = this.pokers[eIdx];
            this.pokers[eIdx] = tmpVal;
        }
    };
    Game.prototype.createPokerUI = function (poker) {
        var pokerUiNode = cc.instantiate(this.pokerPrefab);
        var pokerUI = pokerUiNode.getComponent(pokerUI_1.default);
        pokerUI.init(poker);
        return pokerUI;
    };
    Game.prototype.onHitBtnClick = function () {
        if (this.restPokerCnt <= 0)
            return this.whoWin();
        if (!this.turnPlayer || this.gameOver)
            return;
        var pokerNode = this.pokerContainer.children[this.restPokerCnt - 1];
        var worldPosition = pokerNode.convertToWorldSpaceAR(cc.v3(this.playerCardPosX(), -150, 0));
        var areaPosition = this.playerArea.convertToNodeSpaceAR(worldPosition);
        pokerNode.removeFromParent();
        this.playerArea.addChild(pokerNode);
        cc.audioEngine.playEffect(this.flipMusic, false);
        pokerNode.x = -400;
        pokerNode.y = 70;
        if (this.playerFirst) {
            pokerNode.runAction(cc.sequence(cc.delayTime(0.0), cc.moveTo(WINNER_PICK_CARD_DURATION, areaPosition.x, areaPosition.y), cc.scaleTo(WINNER_OPEN_CARD_DURATION, 0, 1), cc.callFunc(function () {
                var pokerUI = pokerNode.getComponent(pokerUI_1.default);
                pokerUI.setStatus(poker_1.PokerStatus.OPEN);
            }), cc.scaleTo(WINNER_OPEN_CARD_DURATION, 1, 1)));
        }
        else {
            pokerNode.runAction(cc.sequence(cc.delayTime(0.0), cc.moveTo(LOSER_PICK_CARD_DURATION, areaPosition.x, areaPosition.y), cc.scaleTo(LOSER_OPEN_CARD_DURATION, 0, 1), cc.callFunc(function () {
                var pokerUI = pokerNode.getComponent(pokerUI_1.default);
                pokerUI.setStatus(poker_1.PokerStatus.OPEN);
            }), cc.scaleTo(LOSER_OPEN_CARD_DURATION, 1, 1)));
        }
        this.player.score += this.pokers[this.restPokerCnt - 1].point;
        ++this.player.cardCnt;
        --this.restPokerCnt;
        this.turnPlayer = false;
        this.playerPoint.string = "Point: " + this.player.score;
        this.player.skip = false;
        this.robotHit();
    };
    Game.prototype.playerCardPosX = function () {
        return 330 + 70 * this.player.cardCnt;
    };
    Game.prototype.robotHit = function () {
        if (this.restPokerCnt <= 0)
            return this.whoWin();
        if (this.turnPlayer || this.gameOver)
            return;
        if (this.robot.score >= 17
            || this.robot.score + this.pokers[ROBOT_CARD_INDEX].point >= 21
            || (this.robot.score >= 10 && Math.random() < ROBOT_SKIP_POSSIBILITY)) {
            return this.robotStay();
        }
        var pokerNode = this.pokerContainer.children[this.restPokerCnt - 1];
        var worldPosition = pokerNode.convertToWorldSpaceAR(cc.v3(this.robotCardPosX(), 150, 0));
        var areaPosition = this.robotArea.convertToNodeSpaceAR(worldPosition);
        pokerNode.removeFromParent();
        this.robotArea.addChild(pokerNode);
        pokerNode.x = -400;
        pokerNode.y = 70;
        if (this.playerFirst) {
            pokerNode.runAction(cc.sequence(cc.delayTime(0.0), cc.moveTo(LOSER_PICK_CARD_DURATION, areaPosition.x, areaPosition.y), cc.scaleTo(LOSER_OPEN_CARD_DURATION, 0, 1), cc.callFunc(function () {
                var pokerUI = pokerNode.getComponent(pokerUI_1.default);
                pokerUI.setStatus(poker_1.PokerStatus.OPEN);
            }), cc.scaleTo(LOSER_OPEN_CARD_DURATION, 1, 1)));
        }
        else {
            pokerNode.runAction(cc.sequence(cc.delayTime(0.0), cc.moveTo(WINNER_PICK_CARD_DURATION, areaPosition.x, areaPosition.y), cc.scaleTo(WINNER_OPEN_CARD_DURATION, 0, 1), cc.callFunc(function () {
                var pokerUI = pokerNode.getComponent(pokerUI_1.default);
                pokerUI.setStatus(poker_1.PokerStatus.OPEN);
            }), cc.scaleTo(WINNER_OPEN_CARD_DURATION, 1, 1)));
        }
        this.robot.score += this.pokers[this.restPokerCnt - 1].point;
        ++this.robot.cardCnt;
        --this.restPokerCnt;
        this.turnPlayer = true;
        this.robot.skip = false;
        this.robotPoint.string = "Point: " + this.robot.score;
        this.robotChoice.string = '';
    };
    Game.prototype.robotStay = function () {
        if (this.restPokerCnt <= 0)
            return this.whoWin();
        this.turnPlayer = true;
        this.robotChoice.string = 'Stay';
        this.robot.skip = true;
        if (this.player.skip) {
            this.whoWin();
        }
    };
    Game.prototype.robotCardPosX = function () {
        return 330 + 70 * this.robot.cardCnt;
    };
    Game.prototype.onStayBtnClick = function () {
        cc.audioEngine.playEffect(this.stayMusic, false);
        if (this.restPokerCnt <= 0)
            return this.whoWin();
        if (!this.turnPlayer || this.gameOver)
            return;
        this.turnPlayer = false;
        this.player.skip = true;
        if (this.robot.skip) {
            return this.whoWin();
        }
        this.robotHit();
    };
    Game.prototype.onRestartBtnClick = function () {
        cc.audioEngine.playEffect(this.restartMusic, false);
        this.reset();
    };
    Game.prototype.whoWin = function () {
        var robotHoldCardNode = this.robotArea.children[0];
        var robotHoldCard = robotHoldCardNode.getComponent(pokerUI_1.default);
        robotHoldCard.setStatus(poker_1.PokerStatus.OPEN);
        console.log('player score: ' + this.player.score +
            ', player hold: ' + this.pokers[PLAYER_CARD_INDEX].point);
        console.log('robot score: ' + this.player.score +
            ', robot hold: ' + this.pokers[ROBOT_CARD_INDEX].point);
        this.robot.score += this.pokers[ROBOT_CARD_INDEX].point;
        this.playerPoint.string = "Point: " + this.player.score;
        this.robotPoint.string = "Point: " + this.robot.score;
        var playerWin = WinStatus.DRAW;
        if (this.player.score == this.robot.score) {
            playerWin = WinStatus.DRAW;
        }
        else if (this.player.score > 21 && this.robot.score > 21) {
            if (this.player.score < this.robot.score) {
                playerWin = WinStatus.WIN;
            }
            else {
                playerWin = WinStatus.LOSE;
            }
        }
        else if (this.player.score > 21) {
            playerWin = WinStatus.LOSE;
        }
        else if (this.robot.score > 21) {
            playerWin = WinStatus.WIN;
        }
        else {
            if (this.player.score > this.robot.score) {
                playerWin = WinStatus.WIN;
            }
            else {
                playerWin = WinStatus.LOSE;
            }
        }
        if (playerWin === WinStatus.WIN) {
            this.result.string = 'You Win';
            this.playerFirst = true;
            this.win.node.active = true;
            cc.audioEngine.playEffect(this.successMusic, false);
        }
        else {
            if (playerWin === WinStatus.DRAW) {
                this.result.string = 'Draw';
            }
            else {
                this.result.string = 'You Lose';
            }
            this.playerFirst = false;
            cc.audioEngine.playEffect(this.failedMusic, false);
        }
        this.gameOver = true;
    };
    Game.prototype.onCloseBtnClick = function () {
        cc.audioEngine.playEffect(this.clickMusic, false);
        cc.director.loadScene('menu');
        this.reset();
    };
    __decorate([
        property(cc.Node)
    ], Game.prototype, "pokerContainer", void 0);
    __decorate([
        property(cc.Prefab)
    ], Game.prototype, "pokerPrefab", void 0);
    __decorate([
        property(cc.Button)
    ], Game.prototype, "hitBtn", void 0);
    __decorate([
        property(cc.Button)
    ], Game.prototype, "stayBtn", void 0);
    __decorate([
        property(cc.Button)
    ], Game.prototype, "restartBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "closeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "playerArea", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "robotArea", void 0);
    __decorate([
        property(cc.Label)
    ], Game.prototype, "playerPoint", void 0);
    __decorate([
        property(cc.Label)
    ], Game.prototype, "robotPoint", void 0);
    __decorate([
        property(cc.Label)
    ], Game.prototype, "robotChoice", void 0);
    __decorate([
        property(cc.Label)
    ], Game.prototype, "result", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Game.prototype, "bgMusic", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Game.prototype, "flipMusic", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Game.prototype, "successMusic", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Game.prototype, "failedMusic", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Game.prototype, "clickMusic", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Game.prototype, "stayMusic", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Game.prototype, "restartMusic", void 0);
    __decorate([
        property(cc.Sprite)
    ], Game.prototype, "win", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;
var Player = /** @class */ (function () {
    function Player() {
        this.score = 0;
        this.cardCnt = 0;
        this.skip = false;
    }
    return Player;
}());
;
var WinStatus;
(function (WinStatus) {
    WinStatus[WinStatus["WIN"] = 0] = "WIN";
    WinStatus[WinStatus["DRAW"] = 1] = "DRAW";
    WinStatus[WinStatus["LOSE"] = 2] = "LOSE";
})(WinStatus || (WinStatus = {}));
;

cc._RF.pop();