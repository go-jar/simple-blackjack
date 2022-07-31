
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/achievement');
require('./assets/script/game');
require('./assets/script/instruction');
require('./assets/script/menu');
require('./assets/script/poker');
require('./assets/script/pokerUI');
require('./assets/script/start');

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
//------QC-SOURCE-SPLIT------

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
        _this.player = null;
        _this.robot = null;
        _this.turnPlayer = true;
        _this.playerFirst = true;
        _this.gameOver = false;
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
    };
    Game.prototype.init = function () {
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
        var result = '';
        var playerWin = false;
        if (this.player.score == this.robot.score) {
            result = 'Draw';
            playerWin = false;
        }
        else if (this.player.score > 21 && this.robot.score > 21) {
            if (this.player.score < this.robot.score) {
                result = 'You Win';
                playerWin = true;
            }
            else {
                result = 'You Lose';
                playerWin = false;
            }
        }
        else if (this.player.score > 21) {
            result = 'You Lose';
            playerWin = false;
        }
        else if (this.robot.score > 21) {
            result = 'You Win';
            playerWin = true;
        }
        else {
            if (this.player.score > this.robot.score) {
                result = 'You Win';
                playerWin = true;
            }
            else {
                result = 'You Lose';
                playerWin = false;
            }
        }
        this.result.string = result;
        if (playerWin) {
            this.playerFirst = true;
            cc.audioEngine.playEffect(this.successMusic, false);
        }
        else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyxpQ0FBMEM7QUFDMUMscUNBQStCO0FBRS9CLElBQU0sV0FBVyxHQUFXLEVBQUUsQ0FBQztBQUMvQixJQUFNLGFBQWEsR0FBVyxHQUFHLENBQUM7QUFDbEMsSUFBTSxpQkFBaUIsR0FBVyxDQUFDLENBQUM7QUFDcEMsSUFBTSxnQkFBZ0IsR0FBVyxFQUFFLENBQUM7QUFDcEMsSUFBTSxzQkFBc0IsR0FBVyxHQUFHLENBQUM7QUFDM0MsSUFBTSx5QkFBeUIsR0FBVyxHQUFHLENBQUM7QUFDOUMsSUFBTSx3QkFBd0IsR0FBVyxHQUFHLENBQUM7QUFDN0MsSUFBTSx5QkFBeUIsR0FBVyxHQUFHLENBQUM7QUFDOUMsSUFBTSx3QkFBd0IsR0FBVyxHQUFHLENBQUM7QUFHN0M7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFrVUM7UUFqVXNCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQzdCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBQzNDLFlBQU0sR0FBWSxFQUFFLENBQUE7UUFDcEIsa0JBQVksR0FBVyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFDekIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUMxQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUMvQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDekIsaUJBQVcsR0FB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SUFBRCxXQUFDO0NBbFVELEFBa1VDLENBbFVpQyxFQUFFLENBQUMsU0FBUyxHQWtVN0M7a0JBbFVvQixJQUFJO0FBb1V6QjtJQUtJO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0wsYUFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBQUEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCB7UG9rZXIsIFBva2VyU3RhdHVzfSBmcm9tIFwiLi9wb2tlclwiXG5pbXBvcnQgUG9rZXJVSSBmcm9tIFwiLi9wb2tlclVJXCJcblxuY29uc3QgUE9LRVJfQ09VTlQ6IG51bWJlciA9IDExO1xuY29uc3QgU0hVRkZMRV9DT1VOVDogbnVtYmVyID0gMTAwO1xuY29uc3QgUExBWUVSX0NBUkRfSU5ERVg6IG51bWJlciA9IDk7XG5jb25zdCBST0JPVF9DQVJEX0lOREVYOiBudW1iZXIgPSAxMDtcbmNvbnN0IFJPQk9UX1NLSVBfUE9TU0lCSUxJVFk6IG51bWJlciA9IDAuNTtcbmNvbnN0IFdJTk5FUl9QSUNLX0NBUkRfRFVSQVRJT046IG51bWJlciA9IDAuNTtcbmNvbnN0IExPU0VSX1BJQ0tfQ0FSRF9EVVJBVElPTjogbnVtYmVyID0gMS4wO1xuY29uc3QgV0lOTkVSX09QRU5fQ0FSRF9EVVJBVElPTjogbnVtYmVyID0gMC4zO1xuY29uc3QgTE9TRVJfT1BFTl9DQVJEX0RVUkFUSU9OOiBudW1iZXIgPSAwLjU7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgcG9rZXJDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpIHBva2VyUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIHByaXZhdGUgcG9rZXJzOiBQb2tlcltdID0gW11cbiAgICBwcml2YXRlIHJlc3RQb2tlckNudDogbnVtYmVyID0gUE9LRVJfQ09VTlQgLSAyO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbikgaGl0QnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pIHN0YXlCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbikgcmVzdGFydEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgY2xvc2VCdG46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIHBsYXllckFyZWE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSByb2JvdEFyZWE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgcGxheWVyUG9pbnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHJvYm90UG9pbnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHJvYm90Q2hvaWNlOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHJlc3VsdDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcCkgYmdNdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKSBmbGlwTXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcCkgc3VjY2Vzc011c2ljOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApIGZhaWxlZE11c2ljOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBwbGF5ZXI6IFBsYXllciA9IG51bGw7XG4gICAgcHJpdmF0ZSByb2JvdDogUGxheWVyID0gbnVsbDtcbiAgICBwcml2YXRlIHR1cm5QbGF5ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgcGxheWVyRmlyc3Q6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgZ2FtZU92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmJnTXVzaWMsIHRydWUpO1xuXG4gICAgICAgIGZvciAobGV0IHBvaW50ID0gMTsgcG9pbnQgPD0gUE9LRVJfQ09VTlQ7IHBvaW50KyspIHtcbiAgICAgICAgICAgIGxldCBwb2tlciA9IG5ldyBQb2tlcihwb2ludCwgUG9rZXJTdGF0dXMuQ0xPU0UpO1xuICAgICAgICAgICAgdGhpcy5wb2tlcnMucHVzaChwb2tlcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgICB0aGlzLmhpdEJ0bi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25IaXRCdG5DbGljaywgdGhpcyk7XG4gICAgICAgIHRoaXMuc3RheUJ0bi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25TdGF5QnRuQ2xpY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLnJlc3RhcnRCdG4ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uUmVzdGFydEJ0bkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jbG9zZUJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vbkNsb3NlQnRuQ2xpY2ssIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNodWZmbGUoKTtcbiAgICAgICAgdGhpcy5yZXN0UG9rZXJDbnQgPSBQT0tFUl9DT1VOVCAtIDI7XG5cbiAgICAgICAgdGhpcy5wb2tlckNvbnRhaW5lci5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFBPS0VSX0NPVU5UIC0gMjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcG9rZXJVSSA9IHRoaXMuY3JlYXRlUG9rZXJVSSh0aGlzLnBva2Vyc1tpXSk7XG4gICAgICAgICAgICBwb2tlclVJLm5vZGUueCA9IC0wLjMgKiBpO1xuICAgICAgICAgICAgcG9rZXJVSS5ub2RlLnkgPSAwLjMgKiBpO1xuICAgICAgICAgICAgdGhpcy5wb2tlckNvbnRhaW5lci5hZGRDaGlsZChwb2tlclVJLm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJBcmVhLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMucm9ib3RBcmVhLnJlbW92ZUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJQb2ludC5zdHJpbmcgPSAnUG9pbnQ6IDAnO1xuICAgICAgICB0aGlzLnJvYm90UG9pbnQuc3RyaW5nID0gJ1BvaW50OiAwJztcbiAgICAgICAgdGhpcy5yZXN1bHQuc3RyaW5nID0gJyc7XG4gICAgICAgIHRoaXMucm9ib3RDaG9pY2Uuc3RyaW5nID0gJyc7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgICAgIHRoaXMucm9ib3QgPSBuZXcgUGxheWVyKCk7XG5cbiAgICAgICAgdGhpcy5wbGFjZVBsYXllckhvbGRDYXJkKCk7XG4gICAgICAgIHRoaXMucGxhY2VSb2JvdEhvbGRDYXJkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldCgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMudHVyblBsYXllciA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGFjZVBsYXllckhvbGRDYXJkKCkge1xuICAgICAgICBsZXQgcG9rZXJVSSA9IHRoaXMuY3JlYXRlUG9rZXJVSSh0aGlzLnBva2Vyc1tQTEFZRVJfQ0FSRF9JTkRFWF0pO1xuICAgICAgICBwb2tlclVJLm5vZGUueCA9IC00MDA7XG4gICAgICAgIHBva2VyVUkubm9kZS55ID0gNzA7XG4gICAgICAgIHRoaXMucGxheWVyQXJlYS5hZGRDaGlsZChwb2tlclVJLm5vZGUpO1xuICAgICAgICBwb2tlclVJLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMCksXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMC41LCAtMTQzLCAzKSxcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGFjZVJvYm90SG9sZENhcmQoKSB7XG4gICAgICAgIGxldCBwb2tlclVJID0gdGhpcy5jcmVhdGVQb2tlclVJKHRoaXMucG9rZXJzW1JPQk9UX0NBUkRfSU5ERVhdKTtcbiAgICAgICAgcG9rZXJVSS5ub2RlLnggPSAtNDAwO1xuICAgICAgICBwb2tlclVJLm5vZGUueSA9IDcwO1xuICAgICAgICB0aGlzLnJvYm90QXJlYS5hZGRDaGlsZChwb2tlclVJLm5vZGUpO1xuICAgICAgICBwb2tlclVJLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMCksXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMC41LCAtMTQzLCAyKSxcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaHVmZmxlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFNIVUZGTEVfQ09VTlQ7ICsraSkge1xuICAgICAgICAgICAgbGV0IHNJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnBva2Vycy5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IGVJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnBva2Vycy5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IHRtcFZhbCA9IHRoaXMucG9rZXJzW3NJZHhdXG4gICAgICAgICAgICB0aGlzLnBva2Vyc1tzSWR4XSA9IHRoaXMucG9rZXJzW2VJZHhdXG4gICAgICAgICAgICB0aGlzLnBva2Vyc1tlSWR4XSA9IHRtcFZhbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVQb2tlclVJKHBva2VyOiBQb2tlcik6IFBva2VyVUkge1xuICAgICAgICBsZXQgcG9rZXJVaU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBva2VyUHJlZmFiKTtcbiAgICAgICAgbGV0IHBva2VyVUk6IFBva2VyVUkgPSBwb2tlclVpTm9kZS5nZXRDb21wb25lbnQoUG9rZXJVSSk7XG4gICAgICAgIHBva2VyVUkuaW5pdChwb2tlcik7XG4gICAgICAgIHJldHVybiBwb2tlclVJO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25IaXRCdG5DbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdFBva2VyQ250IDw9IDApIHJldHVybiB0aGlzLndob1dpbigpO1xuICAgICAgICBpZiAoIXRoaXMudHVyblBsYXllciB8fCB0aGlzLmdhbWVPdmVyKSByZXR1cm47XG5cbiAgICAgICAgbGV0IHBva2VyTm9kZSA9IHRoaXMucG9rZXJDb250YWluZXIuY2hpbGRyZW5bdGhpcy5yZXN0UG9rZXJDbnQgLSAxXTtcbiAgICAgICAgbGV0IHdvcmxkUG9zaXRpb24gPSBwb2tlck5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKHRoaXMucGxheWVyQ2FyZFBvc1goKSwgLTE1MCwgMCkpO1xuICAgICAgICBsZXQgYXJlYVBvc2l0aW9uID0gdGhpcy5wbGF5ZXJBcmVhLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zaXRpb24pO1xuICAgICAgICBwb2tlck5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICB0aGlzLnBsYXllckFyZWEuYWRkQ2hpbGQocG9rZXJOb2RlKTtcblxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZmxpcE11c2ljLCBmYWxzZSk7XG5cbiAgICAgICAgcG9rZXJOb2RlLnggPSAtNDAwO1xuICAgICAgICBwb2tlck5vZGUueSA9IDcwO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYXllckZpcnN0KSB7XG4gICAgICAgICAgICBwb2tlck5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjApLFxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbyhXSU5ORVJfUElDS19DQVJEX0RVUkFUSU9OLCBhcmVhUG9zaXRpb24ueCwgYXJlYVBvc2l0aW9uLnkpLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oV0lOTkVSX09QRU5fQ0FSRF9EVVJBVElPTiwgMCwgMSksXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9rZXJVSSA9IHBva2VyTm9kZS5nZXRDb21wb25lbnQoUG9rZXJVSSk7XG4gICAgICAgICAgICAgICAgICAgIHBva2VyVUkuc2V0U3RhdHVzKFBva2VyU3RhdHVzLk9QRU4pO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oV0lOTkVSX09QRU5fQ0FSRF9EVVJBVElPTiwgMSwgMSlcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9rZXJOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4wKSxcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oTE9TRVJfUElDS19DQVJEX0RVUkFUSU9OLCBhcmVhUG9zaXRpb24ueCwgYXJlYVBvc2l0aW9uLnkpLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oTE9TRVJfT1BFTl9DQVJEX0RVUkFUSU9OLCAwLCAxKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb2tlclVJID0gcG9rZXJOb2RlLmdldENvbXBvbmVudChQb2tlclVJKTtcbiAgICAgICAgICAgICAgICAgICAgcG9rZXJVSS5zZXRTdGF0dXMoUG9rZXJTdGF0dXMuT1BFTik7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhMT1NFUl9PUEVOX0NBUkRfRFVSQVRJT04sIDEsIDEpXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGxheWVyLnNjb3JlICs9IHRoaXMucG9rZXJzW3RoaXMucmVzdFBva2VyQ250IC0gMV0ucG9pbnQ7XG4gICAgICAgICsrdGhpcy5wbGF5ZXIuY2FyZENudDtcbiAgICAgICAgLS10aGlzLnJlc3RQb2tlckNudDtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJQb2ludC5zdHJpbmcgPSBgUG9pbnQ6ICR7dGhpcy5wbGF5ZXIuc2NvcmV9YDtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2tpcCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMucm9ib3RIaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXllckNhcmRQb3NYKCkge1xuICAgICAgICByZXR1cm4gMzMwICsgNzAgKiB0aGlzLnBsYXllci5jYXJkQ250O1xuICAgIH1cblxuICAgIHByaXZhdGUgcm9ib3RIaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3RQb2tlckNudCA8PSAwKSByZXR1cm4gdGhpcy53aG9XaW4oKTtcbiAgICAgICAgaWYgKHRoaXMudHVyblBsYXllciB8fCB0aGlzLmdhbWVPdmVyKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHRoaXMucm9ib3Quc2NvcmUgPj0gMTcgfHwgXG4gICAgICAgICAgICAodGhpcy5yb2JvdC5zY29yZSA+PSAxMCAmJiBNYXRoLnJhbmRvbSgpIDwgUk9CT1RfU0tJUF9QT1NTSUJJTElUWSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvYm90U3RheSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBva2VyTm9kZSA9IHRoaXMucG9rZXJDb250YWluZXIuY2hpbGRyZW5bdGhpcy5yZXN0UG9rZXJDbnQgLSAxXTtcbiAgICAgICAgbGV0IHdvcmxkUG9zaXRpb24gPSBwb2tlck5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKHRoaXMucm9ib3RDYXJkUG9zWCgpLCAxNTAsIDApKTtcbiAgICAgICAgbGV0IGFyZWFQb3NpdGlvbiA9IHRoaXMucm9ib3RBcmVhLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zaXRpb24pO1xuICAgICAgICBwb2tlck5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICB0aGlzLnJvYm90QXJlYS5hZGRDaGlsZChwb2tlck5vZGUpO1xuXG4gICAgICAgIHBva2VyTm9kZS54ID0gLTQwMDtcbiAgICAgICAgcG9rZXJOb2RlLnkgPSA3MDtcblxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJGaXJzdCkge1xuICAgICAgICAgICAgcG9rZXJOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4wKSxcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oTE9TRVJfUElDS19DQVJEX0RVUkFUSU9OLCBhcmVhUG9zaXRpb24ueCwgYXJlYVBvc2l0aW9uLnkpLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oTE9TRVJfT1BFTl9DQVJEX0RVUkFUSU9OLCAwLCAxKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb2tlclVJID0gcG9rZXJOb2RlLmdldENvbXBvbmVudChQb2tlclVJKTtcbiAgICAgICAgICAgICAgICAgICAgcG9rZXJVSS5zZXRTdGF0dXMoUG9rZXJTdGF0dXMuT1BFTik7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhMT1NFUl9PUEVOX0NBUkRfRFVSQVRJT04sIDEsIDEpXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBva2VyTm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMCksXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKFdJTk5FUl9QSUNLX0NBUkRfRFVSQVRJT04sIGFyZWFQb3NpdGlvbi54LCBhcmVhUG9zaXRpb24ueSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhXSU5ORVJfT1BFTl9DQVJEX0RVUkFUSU9OLCAwLCAxKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb2tlclVJID0gcG9rZXJOb2RlLmdldENvbXBvbmVudChQb2tlclVJKTtcbiAgICAgICAgICAgICAgICAgICAgcG9rZXJVSS5zZXRTdGF0dXMoUG9rZXJTdGF0dXMuT1BFTik7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhXSU5ORVJfT1BFTl9DQVJEX0RVUkFUSU9OLCAxLCAxKVxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJvYm90LnNjb3JlICs9IHRoaXMucG9rZXJzW3RoaXMucmVzdFBva2VyQ250IC0gMV0ucG9pbnQ7XG4gICAgICAgICsrdGhpcy5yb2JvdC5jYXJkQ250O1xuICAgICAgICAtLXRoaXMucmVzdFBva2VyQ250O1xuICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLnJvYm90LnNraXAgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnJvYm90UG9pbnQuc3RyaW5nID0gYFBvaW50OiAke3RoaXMucm9ib3Quc2NvcmV9YDtcbiAgICAgICAgdGhpcy5yb2JvdENob2ljZS5zdHJpbmcgPSAnJ1xuICAgIH1cblxuICAgIHByaXZhdGUgcm9ib3RTdGF5KCkge1xuICAgICAgICBpZiAodGhpcy5yZXN0UG9rZXJDbnQgPD0gMCkgcmV0dXJuIHRoaXMud2hvV2luKCk7XG4gICAgICAgIHRoaXMudHVyblBsYXllciA9IHRydWU7XG4gICAgICAgIHRoaXMucm9ib3RDaG9pY2Uuc3RyaW5nID0gJ1N0YXknXG4gICAgICAgIHRoaXMucm9ib3Quc2tpcCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMucGxheWVyLnNraXApIHtcbiAgICAgICAgICAgIHRoaXMud2hvV2luKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJvYm90Q2FyZFBvc1goKSB7XG4gICAgICAgIHJldHVybiAzMzAgKyA3MCAqIHRoaXMucm9ib3QuY2FyZENudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU3RheUJ0bkNsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5yZXN0UG9rZXJDbnQgPD0gMCkgcmV0dXJuIHRoaXMud2hvV2luKCk7XG4gICAgICAgIGlmICghdGhpcy50dXJuUGxheWVyIHx8IHRoaXMuZ2FtZU92ZXIpIHJldHVybjtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGxheWVyLnNraXAgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLnJvYm90LnNraXApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndob1dpbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yb2JvdEhpdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25SZXN0YXJ0QnRuQ2xpY2soKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHdob1dpbigpIHtcbiAgICAgICAgbGV0IHBsYXllckhvbGRDYXJkTm9kZSA9IHRoaXMucGxheWVyQXJlYS5jaGlsZHJlblswXTtcbiAgICAgICAgbGV0IHBsYXllckhvbGRDYXJkID0gcGxheWVySG9sZENhcmROb2RlLmdldENvbXBvbmVudChQb2tlclVJKTtcbiAgICAgICAgcGxheWVySG9sZENhcmQuc2V0U3RhdHVzKFBva2VyU3RhdHVzLk9QRU4pO1xuXG4gICAgICAgIGxldCByb2JvdEhvbGRDYXJkTm9kZSA9IHRoaXMucm9ib3RBcmVhLmNoaWxkcmVuWzBdO1xuICAgICAgICBsZXQgcm9ib3RIb2xkQ2FyZCA9IHJvYm90SG9sZENhcmROb2RlLmdldENvbXBvbmVudChQb2tlclVJKTtcbiAgICAgICAgcm9ib3RIb2xkQ2FyZC5zZXRTdGF0dXMoUG9rZXJTdGF0dXMuT1BFTik7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ3BsYXllciBzY29yZTogJyArIHRoaXMucGxheWVyLnNjb3JlICtcbiAgICAgICAgICAgICAgICAgICAgJywgcGxheWVyIGhvbGQ6ICcgKyB0aGlzLnBva2Vyc1tQTEFZRVJfQ0FSRF9JTkRFWF0ucG9pbnQpO1xuICAgICAgICB0aGlzLnBsYXllci5zY29yZSArPSB0aGlzLnBva2Vyc1tQTEFZRVJfQ0FSRF9JTkRFWF0ucG9pbnQ7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyb2JvdCBzY29yZTogJyArIHRoaXMucGxheWVyLnNjb3JlICtcbiAgICAgICAgICAgICAgICAgICAgJywgcm9ib3QgaG9sZDogJyArIHRoaXMucG9rZXJzW1JPQk9UX0NBUkRfSU5ERVhdLnBvaW50KTtcbiAgICAgICAgdGhpcy5yb2JvdC5zY29yZSArPSB0aGlzLnBva2Vyc1tST0JPVF9DQVJEX0lOREVYXS5wb2ludDtcblxuICAgICAgICB0aGlzLnBsYXllclBvaW50LnN0cmluZyA9IGBQb2ludDogJHt0aGlzLnBsYXllci5zY29yZX1gO1xuICAgICAgICB0aGlzLnJvYm90UG9pbnQuc3RyaW5nID0gYFBvaW50OiAke3RoaXMucm9ib3Quc2NvcmV9YDtcblxuICAgICAgICBsZXQgcmVzdWx0OiBzdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IHBsYXllcldpbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYXllci5zY29yZSA9PSB0aGlzLnJvYm90LnNjb3JlKSB7XG4gICAgICAgICAgICByZXN1bHQgPSAnRHJhdyc7XG4gICAgICAgICAgICBwbGF5ZXJXaW4gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllci5zY29yZSA+IDIxICYmIHRoaXMucm9ib3Quc2NvcmUgPiAyMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLnNjb3JlIDwgdGhpcy5yb2JvdC5zY29yZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdZb3UgV2luJztcbiAgICAgICAgICAgICAgICBwbGF5ZXJXaW4gPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnWW91IExvc2UnO1xuICAgICAgICAgICAgICAgIHBsYXllcldpbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyLnNjb3JlID4gMjEpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9ICdZb3UgTG9zZSc7XG4gICAgICAgICAgICBwbGF5ZXJXaW4gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJvYm90LnNjb3JlID4gMjEpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9ICdZb3UgV2luJztcbiAgICAgICAgICAgIHBsYXllcldpbiA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuc2NvcmUgPiB0aGlzLnJvYm90LnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ1lvdSBXaW4nO1xuICAgICAgICAgICAgICAgIHBsYXllcldpbiA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdZb3UgTG9zZSc7XG4gICAgICAgICAgICAgICAgcGxheWVyV2luID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc3VsdC5zdHJpbmcgPSByZXN1bHQ7XG5cbiAgICAgICAgaWYgKHBsYXllcldpbikge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJGaXJzdCA9IHRydWU7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc3VjY2Vzc011c2ljLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZmFpbGVkTXVzaWMsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25DbG9zZUJ0bkNsaWNrKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21lbnUnKTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbn1cblxuY2xhc3MgUGxheWVyIHtcbiAgICBwdWJsaWMgc2NvcmU6IG51bWJlcjtcbiAgICBwdWJsaWMgY2FyZENudDogbnVtYmVyO1xuICAgIHB1YmxpYyBza2lwOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmNhcmRDbnQgPSAwO1xuICAgICAgICB0aGlzLnNraXAgPSBmYWxzZTtcbiAgICB9XG59O1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19cabHBXyFPmbAKpouPwN7g', 'menu');
// script/menu.ts

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
var StartScene = /** @class */ (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playButton = null;
        _this.achievementButton = null;
        _this.instructionButton = null;
        return _this;
    }
    StartScene.prototype.start = function () {
        this.playButton.node.on('click', this.onPlayBtnClick, this);
        this.achievementButton.node.on('click', this.onAchievementBtnClick, this);
        this.instructionButton.node.on('click', this.onInstructionBtnClick, this);
    };
    StartScene.prototype.onPlayBtnClick = function (button) {
        cc.director.loadScene('game');
    };
    StartScene.prototype.onAchievementBtnClick = function () {
        cc.director.loadScene('achievement');
    };
    StartScene.prototype.onInstructionBtnClick = function () {
        cc.director.loadScene('instruction');
    };
    __decorate([
        property(cc.Button)
    ], StartScene.prototype, "playButton", void 0);
    __decorate([
        property(cc.Button)
    ], StartScene.prototype, "achievementButton", void 0);
    __decorate([
        property(cc.Button)
    ], StartScene.prototype, "instructionButton", void 0);
    StartScene = __decorate([
        ccclass
    ], StartScene);
    return StartScene;
}(cc.Component));
exports.default = StartScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQXVCQztRQXJCd0IsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFDN0IsdUJBQWlCLEdBQWMsSUFBSSxDQUFDO1FBQ3BDLHVCQUFpQixHQUFjLElBQUksQ0FBQzs7SUFtQjdELENBQUM7SUFqQkcsMEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVPLG1DQUFjLEdBQXRCLFVBQXVCLE1BQU07UUFDekIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVPLDBDQUFxQixHQUE3QjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTywwQ0FBcUIsR0FBN0I7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBcEJvQjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFBOEI7SUFDN0I7UUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQXFDO0lBQ3BDO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUFxQztJQUp4QyxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBdUI5QjtJQUFELGlCQUFDO0NBdkJELEFBdUJDLENBdkJ1QyxFQUFFLENBQUMsU0FBUyxHQXVCbkQ7a0JBdkJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKSBwbGF5QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pIGFjaGlldmVtZW50QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pIGluc3RydWN0aW9uQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLnBsYXlCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uUGxheUJ0bkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hY2hpZXZlbWVudEJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25BY2hpZXZlbWVudEJ0bkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5pbnN0cnVjdGlvbkJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25JbnN0cnVjdGlvbkJ0bkNsaWNrLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUGxheUJ0bkNsaWNrKGJ1dHRvbikge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2dhbWUnKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBvbkFjaGlldmVtZW50QnRuQ2xpY2soKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnYWNoaWV2ZW1lbnQnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uSW5zdHJ1Y3Rpb25CdG5DbGljaygpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdpbnN0cnVjdGlvbicpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/poker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '893d9+ice5GHKoNxx4s5vAl', 'poker');
// script/poker.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokerStatus = exports.Poker = void 0;
var Poker = /** @class */ (function () {
    function Poker(point, status) {
        this.point = -1;
        this.status = PokerStatus.CLOSE;
        this.point = point;
        this.status = status;
    }
    return Poker;
}());
exports.Poker = Poker;
;
var PokerStatus;
(function (PokerStatus) {
    PokerStatus[PokerStatus["CLOSE"] = 0] = "CLOSE";
    PokerStatus[PokerStatus["OPEN"] = 1] = "OPEN";
})(PokerStatus = exports.PokerStatus || (exports.PokerStatus = {}));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcG9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFJSSxlQUFZLEtBQWEsRUFBRSxNQUFtQjtRQUh2QyxVQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbkIsV0FBTSxHQUFnQixXQUFXLENBQUMsS0FBSyxDQUFDO1FBRzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSxzQkFBSztBQVFqQixDQUFDO0FBRUYsSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ25CLCtDQUFTLENBQUE7SUFDVCw2Q0FBUSxDQUFBO0FBQ1osQ0FBQyxFQUhXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBR3RCO0FBQUEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQb2tlciB7XG4gICAgcHVibGljIHBvaW50OiBudW1iZXIgPSAtMTtcbiAgICBwdWJsaWMgc3RhdHVzOiBQb2tlclN0YXR1cyA9IFBva2VyU3RhdHVzLkNMT1NFO1xuXG4gICAgY29uc3RydWN0b3IocG9pbnQ6IG51bWJlciwgc3RhdHVzOiBQb2tlclN0YXR1cykge1xuICAgICAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIH1cbn07XG5cbmV4cG9ydCBlbnVtIFBva2VyU3RhdHVzIHtcbiAgICBDTE9TRSA9IDAsXG4gICAgT1BFTiA9IDEsXG59O1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/pokerUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'acbd2EBrQRL8ZKS16W7qYyO', 'pokerUI');
// script/pokerUI.ts

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
var PokerUI = /** @class */ (function (_super) {
    __extends(PokerUI, _super);
    function PokerUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.point = null;
        _this.card = null;
        _this.cardBack = null;
        _this.cardFront = null;
        return _this;
    }
    PokerUI.prototype.start = function () {
    };
    PokerUI.prototype.init = function (poker) {
        this.point.string = "" + poker.point;
        this.setStatus(poker.status);
    };
    PokerUI.prototype.setStatus = function (status) {
        if (status == poker_1.PokerStatus.CLOSE) {
            this.point.node.active = false;
            this.card.spriteFrame = this.cardBack;
        }
        else {
            this.point.node.active = true;
            this.card.spriteFrame = this.cardFront;
        }
    };
    __decorate([
        property(cc.Label)
    ], PokerUI.prototype, "point", void 0);
    __decorate([
        property(cc.Sprite)
    ], PokerUI.prototype, "card", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PokerUI.prototype, "cardBack", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PokerUI.prototype, "cardFront", void 0);
    PokerUI = __decorate([
        ccclass
    ], PokerUI);
    return PokerUI;
}(cc.Component));
exports.default = PokerUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcG9rZXJVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyxpQ0FBMEM7QUFHMUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUF5QkM7UUF2QnVCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFDdEIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUVsQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUNoQyxlQUFTLEdBQW1CLElBQUksQ0FBQzs7SUFtQi9ELENBQUM7SUFqQkcsdUJBQUssR0FBTDtJQUNBLENBQUM7SUFFTSxzQkFBSSxHQUFYLFVBQVksS0FBWTtRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFHLEtBQUssQ0FBQyxLQUFPLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVNLDJCQUFTLEdBQWhCLFVBQWlCLE1BQW1CO1FBQ2hDLElBQUksTUFBTSxJQUFJLG1CQUFXLENBQUMsS0FBSyxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN6QzthQUFNO1lBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQzFDO0lBQ0wsQ0FBQztJQXRCbUI7UUFBbkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQXdCO0lBQ3RCO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUF3QjtJQUVsQjtRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FBaUM7SUFDaEM7UUFBekIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7OENBQWtDO0lBTjFDLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F5QjNCO0lBQUQsY0FBQztDQXpCRCxBQXlCQyxDQXpCb0MsRUFBRSxDQUFDLFNBQVMsR0F5QmhEO2tCQXpCb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCB7UG9rZXIsIFBva2VyU3RhdHVzfSBmcm9tIFwiLi9wb2tlclwiXG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2tlclVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgcG9pbnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKSBjYXJkOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSBjYXJkQmFjazogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgY2FyZEZyb250OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQocG9rZXI6IFBva2VyKSB7XG4gICAgICAgIHRoaXMucG9pbnQuc3RyaW5nID0gYCR7cG9rZXIucG9pbnR9YDtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMocG9rZXIuc3RhdHVzKVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTdGF0dXMoc3RhdHVzOiBQb2tlclN0YXR1cykge1xuICAgICAgICBpZiAoc3RhdHVzID09IFBva2VyU3RhdHVzLkNMT1NFKSB7XG4gICAgICAgICAgICB0aGlzLnBvaW50Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNhcmQuc3ByaXRlRnJhbWUgPSB0aGlzLmNhcmRCYWNrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb2ludC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNhcmQuc3ByaXRlRnJhbWUgPSB0aGlzLmNhcmRGcm9udDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/start.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ce16k20HVGCbSdZLKEj44L', 'start');
// script/start.ts

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
var StartScene = /** @class */ (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playButton = null;
        return _this;
        // update (dt) {}
    }
    StartScene.prototype.start = function () {
        this.playButton.node.on('click', this.onPlayBtnClick, this);
    };
    StartScene.prototype.onPlayBtnClick = function () {
        cc.director.loadScene('game');
    };
    __decorate([
        property(cc.Button)
    ], StartScene.prototype, "playButton", void 0);
    StartScene = __decorate([
        ccclass
    ], StartScene);
    return StartScene;
}(cc.Component));
exports.default = StartScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc3RhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFhQztRQVZHLGdCQUFVLEdBQWMsSUFBSSxDQUFDOztRQVM3QixpQkFBaUI7SUFDckIsQ0FBQztJQVJHLDBCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELG1DQUFjLEdBQWQ7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBUkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDUztJQUhaLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FhOUI7SUFBRCxpQkFBQztDQWJELEFBYUMsQ0FidUMsRUFBRSxDQUFDLFNBQVMsR0FhbkQ7a0JBYm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydFNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgcGxheUJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5wbGF5QnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vblBsYXlCdG5DbGljaywgdGhpcyk7XG4gICAgfVxuXG4gICAgb25QbGF5QnRuQ2xpY2soKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnZ2FtZScpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/instruction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92270gzzWRNnalinz8/oNfC', 'instruction');
// script/instruction.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.closeBtn.on(cc.Node.EventType.TOUCH_START, this.onCloseBtnClick, this);
    };
    NewClass.prototype.onCloseBtnClick = function () {
        cc.director.loadScene('menu');
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "closeBtn", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvaW5zdHJ1Y3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFXQztRQVRzQixjQUFRLEdBQVksSUFBSSxDQUFDOztJQVNoRCxDQUFDO0lBUEcsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFTyxrQ0FBZSxHQUF2QjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFSa0I7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQTBCO0lBRjNCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FXNUI7SUFBRCxlQUFDO0NBWEQsQUFXQyxDQVhxQyxFQUFFLENBQUMsU0FBUyxHQVdqRDtrQkFYb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBjbG9zZUJ0bjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VCdG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25DbG9zZUJ0bkNsaWNrLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xvc2VCdG5DbGljaygpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtZW51Jyk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/achievement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '62e65BKYrBHE5kn0KQum1dR', 'achievement');
// script/achievement.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.progressLabel = null;
        _this.countLabel = null;
        _this.progressSprite = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.closeBtn.on(cc.Node.EventType.TOUCH_START, this.onCloseBtnClick, this);
    };
    NewClass.prototype.onCloseBtnClick = function () {
        cc.director.loadScene('menu');
    };
    NewClass.prototype.Init = function (count, total) {
        var percent = total == 0 ? 0 : Math.floor(count * 100 / total);
        this.progressLabel.string = percent + "%";
        this.countLabel.string = "" + count;
        this.progressSprite.fillRange = percent / 100.0;
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "closeBtn", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "progressLabel", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "countLabel", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "progressSprite", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYWNoaWV2ZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1QkM7UUFyQnNCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFeEIsbUJBQWEsR0FBYSxJQUFJLENBQUE7UUFDOUIsZ0JBQVUsR0FBYSxJQUFJLENBQUE7UUFDMUIsb0JBQWMsR0FBYyxJQUFJLENBQUE7O0lBaUJ6RCxDQUFDO0lBZkcsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFTyxrQ0FBZSxHQUF2QjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCx1QkFBSSxHQUFKLFVBQUssS0FBYSxFQUFFLEtBQWE7UUFDN0IsSUFBSSxPQUFPLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBQyxHQUFHLEdBQUMsS0FBSyxDQUFDLENBQUE7UUFFMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQU0sT0FBTyxNQUFHLENBQUE7UUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBRyxLQUFPLENBQUE7UUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxHQUFDLEtBQUssQ0FBQTtJQUNqRCxDQUFDO0lBcEJrQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FBMEI7SUFFeEI7UUFBbkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQStCO0lBQzlCO1FBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUE0QjtJQUMxQjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFBaUM7SUFOcEMsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVCNUI7SUFBRCxlQUFDO0NBdkJELEFBdUJDLENBdkJxQyxFQUFFLENBQUMsU0FBUyxHQXVCakQ7a0JBdkJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIGNsb3NlQnRuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgcHJvZ3Jlc3NMYWJlbDogY2MuTGFiZWwgPSBudWxsIFxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgY291bnRMYWJlbDogY2MuTGFiZWwgPSBudWxsIFxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpIHByb2dyZXNzU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsIFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmNsb3NlQnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uQ2xvc2VCdG5DbGljaywgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsb3NlQnRuQ2xpY2soKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWVudScpO1xuICAgIH1cblxuICAgIEluaXQoY291bnQ6IG51bWJlciwgdG90YWw6IG51bWJlcikge1xuICAgICAgICBsZXQgcGVyY2VudCA9IHRvdGFsID09IDAgPyAwIDogTWF0aC5mbG9vcihjb3VudCoxMDAvdG90YWwpXG5cbiAgICAgICAgdGhpcy5wcm9ncmVzc0xhYmVsLnN0cmluZyA9IGAke3BlcmNlbnR9JWBcbiAgICAgICAgdGhpcy5jb3VudExhYmVsLnN0cmluZyA9IGAke2NvdW50fWBcbiAgICAgICAgdGhpcy5wcm9ncmVzc1Nwcml0ZS5maWxsUmFuZ2UgPSBwZXJjZW50LzEwMC4wXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------
