
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyx3Q0FBaUQ7QUFDakQscUNBQStCO0FBRy9CLElBQU0sV0FBVyxHQUFXLEVBQUUsQ0FBQztBQUMvQixJQUFNLGFBQWEsR0FBVyxHQUFHLENBQUM7QUFDbEMsSUFBTSxpQkFBaUIsR0FBVyxDQUFDLENBQUM7QUFDcEMsSUFBTSxnQkFBZ0IsR0FBVyxFQUFFLENBQUM7QUFDcEMsSUFBTSxzQkFBc0IsR0FBVyxHQUFHLENBQUM7QUFDM0MsSUFBTSx5QkFBeUIsR0FBVyxHQUFHLENBQUM7QUFDOUMsSUFBTSx3QkFBd0IsR0FBVyxHQUFHLENBQUM7QUFDN0MsSUFBTSx5QkFBeUIsR0FBVyxHQUFHLENBQUM7QUFDOUMsSUFBTSx3QkFBd0IsR0FBVyxHQUFHLENBQUM7QUFHN0M7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUEyVUM7UUExVXNCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQzdCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBQzNDLFlBQU0sR0FBWSxFQUFFLENBQUE7UUFDcEIsa0JBQVksR0FBVyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFDekIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUMxQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUMvQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDekIsaUJBQVcsR0FB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VkEsQUFVQyxJQUFBO0FBQUEsQ0FBQztBQUVGLElBQUssU0FJSjtBQUpELFdBQUssU0FBUztJQUNWLHVDQUFPLENBQUE7SUFDUCx5Q0FBUSxDQUFBO0lBQ1IseUNBQVEsQ0FBQTtBQUNaLENBQUMsRUFKSSxTQUFTLEtBQVQsU0FBUyxRQUliO0FBQUEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCB7UG9rZXIsIFBva2VyU3RhdHVzfSBmcm9tIFwiLi9lbnRpdHkvcG9rZXJcIlxuaW1wb3J0IFBva2VyVUkgZnJvbSBcIi4vcG9rZXJVSVwiXG5pbXBvcnQgQ2xpZW50IGZyb20gJy4vY2xpZW50J1xuXG5jb25zdCBQT0tFUl9DT1VOVDogbnVtYmVyID0gMTE7XG5jb25zdCBTSFVGRkxFX0NPVU5UOiBudW1iZXIgPSAxMDA7XG5jb25zdCBQTEFZRVJfQ0FSRF9JTkRFWDogbnVtYmVyID0gOTtcbmNvbnN0IFJPQk9UX0NBUkRfSU5ERVg6IG51bWJlciA9IDEwO1xuY29uc3QgUk9CT1RfU0tJUF9QT1NTSUJJTElUWTogbnVtYmVyID0gMC41O1xuY29uc3QgV0lOTkVSX1BJQ0tfQ0FSRF9EVVJBVElPTjogbnVtYmVyID0gMC41O1xuY29uc3QgTE9TRVJfUElDS19DQVJEX0RVUkFUSU9OOiBudW1iZXIgPSAxLjA7XG5jb25zdCBXSU5ORVJfT1BFTl9DQVJEX0RVUkFUSU9OOiBudW1iZXIgPSAwLjM7XG5jb25zdCBMT1NFUl9PUEVOX0NBUkRfRFVSQVRJT046IG51bWJlciA9IDAuNTtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBwb2tlckNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgcG9rZXJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgcHJpdmF0ZSBwb2tlcnM6IFBva2VyW10gPSBbXVxuICAgIHByaXZhdGUgcmVzdFBva2VyQ250OiBudW1iZXIgPSBQT0tFUl9DT1VOVCAtIDI7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKSBoaXRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbikgc3RheUJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKSByZXN0YXJ0QnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBjbG9zZUJ0bjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgcGxheWVyQXJlYTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIHJvYm90QXJlYTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKSBwbGF5ZXJQb2ludDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgcm9ib3RQb2ludDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgcm9ib3RDaG9pY2U6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgcmVzdWx0OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKSBiZ011c2ljOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApIGZsaXBNdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKSBzdWNjZXNzTXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcCkgZmFpbGVkTXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcCkgY2xpY2tNdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKSBzdGF5TXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcCkgcmVzdGFydE11c2ljOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSkgd2luOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBwbGF5ZXI6IFBsYXllciA9IG51bGw7XG4gICAgcHJpdmF0ZSByb2JvdDogUGxheWVyID0gbnVsbDtcbiAgICBwcml2YXRlIHR1cm5QbGF5ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgcGxheWVyRmlyc3Q6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgZ2FtZU92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgY2xpZW50OiBDbGllbnQgPSBudWxsO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYmdNdXNpYywgdHJ1ZSk7XG5cbiAgICAgICAgZm9yIChsZXQgcG9pbnQgPSAxOyBwb2ludCA8PSBQT0tFUl9DT1VOVDsgcG9pbnQrKykge1xuICAgICAgICAgICAgbGV0IHBva2VyID0gbmV3IFBva2VyKHBvaW50LCBQb2tlclN0YXR1cy5DTE9TRSk7XG4gICAgICAgICAgICB0aGlzLnBva2Vycy5wdXNoKHBva2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICAgIHRoaXMuaGl0QnRuLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vbkhpdEJ0bkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5zdGF5QnRuLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vblN0YXlCdG5DbGljaywgdGhpcyk7XG4gICAgICAgIHRoaXMucmVzdGFydEJ0bi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25SZXN0YXJ0QnRuQ2xpY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3NlQnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uQ2xvc2VCdG5DbGljaywgdGhpcyk7XG5cbiAgICAgICAgLy8gdGhpcy5jbGllbnQgPSBuZXcgQ2xpZW50KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCkge1xuICAgICAgICB0aGlzLndpbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2h1ZmZsZSgpO1xuICAgICAgICB0aGlzLnJlc3RQb2tlckNudCA9IFBPS0VSX0NPVU5UIC0gMjtcblxuICAgICAgICB0aGlzLnBva2VyQ29udGFpbmVyLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUE9LRVJfQ09VTlQgLSAyOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwb2tlclVJID0gdGhpcy5jcmVhdGVQb2tlclVJKHRoaXMucG9rZXJzW2ldKTtcbiAgICAgICAgICAgIHBva2VyVUkubm9kZS54ID0gLTAuMyAqIGk7XG4gICAgICAgICAgICBwb2tlclVJLm5vZGUueSA9IDAuMyAqIGk7XG4gICAgICAgICAgICB0aGlzLnBva2VyQ29udGFpbmVyLmFkZENoaWxkKHBva2VyVUkubm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBsYXllckFyZWEucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5yb2JvdEFyZWEucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5yb2JvdCA9IG5ldyBQbGF5ZXIoKTtcblxuICAgICAgICB0aGlzLnBsYXllci5zY29yZSArPSB0aGlzLnBva2Vyc1tQTEFZRVJfQ0FSRF9JTkRFWF0ucG9pbnQ7XG4gICAgICAgIHRoaXMucGxheWVyUG9pbnQuc3RyaW5nID0gYFBvaW50OiAke3RoaXMucGxheWVyLnNjb3JlfWA7XG4gICAgICAgIHRoaXMucm9ib3RQb2ludC5zdHJpbmcgPSAnUG9pbnQ6IDAnO1xuICAgICAgICB0aGlzLnJlc3VsdC5zdHJpbmcgPSAnJztcbiAgICAgICAgdGhpcy5yb2JvdENob2ljZS5zdHJpbmcgPSAnJztcblxuICAgICAgICB0aGlzLnBsYWNlUGxheWVySG9sZENhcmQoKTtcbiAgICAgICAgdGhpcy5wbGFjZVJvYm90SG9sZENhcmQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYWNlUGxheWVySG9sZENhcmQoKSB7XG4gICAgICAgIGxldCBwb2tlclVJID0gdGhpcy5jcmVhdGVQb2tlclVJKHRoaXMucG9rZXJzW1BMQVlFUl9DQVJEX0lOREVYXSk7XG4gICAgICAgIHBva2VyVUkubm9kZS54ID0gLTQwMDtcbiAgICAgICAgcG9rZXJVSS5ub2RlLnkgPSA3MDtcbiAgICAgICAgcG9rZXJVSS5zZXRTdGF0dXMoUG9rZXJTdGF0dXMuT1BFTik7XG4gICAgICAgIHRoaXMucGxheWVyQXJlYS5hZGRDaGlsZChwb2tlclVJLm5vZGUpO1xuICAgICAgICBwb2tlclVJLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMCksXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMC41LCAtMTQzLCAzKSxcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGFjZVJvYm90SG9sZENhcmQoKSB7XG4gICAgICAgIGxldCBwb2tlclVJID0gdGhpcy5jcmVhdGVQb2tlclVJKHRoaXMucG9rZXJzW1JPQk9UX0NBUkRfSU5ERVhdKTtcbiAgICAgICAgcG9rZXJVSS5ub2RlLnggPSAtNDAwO1xuICAgICAgICBwb2tlclVJLm5vZGUueSA9IDcwO1xuICAgICAgICB0aGlzLnJvYm90QXJlYS5hZGRDaGlsZChwb2tlclVJLm5vZGUpO1xuICAgICAgICBwb2tlclVJLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMCksXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMC41LCAtMTQzLCAyKSxcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaHVmZmxlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFNIVUZGTEVfQ09VTlQ7ICsraSkge1xuICAgICAgICAgICAgbGV0IHNJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnBva2Vycy5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IGVJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnBva2Vycy5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IHRtcFZhbCA9IHRoaXMucG9rZXJzW3NJZHhdXG4gICAgICAgICAgICB0aGlzLnBva2Vyc1tzSWR4XSA9IHRoaXMucG9rZXJzW2VJZHhdXG4gICAgICAgICAgICB0aGlzLnBva2Vyc1tlSWR4XSA9IHRtcFZhbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVQb2tlclVJKHBva2VyOiBQb2tlcik6IFBva2VyVUkge1xuICAgICAgICBsZXQgcG9rZXJVaU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBva2VyUHJlZmFiKTtcbiAgICAgICAgbGV0IHBva2VyVUk6IFBva2VyVUkgPSBwb2tlclVpTm9kZS5nZXRDb21wb25lbnQoUG9rZXJVSSk7XG4gICAgICAgIHBva2VyVUkuaW5pdChwb2tlcik7XG4gICAgICAgIHJldHVybiBwb2tlclVJO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25IaXRCdG5DbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdFBva2VyQ250IDw9IDApIHJldHVybiB0aGlzLndob1dpbigpO1xuICAgICAgICBpZiAoIXRoaXMudHVyblBsYXllciB8fCB0aGlzLmdhbWVPdmVyKSByZXR1cm47XG5cbiAgICAgICAgbGV0IHBva2VyTm9kZSA9IHRoaXMucG9rZXJDb250YWluZXIuY2hpbGRyZW5bdGhpcy5yZXN0UG9rZXJDbnQgLSAxXTtcbiAgICAgICAgbGV0IHdvcmxkUG9zaXRpb24gPSBwb2tlck5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKHRoaXMucGxheWVyQ2FyZFBvc1goKSwgLTE1MCwgMCkpO1xuICAgICAgICBsZXQgYXJlYVBvc2l0aW9uID0gdGhpcy5wbGF5ZXJBcmVhLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zaXRpb24pO1xuICAgICAgICBwb2tlck5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICB0aGlzLnBsYXllckFyZWEuYWRkQ2hpbGQocG9rZXJOb2RlKTtcblxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZmxpcE11c2ljLCBmYWxzZSk7XG5cbiAgICAgICAgcG9rZXJOb2RlLnggPSAtNDAwO1xuICAgICAgICBwb2tlck5vZGUueSA9IDcwO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYXllckZpcnN0KSB7XG4gICAgICAgICAgICBwb2tlck5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjApLFxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbyhXSU5ORVJfUElDS19DQVJEX0RVUkFUSU9OLCBhcmVhUG9zaXRpb24ueCwgYXJlYVBvc2l0aW9uLnkpLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oV0lOTkVSX09QRU5fQ0FSRF9EVVJBVElPTiwgMCwgMSksXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9rZXJVSSA9IHBva2VyTm9kZS5nZXRDb21wb25lbnQoUG9rZXJVSSk7XG4gICAgICAgICAgICAgICAgICAgIHBva2VyVUkuc2V0U3RhdHVzKFBva2VyU3RhdHVzLk9QRU4pO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oV0lOTkVSX09QRU5fQ0FSRF9EVVJBVElPTiwgMSwgMSlcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9rZXJOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4wKSxcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oTE9TRVJfUElDS19DQVJEX0RVUkFUSU9OLCBhcmVhUG9zaXRpb24ueCwgYXJlYVBvc2l0aW9uLnkpLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oTE9TRVJfT1BFTl9DQVJEX0RVUkFUSU9OLCAwLCAxKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb2tlclVJID0gcG9rZXJOb2RlLmdldENvbXBvbmVudChQb2tlclVJKTtcbiAgICAgICAgICAgICAgICAgICAgcG9rZXJVSS5zZXRTdGF0dXMoUG9rZXJTdGF0dXMuT1BFTik7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhMT1NFUl9PUEVOX0NBUkRfRFVSQVRJT04sIDEsIDEpXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGxheWVyLnNjb3JlICs9IHRoaXMucG9rZXJzW3RoaXMucmVzdFBva2VyQ250IC0gMV0ucG9pbnQ7XG4gICAgICAgICsrdGhpcy5wbGF5ZXIuY2FyZENudDtcbiAgICAgICAgLS10aGlzLnJlc3RQb2tlckNudDtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJQb2ludC5zdHJpbmcgPSBgUG9pbnQ6ICR7dGhpcy5wbGF5ZXIuc2NvcmV9YDtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2tpcCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMucm9ib3RIaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXllckNhcmRQb3NYKCkge1xuICAgICAgICByZXR1cm4gMzMwICsgNzAgKiB0aGlzLnBsYXllci5jYXJkQ250O1xuICAgIH1cblxuICAgIHByaXZhdGUgcm9ib3RIaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3RQb2tlckNudCA8PSAwKSByZXR1cm4gdGhpcy53aG9XaW4oKTtcbiAgICAgICAgaWYgKHRoaXMudHVyblBsYXllciB8fCB0aGlzLmdhbWVPdmVyKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHRoaXMucm9ib3Quc2NvcmUgPj0gMTcgXG4gICAgICAgICAgICB8fCB0aGlzLnJvYm90LnNjb3JlICsgdGhpcy5wb2tlcnNbUk9CT1RfQ0FSRF9JTkRFWF0ucG9pbnQgPj0gMjFcbiAgICAgICAgICAgIHx8ICh0aGlzLnJvYm90LnNjb3JlID49IDEwICYmIE1hdGgucmFuZG9tKCkgPCBST0JPVF9TS0lQX1BPU1NJQklMSVRZKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9ib3RTdGF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcG9rZXJOb2RlID0gdGhpcy5wb2tlckNvbnRhaW5lci5jaGlsZHJlblt0aGlzLnJlc3RQb2tlckNudCAtIDFdO1xuICAgICAgICBsZXQgd29ybGRQb3NpdGlvbiA9IHBva2VyTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjModGhpcy5yb2JvdENhcmRQb3NYKCksIDE1MCwgMCkpO1xuICAgICAgICBsZXQgYXJlYVBvc2l0aW9uID0gdGhpcy5yb2JvdEFyZWEuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3NpdGlvbik7XG4gICAgICAgIHBva2VyTm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgIHRoaXMucm9ib3RBcmVhLmFkZENoaWxkKHBva2VyTm9kZSk7XG5cbiAgICAgICAgcG9rZXJOb2RlLnggPSAtNDAwO1xuICAgICAgICBwb2tlck5vZGUueSA9IDcwO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYXllckZpcnN0KSB7XG4gICAgICAgICAgICBwb2tlck5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjApLFxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbyhMT1NFUl9QSUNLX0NBUkRfRFVSQVRJT04sIGFyZWFQb3NpdGlvbi54LCBhcmVhUG9zaXRpb24ueSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhMT1NFUl9PUEVOX0NBUkRfRFVSQVRJT04sIDAsIDEpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBva2VyVUkgPSBwb2tlck5vZGUuZ2V0Q29tcG9uZW50KFBva2VyVUkpO1xuICAgICAgICAgICAgICAgICAgICBwb2tlclVJLnNldFN0YXR1cyhQb2tlclN0YXR1cy5PUEVOKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKExPU0VSX09QRU5fQ0FSRF9EVVJBVElPTiwgMSwgMSlcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9rZXJOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4wKSxcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oV0lOTkVSX1BJQ0tfQ0FSRF9EVVJBVElPTiwgYXJlYVBvc2l0aW9uLngsIGFyZWFQb3NpdGlvbi55KSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKFdJTk5FUl9PUEVOX0NBUkRfRFVSQVRJT04sIDAsIDEpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBva2VyVUkgPSBwb2tlck5vZGUuZ2V0Q29tcG9uZW50KFBva2VyVUkpO1xuICAgICAgICAgICAgICAgICAgICBwb2tlclVJLnNldFN0YXR1cyhQb2tlclN0YXR1cy5PUEVOKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKFdJTk5FUl9PUEVOX0NBUkRfRFVSQVRJT04sIDEsIDEpXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm9ib3Quc2NvcmUgKz0gdGhpcy5wb2tlcnNbdGhpcy5yZXN0UG9rZXJDbnQgLSAxXS5wb2ludDtcbiAgICAgICAgKyt0aGlzLnJvYm90LmNhcmRDbnQ7XG4gICAgICAgIC0tdGhpcy5yZXN0UG9rZXJDbnQ7XG4gICAgICAgIHRoaXMudHVyblBsYXllciA9IHRydWU7XG4gICAgICAgIHRoaXMucm9ib3Quc2tpcCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMucm9ib3RQb2ludC5zdHJpbmcgPSBgUG9pbnQ6ICR7dGhpcy5yb2JvdC5zY29yZX1gO1xuICAgICAgICB0aGlzLnJvYm90Q2hvaWNlLnN0cmluZyA9ICcnXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByb2JvdFN0YXkoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3RQb2tlckNudCA8PSAwKSByZXR1cm4gdGhpcy53aG9XaW4oKTtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yb2JvdENob2ljZS5zdHJpbmcgPSAnU3RheSdcbiAgICAgICAgdGhpcy5yb2JvdC5za2lwID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIuc2tpcCkge1xuICAgICAgICAgICAgdGhpcy53aG9XaW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcm9ib3RDYXJkUG9zWCgpIHtcbiAgICAgICAgcmV0dXJuIDMzMCArIDcwICogdGhpcy5yb2JvdC5jYXJkQ250O1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TdGF5QnRuQ2xpY2soKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zdGF5TXVzaWMsIGZhbHNlKTtcbiAgICAgICAgaWYgKHRoaXMucmVzdFBva2VyQ250IDw9IDApIHJldHVybiB0aGlzLndob1dpbigpO1xuICAgICAgICBpZiAoIXRoaXMudHVyblBsYXllciB8fCB0aGlzLmdhbWVPdmVyKSByZXR1cm47XG4gICAgICAgIHRoaXMudHVyblBsYXllciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYXllci5za2lwID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5yb2JvdC5za2lwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aG9XaW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm9ib3RIaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUmVzdGFydEJ0bkNsaWNrKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucmVzdGFydE11c2ljLCBmYWxzZSk7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHdob1dpbigpIHtcbiAgICAgICAgbGV0IHJvYm90SG9sZENhcmROb2RlID0gdGhpcy5yb2JvdEFyZWEuY2hpbGRyZW5bMF07XG4gICAgICAgIGxldCByb2JvdEhvbGRDYXJkID0gcm9ib3RIb2xkQ2FyZE5vZGUuZ2V0Q29tcG9uZW50KFBva2VyVUkpO1xuICAgICAgICByb2JvdEhvbGRDYXJkLnNldFN0YXR1cyhQb2tlclN0YXR1cy5PUEVOKTtcblxuICAgICAgICBjb25zb2xlLmxvZygncGxheWVyIHNjb3JlOiAnICsgdGhpcy5wbGF5ZXIuc2NvcmUgK1xuICAgICAgICAgICAgICAgICAgICAnLCBwbGF5ZXIgaG9sZDogJyArIHRoaXMucG9rZXJzW1BMQVlFUl9DQVJEX0lOREVYXS5wb2ludCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyb2JvdCBzY29yZTogJyArIHRoaXMucGxheWVyLnNjb3JlICtcbiAgICAgICAgICAgICAgICAgICAgJywgcm9ib3QgaG9sZDogJyArIHRoaXMucG9rZXJzW1JPQk9UX0NBUkRfSU5ERVhdLnBvaW50KTtcblxuICAgICAgICB0aGlzLnJvYm90LnNjb3JlICs9IHRoaXMucG9rZXJzW1JPQk9UX0NBUkRfSU5ERVhdLnBvaW50O1xuXG4gICAgICAgIHRoaXMucGxheWVyUG9pbnQuc3RyaW5nID0gYFBvaW50OiAke3RoaXMucGxheWVyLnNjb3JlfWA7XG4gICAgICAgIHRoaXMucm9ib3RQb2ludC5zdHJpbmcgPSBgUG9pbnQ6ICR7dGhpcy5yb2JvdC5zY29yZX1gO1xuXG4gICAgICAgIGxldCBwbGF5ZXJXaW46IFdpblN0YXR1cyA9IFdpblN0YXR1cy5EUkFXO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYXllci5zY29yZSA9PSB0aGlzLnJvYm90LnNjb3JlKSB7XG4gICAgICAgICAgICBwbGF5ZXJXaW4gPSBXaW5TdGF0dXMuRFJBVztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllci5zY29yZSA+IDIxICYmIHRoaXMucm9ib3Quc2NvcmUgPiAyMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLnNjb3JlIDwgdGhpcy5yb2JvdC5zY29yZSkge1xuICAgICAgICAgICAgICAgIHBsYXllcldpbiA9IFdpblN0YXR1cy5XSU47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBsYXllcldpbiA9IFdpblN0YXR1cy5MT1NFO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyLnNjb3JlID4gMjEpIHtcbiAgICAgICAgICAgIHBsYXllcldpbiA9IFdpblN0YXR1cy5MT1NFO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucm9ib3Quc2NvcmUgPiAyMSkge1xuICAgICAgICAgICAgcGxheWVyV2luID0gV2luU3RhdHVzLldJTjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5zY29yZSA+IHRoaXMucm9ib3Quc2NvcmUpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJXaW4gPSBXaW5TdGF0dXMuV0lOO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJXaW4gPSBXaW5TdGF0dXMuTE9TRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGF5ZXJXaW4gPT09IFdpblN0YXR1cy5XSU4pIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LnN0cmluZyA9ICdZb3UgV2luJztcbiAgICAgICAgICAgIHRoaXMucGxheWVyRmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy53aW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnN1Y2Nlc3NNdXNpYywgZmFsc2UpO1xuICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJXaW4gPT09IFdpblN0YXR1cy5EUkFXKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQuc3RyaW5nID0gJ0RyYXcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdC5zdHJpbmcgPSAnWW91IExvc2UnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmZhaWxlZE11c2ljLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xvc2VCdG5DbGljaygpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNsaWNrTXVzaWMsIGZhbHNlKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtZW51Jyk7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG59XG5cbmNsYXNzIFBsYXllciB7XG4gICAgcHVibGljIHNjb3JlOiBudW1iZXI7XG4gICAgcHVibGljIGNhcmRDbnQ6IG51bWJlcjtcbiAgICBwdWJsaWMgc2tpcDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5jYXJkQ250ID0gMDtcbiAgICAgICAgdGhpcy5za2lwID0gZmFsc2U7XG4gICAgfVxufTtcblxuZW51bSBXaW5TdGF0dXMge1xuICAgIFdJTiA9IDAsXG4gICAgRFJBVyA9IDEsXG4gICAgTE9TRSA9IDIsXG59O1xuIl19