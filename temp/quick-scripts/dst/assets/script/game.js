
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
var poker_1 = require("./poker");
var pokerUI_1 = require("./pokerUI");
var client_1 = require("./client");
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
        this.client = new client_1.default();
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
        this.playerPoint.string = 'Point: 0';
        this.robotPoint.string = 'Point: 0';
        this.result.string = '';
        this.robotChoice.string = '';
        this.player = new Player();
        this.robot = new Player();
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
        if (this.robot.score >= 17 ||
            (this.robot.score >= 10 && Math.random() < ROBOT_SKIP_POSSIBILITY)) {
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
        this.reset();
    };
    Game.prototype.whoWin = function () {
        var playerHoldCardNode = this.playerArea.children[0];
        var playerHoldCard = playerHoldCardNode.getComponent(pokerUI_1.default);
        playerHoldCard.setStatus(poker_1.PokerStatus.OPEN);
        var robotHoldCardNode = this.robotArea.children[0];
        var robotHoldCard = robotHoldCardNode.getComponent(pokerUI_1.default);
        robotHoldCard.setStatus(poker_1.PokerStatus.OPEN);
        console.log('player score: ' + this.player.score +
            ', player hold: ' + this.pokers[PLAYER_CARD_INDEX].point);
        this.player.score += this.pokers[PLAYER_CARD_INDEX].point;
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsS0FBSyxDQUFDO3dDQUF5QjtJQUVwQjtRQUF2QixRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt5Q0FBOEI7SUFDN0I7UUFBdkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7MkNBQWdDO0lBQy9CO1FBQXZCLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUFtQztJQUNsQztRQUF2QixRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FBa0M7SUFFcEM7UUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cUNBQXVCO0lBeEIxQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBc1V4QjtJQUFELFdBQUM7Q0F0VUQsQUFzVUMsQ0F0VWlDLEVBQUUsQ0FBQyxTQUFTLEdBc1U3QztrQkF0VW9CLElBQUk7QUF3VXpCO0lBS0k7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFBQSxDQUFDO0FBRUYsSUFBSyxTQUlKO0FBSkQsV0FBSyxTQUFTO0lBQ1YsdUNBQU8sQ0FBQTtJQUNQLHlDQUFRLENBQUE7SUFDUix5Q0FBUSxDQUFBO0FBQ1osQ0FBQyxFQUpJLFNBQVMsS0FBVCxTQUFTLFFBSWI7QUFBQSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IHtQb2tlciwgUG9rZXJTdGF0dXN9IGZyb20gXCIuL3Bva2VyXCJcbmltcG9ydCBQb2tlclVJIGZyb20gXCIuL3Bva2VyVUlcIlxuaW1wb3J0IENsaWVudCBmcm9tICcuL2NsaWVudCdcblxuY29uc3QgUE9LRVJfQ09VTlQ6IG51bWJlciA9IDExO1xuY29uc3QgU0hVRkZMRV9DT1VOVDogbnVtYmVyID0gMTAwO1xuY29uc3QgUExBWUVSX0NBUkRfSU5ERVg6IG51bWJlciA9IDk7XG5jb25zdCBST0JPVF9DQVJEX0lOREVYOiBudW1iZXIgPSAxMDtcbmNvbnN0IFJPQk9UX1NLSVBfUE9TU0lCSUxJVFk6IG51bWJlciA9IDAuNTtcbmNvbnN0IFdJTk5FUl9QSUNLX0NBUkRfRFVSQVRJT046IG51bWJlciA9IDAuNTtcbmNvbnN0IExPU0VSX1BJQ0tfQ0FSRF9EVVJBVElPTjogbnVtYmVyID0gMS4wO1xuY29uc3QgV0lOTkVSX09QRU5fQ0FSRF9EVVJBVElPTjogbnVtYmVyID0gMC4zO1xuY29uc3QgTE9TRVJfT1BFTl9DQVJEX0RVUkFUSU9OOiBudW1iZXIgPSAwLjU7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgcG9rZXJDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpIHBva2VyUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIHByaXZhdGUgcG9rZXJzOiBQb2tlcltdID0gW11cbiAgICBwcml2YXRlIHJlc3RQb2tlckNudDogbnVtYmVyID0gUE9LRVJfQ09VTlQgLSAyO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbikgaGl0QnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pIHN0YXlCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbikgcmVzdGFydEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgY2xvc2VCdG46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIHBsYXllckFyZWE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSByb2JvdEFyZWE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgcGxheWVyUG9pbnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHJvYm90UG9pbnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHJvYm90Q2hvaWNlOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHJlc3VsdDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcCkgYmdNdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKSBmbGlwTXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcCkgc3VjY2Vzc011c2ljOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApIGZhaWxlZE11c2ljOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSkgd2luOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBwbGF5ZXI6IFBsYXllciA9IG51bGw7XG4gICAgcHJpdmF0ZSByb2JvdDogUGxheWVyID0gbnVsbDtcbiAgICBwcml2YXRlIHR1cm5QbGF5ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgcGxheWVyRmlyc3Q6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgZ2FtZU92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgY2xpZW50OiBDbGllbnQgPSBudWxsO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYmdNdXNpYywgdHJ1ZSk7XG5cbiAgICAgICAgZm9yIChsZXQgcG9pbnQgPSAxOyBwb2ludCA8PSBQT0tFUl9DT1VOVDsgcG9pbnQrKykge1xuICAgICAgICAgICAgbGV0IHBva2VyID0gbmV3IFBva2VyKHBvaW50LCBQb2tlclN0YXR1cy5DTE9TRSk7XG4gICAgICAgICAgICB0aGlzLnBva2Vycy5wdXNoKHBva2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICAgIHRoaXMuaGl0QnRuLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vbkhpdEJ0bkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5zdGF5QnRuLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vblN0YXlCdG5DbGljaywgdGhpcyk7XG4gICAgICAgIHRoaXMucmVzdGFydEJ0bi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25SZXN0YXJ0QnRuQ2xpY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3NlQnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uQ2xvc2VCdG5DbGljaywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5jbGllbnQgPSBuZXcgQ2xpZW50KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCkge1xuICAgICAgICB0aGlzLndpbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2h1ZmZsZSgpO1xuICAgICAgICB0aGlzLnJlc3RQb2tlckNudCA9IFBPS0VSX0NPVU5UIC0gMjtcblxuICAgICAgICB0aGlzLnBva2VyQ29udGFpbmVyLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUE9LRVJfQ09VTlQgLSAyOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwb2tlclVJID0gdGhpcy5jcmVhdGVQb2tlclVJKHRoaXMucG9rZXJzW2ldKTtcbiAgICAgICAgICAgIHBva2VyVUkubm9kZS54ID0gLTAuMyAqIGk7XG4gICAgICAgICAgICBwb2tlclVJLm5vZGUueSA9IDAuMyAqIGk7XG4gICAgICAgICAgICB0aGlzLnBva2VyQ29udGFpbmVyLmFkZENoaWxkKHBva2VyVUkubm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBsYXllckFyZWEucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5yb2JvdEFyZWEucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcblxuICAgICAgICB0aGlzLnBsYXllclBvaW50LnN0cmluZyA9ICdQb2ludDogMCc7XG4gICAgICAgIHRoaXMucm9ib3RQb2ludC5zdHJpbmcgPSAnUG9pbnQ6IDAnO1xuICAgICAgICB0aGlzLnJlc3VsdC5zdHJpbmcgPSAnJztcbiAgICAgICAgdGhpcy5yb2JvdENob2ljZS5zdHJpbmcgPSAnJztcblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5yb2JvdCA9IG5ldyBQbGF5ZXIoKTtcblxuICAgICAgICB0aGlzLnBsYWNlUGxheWVySG9sZENhcmQoKTtcbiAgICAgICAgdGhpcy5wbGFjZVJvYm90SG9sZENhcmQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYWNlUGxheWVySG9sZENhcmQoKSB7XG4gICAgICAgIGxldCBwb2tlclVJID0gdGhpcy5jcmVhdGVQb2tlclVJKHRoaXMucG9rZXJzW1BMQVlFUl9DQVJEX0lOREVYXSk7XG4gICAgICAgIHBva2VyVUkubm9kZS54ID0gLTQwMDtcbiAgICAgICAgcG9rZXJVSS5ub2RlLnkgPSA3MDtcbiAgICAgICAgdGhpcy5wbGF5ZXJBcmVhLmFkZENoaWxkKHBva2VyVUkubm9kZSk7XG4gICAgICAgIHBva2VyVUkubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4wKSxcbiAgICAgICAgICAgIGNjLm1vdmVUbygwLjUsIC0xNDMsIDMpLFxuICAgICAgICApKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYWNlUm9ib3RIb2xkQ2FyZCgpIHtcbiAgICAgICAgbGV0IHBva2VyVUkgPSB0aGlzLmNyZWF0ZVBva2VyVUkodGhpcy5wb2tlcnNbUk9CT1RfQ0FSRF9JTkRFWF0pO1xuICAgICAgICBwb2tlclVJLm5vZGUueCA9IC00MDA7XG4gICAgICAgIHBva2VyVUkubm9kZS55ID0gNzA7XG4gICAgICAgIHRoaXMucm9ib3RBcmVhLmFkZENoaWxkKHBva2VyVUkubm9kZSk7XG4gICAgICAgIHBva2VyVUkubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4wKSxcbiAgICAgICAgICAgIGNjLm1vdmVUbygwLjUsIC0xNDMsIDIpLFxuICAgICAgICApKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNodWZmbGUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU0hVRkZMRV9DT1VOVDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgc0lkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucG9rZXJzLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgZUlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucG9rZXJzLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgdG1wVmFsID0gdGhpcy5wb2tlcnNbc0lkeF1cbiAgICAgICAgICAgIHRoaXMucG9rZXJzW3NJZHhdID0gdGhpcy5wb2tlcnNbZUlkeF1cbiAgICAgICAgICAgIHRoaXMucG9rZXJzW2VJZHhdID0gdG1wVmFsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVBva2VyVUkocG9rZXI6IFBva2VyKTogUG9rZXJVSSB7XG4gICAgICAgIGxldCBwb2tlclVpTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucG9rZXJQcmVmYWIpO1xuICAgICAgICBsZXQgcG9rZXJVSTogUG9rZXJVSSA9IHBva2VyVWlOb2RlLmdldENvbXBvbmVudChQb2tlclVJKTtcbiAgICAgICAgcG9rZXJVSS5pbml0KHBva2VyKTtcbiAgICAgICAgcmV0dXJuIHBva2VyVUk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkhpdEJ0bkNsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5yZXN0UG9rZXJDbnQgPD0gMCkgcmV0dXJuIHRoaXMud2hvV2luKCk7XG4gICAgICAgIGlmICghdGhpcy50dXJuUGxheWVyIHx8IHRoaXMuZ2FtZU92ZXIpIHJldHVybjtcblxuICAgICAgICBsZXQgcG9rZXJOb2RlID0gdGhpcy5wb2tlckNvbnRhaW5lci5jaGlsZHJlblt0aGlzLnJlc3RQb2tlckNudCAtIDFdO1xuICAgICAgICBsZXQgd29ybGRQb3NpdGlvbiA9IHBva2VyTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjModGhpcy5wbGF5ZXJDYXJkUG9zWCgpLCAtMTUwLCAwKSk7XG4gICAgICAgIGxldCBhcmVhUG9zaXRpb24gPSB0aGlzLnBsYXllckFyZWEuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3NpdGlvbik7XG4gICAgICAgIHBva2VyTm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgIHRoaXMucGxheWVyQXJlYS5hZGRDaGlsZChwb2tlck5vZGUpO1xuXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5mbGlwTXVzaWMsIGZhbHNlKTtcblxuICAgICAgICBwb2tlck5vZGUueCA9IC00MDA7XG4gICAgICAgIHBva2VyTm9kZS55ID0gNzA7XG5cbiAgICAgICAgaWYgKHRoaXMucGxheWVyRmlyc3QpIHtcbiAgICAgICAgICAgIHBva2VyTm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMCksXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKFdJTk5FUl9QSUNLX0NBUkRfRFVSQVRJT04sIGFyZWFQb3NpdGlvbi54LCBhcmVhUG9zaXRpb24ueSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhXSU5ORVJfT1BFTl9DQVJEX0RVUkFUSU9OLCAwLCAxKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb2tlclVJID0gcG9rZXJOb2RlLmdldENvbXBvbmVudChQb2tlclVJKTtcbiAgICAgICAgICAgICAgICAgICAgcG9rZXJVSS5zZXRTdGF0dXMoUG9rZXJTdGF0dXMuT1BFTik7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhXSU5ORVJfT1BFTl9DQVJEX0RVUkFUSU9OLCAxLCAxKVxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb2tlck5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjApLFxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbyhMT1NFUl9QSUNLX0NBUkRfRFVSQVRJT04sIGFyZWFQb3NpdGlvbi54LCBhcmVhUG9zaXRpb24ueSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhMT1NFUl9PUEVOX0NBUkRfRFVSQVRJT04sIDAsIDEpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBva2VyVUkgPSBwb2tlck5vZGUuZ2V0Q29tcG9uZW50KFBva2VyVUkpO1xuICAgICAgICAgICAgICAgICAgICBwb2tlclVJLnNldFN0YXR1cyhQb2tlclN0YXR1cy5PUEVOKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKExPU0VSX09QRU5fQ0FSRF9EVVJBVElPTiwgMSwgMSlcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbGF5ZXIuc2NvcmUgKz0gdGhpcy5wb2tlcnNbdGhpcy5yZXN0UG9rZXJDbnQgLSAxXS5wb2ludDtcbiAgICAgICAgKyt0aGlzLnBsYXllci5jYXJkQ250O1xuICAgICAgICAtLXRoaXMucmVzdFBva2VyQ250O1xuICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnBsYXllclBvaW50LnN0cmluZyA9IGBQb2ludDogJHt0aGlzLnBsYXllci5zY29yZX1gO1xuICAgICAgICB0aGlzLnBsYXllci5za2lwID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5yb2JvdEhpdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGxheWVyQ2FyZFBvc1goKSB7XG4gICAgICAgIHJldHVybiAzMzAgKyA3MCAqIHRoaXMucGxheWVyLmNhcmRDbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByb2JvdEhpdCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdFBva2VyQ250IDw9IDApIHJldHVybiB0aGlzLndob1dpbigpO1xuICAgICAgICBpZiAodGhpcy50dXJuUGxheWVyIHx8IHRoaXMuZ2FtZU92ZXIpIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy5yb2JvdC5zY29yZSA+PSAxNyB8fCBcbiAgICAgICAgICAgICh0aGlzLnJvYm90LnNjb3JlID49IDEwICYmIE1hdGgucmFuZG9tKCkgPCBST0JPVF9TS0lQX1BPU1NJQklMSVRZKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9ib3RTdGF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcG9rZXJOb2RlID0gdGhpcy5wb2tlckNvbnRhaW5lci5jaGlsZHJlblt0aGlzLnJlc3RQb2tlckNudCAtIDFdO1xuICAgICAgICBsZXQgd29ybGRQb3NpdGlvbiA9IHBva2VyTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjModGhpcy5yb2JvdENhcmRQb3NYKCksIDE1MCwgMCkpO1xuICAgICAgICBsZXQgYXJlYVBvc2l0aW9uID0gdGhpcy5yb2JvdEFyZWEuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3NpdGlvbik7XG4gICAgICAgIHBva2VyTm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgIHRoaXMucm9ib3RBcmVhLmFkZENoaWxkKHBva2VyTm9kZSk7XG5cbiAgICAgICAgcG9rZXJOb2RlLnggPSAtNDAwO1xuICAgICAgICBwb2tlck5vZGUueSA9IDcwO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYXllckZpcnN0KSB7XG4gICAgICAgICAgICBwb2tlck5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjApLFxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbyhMT1NFUl9QSUNLX0NBUkRfRFVSQVRJT04sIGFyZWFQb3NpdGlvbi54LCBhcmVhUG9zaXRpb24ueSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhMT1NFUl9PUEVOX0NBUkRfRFVSQVRJT04sIDAsIDEpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBva2VyVUkgPSBwb2tlck5vZGUuZ2V0Q29tcG9uZW50KFBva2VyVUkpO1xuICAgICAgICAgICAgICAgICAgICBwb2tlclVJLnNldFN0YXR1cyhQb2tlclN0YXR1cy5PUEVOKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKExPU0VSX09QRU5fQ0FSRF9EVVJBVElPTiwgMSwgMSlcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9rZXJOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4wKSxcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oV0lOTkVSX1BJQ0tfQ0FSRF9EVVJBVElPTiwgYXJlYVBvc2l0aW9uLngsIGFyZWFQb3NpdGlvbi55KSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKFdJTk5FUl9PUEVOX0NBUkRfRFVSQVRJT04sIDAsIDEpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBva2VyVUkgPSBwb2tlck5vZGUuZ2V0Q29tcG9uZW50KFBva2VyVUkpO1xuICAgICAgICAgICAgICAgICAgICBwb2tlclVJLnNldFN0YXR1cyhQb2tlclN0YXR1cy5PUEVOKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKFdJTk5FUl9PUEVOX0NBUkRfRFVSQVRJT04sIDEsIDEpXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm9ib3Quc2NvcmUgKz0gdGhpcy5wb2tlcnNbdGhpcy5yZXN0UG9rZXJDbnQgLSAxXS5wb2ludDtcbiAgICAgICAgKyt0aGlzLnJvYm90LmNhcmRDbnQ7XG4gICAgICAgIC0tdGhpcy5yZXN0UG9rZXJDbnQ7XG4gICAgICAgIHRoaXMudHVyblBsYXllciA9IHRydWU7XG4gICAgICAgIHRoaXMucm9ib3Quc2tpcCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMucm9ib3RQb2ludC5zdHJpbmcgPSBgUG9pbnQ6ICR7dGhpcy5yb2JvdC5zY29yZX1gO1xuICAgICAgICB0aGlzLnJvYm90Q2hvaWNlLnN0cmluZyA9ICcnXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByb2JvdFN0YXkoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3RQb2tlckNudCA8PSAwKSByZXR1cm4gdGhpcy53aG9XaW4oKTtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yb2JvdENob2ljZS5zdHJpbmcgPSAnU3RheSdcbiAgICAgICAgdGhpcy5yb2JvdC5za2lwID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIuc2tpcCkge1xuICAgICAgICAgICAgdGhpcy53aG9XaW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcm9ib3RDYXJkUG9zWCgpIHtcbiAgICAgICAgcmV0dXJuIDMzMCArIDcwICogdGhpcy5yb2JvdC5jYXJkQ250O1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TdGF5QnRuQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3RQb2tlckNudCA8PSAwKSByZXR1cm4gdGhpcy53aG9XaW4oKTtcbiAgICAgICAgaWYgKCF0aGlzLnR1cm5QbGF5ZXIgfHwgdGhpcy5nYW1lT3ZlcikgcmV0dXJuO1xuICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2tpcCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMucm9ib3Quc2tpcCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hvV2luKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJvYm90SGl0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblJlc3RhcnRCdG5DbGljaygpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgd2hvV2luKCkge1xuICAgICAgICBsZXQgcGxheWVySG9sZENhcmROb2RlID0gdGhpcy5wbGF5ZXJBcmVhLmNoaWxkcmVuWzBdO1xuICAgICAgICBsZXQgcGxheWVySG9sZENhcmQgPSBwbGF5ZXJIb2xkQ2FyZE5vZGUuZ2V0Q29tcG9uZW50KFBva2VyVUkpO1xuICAgICAgICBwbGF5ZXJIb2xkQ2FyZC5zZXRTdGF0dXMoUG9rZXJTdGF0dXMuT1BFTik7XG5cbiAgICAgICAgbGV0IHJvYm90SG9sZENhcmROb2RlID0gdGhpcy5yb2JvdEFyZWEuY2hpbGRyZW5bMF07XG4gICAgICAgIGxldCByb2JvdEhvbGRDYXJkID0gcm9ib3RIb2xkQ2FyZE5vZGUuZ2V0Q29tcG9uZW50KFBva2VyVUkpO1xuICAgICAgICByb2JvdEhvbGRDYXJkLnNldFN0YXR1cyhQb2tlclN0YXR1cy5PUEVOKTtcblxuICAgICAgICBjb25zb2xlLmxvZygncGxheWVyIHNjb3JlOiAnICsgdGhpcy5wbGF5ZXIuc2NvcmUgK1xuICAgICAgICAgICAgICAgICAgICAnLCBwbGF5ZXIgaG9sZDogJyArIHRoaXMucG9rZXJzW1BMQVlFUl9DQVJEX0lOREVYXS5wb2ludCk7XG4gICAgICAgIHRoaXMucGxheWVyLnNjb3JlICs9IHRoaXMucG9rZXJzW1BMQVlFUl9DQVJEX0lOREVYXS5wb2ludDtcbiAgICAgICAgY29uc29sZS5sb2coJ3JvYm90IHNjb3JlOiAnICsgdGhpcy5wbGF5ZXIuc2NvcmUgK1xuICAgICAgICAgICAgICAgICAgICAnLCByb2JvdCBob2xkOiAnICsgdGhpcy5wb2tlcnNbUk9CT1RfQ0FSRF9JTkRFWF0ucG9pbnQpO1xuICAgICAgICB0aGlzLnJvYm90LnNjb3JlICs9IHRoaXMucG9rZXJzW1JPQk9UX0NBUkRfSU5ERVhdLnBvaW50O1xuXG4gICAgICAgIHRoaXMucGxheWVyUG9pbnQuc3RyaW5nID0gYFBvaW50OiAke3RoaXMucGxheWVyLnNjb3JlfWA7XG4gICAgICAgIHRoaXMucm9ib3RQb2ludC5zdHJpbmcgPSBgUG9pbnQ6ICR7dGhpcy5yb2JvdC5zY29yZX1gO1xuXG4gICAgICAgIGxldCBwbGF5ZXJXaW46IFdpblN0YXR1cyA9IFdpblN0YXR1cy5EUkFXO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYXllci5zY29yZSA9PSB0aGlzLnJvYm90LnNjb3JlKSB7XG4gICAgICAgICAgICBwbGF5ZXJXaW4gPSBXaW5TdGF0dXMuRFJBVztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllci5zY29yZSA+IDIxICYmIHRoaXMucm9ib3Quc2NvcmUgPiAyMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLnNjb3JlIDwgdGhpcy5yb2JvdC5zY29yZSkge1xuICAgICAgICAgICAgICAgIHBsYXllcldpbiA9IFdpblN0YXR1cy5XSU47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBsYXllcldpbiA9IFdpblN0YXR1cy5MT1NFO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyLnNjb3JlID4gMjEpIHtcbiAgICAgICAgICAgIHBsYXllcldpbiA9IFdpblN0YXR1cy5MT1NFO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucm9ib3Quc2NvcmUgPiAyMSkge1xuICAgICAgICAgICAgcGxheWVyV2luID0gV2luU3RhdHVzLldJTjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5zY29yZSA+IHRoaXMucm9ib3Quc2NvcmUpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJXaW4gPSBXaW5TdGF0dXMuV0lOO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJXaW4gPSBXaW5TdGF0dXMuTE9TRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGF5ZXJXaW4gPT09IFdpblN0YXR1cy5XSU4pIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LnN0cmluZyA9ICdZb3UgV2luJztcbiAgICAgICAgICAgIHRoaXMucGxheWVyRmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy53aW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnN1Y2Nlc3NNdXNpYywgZmFsc2UpO1xuICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJXaW4gPT09IFdpblN0YXR1cy5EUkFXKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQuc3RyaW5nID0gJ0RyYXcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdC5zdHJpbmcgPSAnWW91IExvc2UnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmZhaWxlZE11c2ljLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xvc2VCdG5DbGljaygpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtZW51Jyk7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG59XG5cbmNsYXNzIFBsYXllciB7XG4gICAgcHVibGljIHNjb3JlOiBudW1iZXI7XG4gICAgcHVibGljIGNhcmRDbnQ6IG51bWJlcjtcbiAgICBwdWJsaWMgc2tpcDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5jYXJkQ250ID0gMDtcbiAgICAgICAgdGhpcy5za2lwID0gZmFsc2U7XG4gICAgfVxufTtcblxuZW51bSBXaW5TdGF0dXMge1xuICAgIFdJTiA9IDAsXG4gICAgRFJBVyA9IDEsXG4gICAgTE9TRSA9IDIsXG59O1xuIl19