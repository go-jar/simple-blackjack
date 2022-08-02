
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var poker_1 = require("./entity/poker");
var pokerUI_1 = require("./pokerUI");
var client_1 = require("./client");
var config_1 = require("./config");
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
        this.client = new client_1.default(config_1.RPC_URL, config_1.MY_CKB_PRIVATE_KEY, config_1.MY_CKB_ADDRESS);
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
        return __awaiter(this, void 0, void 0, function () {
            var pokerNode, worldPosition, areaPosition;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.restPokerCnt <= 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.whoWin()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (!this.turnPlayer || this.gameOver)
                            return [2 /*return*/];
                        pokerNode = this.pokerContainer.children[this.restPokerCnt - 1];
                        worldPosition = pokerNode.convertToWorldSpaceAR(cc.v3(this.playerCardPosX(), -150, 0));
                        areaPosition = this.playerArea.convertToNodeSpaceAR(worldPosition);
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
                        return [4 /*yield*/, this.robotHit()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.playerCardPosX = function () {
        return 330 + 70 * this.player.cardCnt;
    };
    Game.prototype.robotHit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pokerNode, worldPosition, areaPosition;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.restPokerCnt <= 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.whoWin()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (this.turnPlayer || this.gameOver)
                            return [2 /*return*/];
                        if (this.robot.score >= 17
                            || this.robot.score + this.pokers[ROBOT_CARD_INDEX].point >= 21
                            || (this.robot.score >= 10 && Math.random() < ROBOT_SKIP_POSSIBILITY)) {
                            return [2 /*return*/, this.robotStay()];
                        }
                        pokerNode = this.pokerContainer.children[this.restPokerCnt - 1];
                        worldPosition = pokerNode.convertToWorldSpaceAR(cc.v3(this.robotCardPosX(), 150, 0));
                        areaPosition = this.robotArea.convertToNodeSpaceAR(worldPosition);
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
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.robotStay = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.restPokerCnt <= 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.whoWin()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        this.turnPlayer = true;
                        this.robotChoice.string = 'Stay';
                        this.robot.skip = true;
                        if (!this.player.skip) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.whoWin()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.robotCardPosX = function () {
        return 330 + 70 * this.robot.cardCnt;
    };
    Game.prototype.onStayBtnClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cc.audioEngine.playEffect(this.stayMusic, false);
                        if (this.restPokerCnt <= 0)
                            return [2 /*return*/, this.whoWin()];
                        if (!this.turnPlayer || this.gameOver)
                            return [2 /*return*/];
                        this.turnPlayer = false;
                        this.player.skip = true;
                        if (!this.robot.skip) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.whoWin()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.robotHit()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.onRestartBtnClick = function () {
        cc.audioEngine.playEffect(this.restartMusic, false);
        this.reset();
    };
    Game.prototype.whoWin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var robotHoldCardNode, robotHoldCard, playerWin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        robotHoldCardNode = this.robotArea.children[0];
                        robotHoldCard = robotHoldCardNode.getComponent(pokerUI_1.default);
                        robotHoldCard.setStatus(poker_1.PokerStatus.OPEN);
                        console.log('player score: ' + this.player.score +
                            ', player hold: ' + this.pokers[PLAYER_CARD_INDEX].point);
                        console.log('robot score: ' + this.player.score +
                            ', robot hold: ' + this.pokers[ROBOT_CARD_INDEX].point);
                        this.robot.score += this.pokers[ROBOT_CARD_INDEX].point;
                        this.playerPoint.string = "Point: " + this.player.score;
                        this.robotPoint.string = "Point: " + this.robot.score;
                        playerWin = WinStatus.DRAW;
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
                        this.gameOver = true;
                        if (!(playerWin === WinStatus.WIN)) return [3 /*break*/, 2];
                        this.result.string = 'You Win';
                        this.playerFirst = true;
                        this.win.node.active = true;
                        cc.audioEngine.playEffect(this.successMusic, false);
                        return [4 /*yield*/, this.client.battle_win()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        this.playerFirst = false;
                        cc.audioEngine.playEffect(this.failedMusic, false);
                        if (!(playerWin === WinStatus.DRAW)) return [3 /*break*/, 3];
                        this.result.string = 'Draw';
                        return [3 /*break*/, 5];
                    case 3:
                        this.result.string = 'You Lose';
                        return [4 /*yield*/, this.client.battle_lose()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyx3Q0FBaUQ7QUFDakQscUNBQStCO0FBQy9CLG1DQUE2QjtBQUM3QixtQ0FBdUU7QUFFdkUsSUFBTSxXQUFXLEdBQVcsRUFBRSxDQUFDO0FBQy9CLElBQU0sYUFBYSxHQUFXLEdBQUcsQ0FBQztBQUNsQyxJQUFNLGlCQUFpQixHQUFXLENBQUMsQ0FBQztBQUNwQyxJQUFNLGdCQUFnQixHQUFXLEVBQUUsQ0FBQztBQUNwQyxJQUFNLHNCQUFzQixHQUFXLEdBQUcsQ0FBQztBQUMzQyxJQUFNLHlCQUF5QixHQUFXLEdBQUcsQ0FBQztBQUM5QyxJQUFNLHdCQUF3QixHQUFXLEdBQUcsQ0FBQztBQUM3QyxJQUFNLHlCQUF5QixHQUFXLEdBQUcsQ0FBQztBQUM5QyxJQUFNLHdCQUF3QixHQUFXLEdBQUcsQ0FBQztBQUc3QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTZVQztRQTVVc0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFDN0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFDM0MsWUFBTSxHQUFZLEVBQUUsQ0FBQTtRQUNwQixrQkFBWSxHQUFXLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFFMUIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUN6QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBQzFCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBQy9CLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIs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QixRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsyQ0FBZ0M7SUFDL0I7UUFBdkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQW1DO0lBQ2xDO1FBQXZCLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUFrQztJQUNqQztRQUF2QixRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0Q0FBaUM7SUFDaEM7UUFBdkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7MkNBQWdDO0lBQy9CO1FBQXZCLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUFtQztJQUVyQztRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxQ0FBdUI7SUEzQjFCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E2VXhCO0lBQUQsV0FBQztDQTdVRCxBQTZVQyxDQTdVaUMsRUFBRSxDQUFDLFNBQVMsR0E2VTdDO2tCQTdVb0IsSUFBSTtBQStVekI7SUFLSTtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQUFBLENBQUM7QUFFRixJQUFLLFNBSUo7QUFKRCxXQUFLLFNBQVM7SUFDVix1Q0FBTyxDQUFBO0lBQ1AseUNBQVEsQ0FBQTtJQUNSLHlDQUFRLENBQUE7QUFDWixDQUFDLEVBSkksU0FBUyxLQUFULFNBQVMsUUFJYjtBQUFBLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQge1Bva2VyLCBQb2tlclN0YXR1c30gZnJvbSBcIi4vZW50aXR5L3Bva2VyXCJcbmltcG9ydCBQb2tlclVJIGZyb20gXCIuL3Bva2VyVUlcIlxuaW1wb3J0IENsaWVudCBmcm9tICcuL2NsaWVudCdcbmltcG9ydCB7IFJQQ19VUkwsIE1ZX0NLQl9QUklWQVRFX0tFWSwgTVlfQ0tCX0FERFJFU1MgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuY29uc3QgUE9LRVJfQ09VTlQ6IG51bWJlciA9IDExO1xuY29uc3QgU0hVRkZMRV9DT1VOVDogbnVtYmVyID0gMTAwO1xuY29uc3QgUExBWUVSX0NBUkRfSU5ERVg6IG51bWJlciA9IDk7XG5jb25zdCBST0JPVF9DQVJEX0lOREVYOiBudW1iZXIgPSAxMDtcbmNvbnN0IFJPQk9UX1NLSVBfUE9TU0lCSUxJVFk6IG51bWJlciA9IDAuNTtcbmNvbnN0IFdJTk5FUl9QSUNLX0NBUkRfRFVSQVRJT046IG51bWJlciA9IDAuNTtcbmNvbnN0IExPU0VSX1BJQ0tfQ0FSRF9EVVJBVElPTjogbnVtYmVyID0gMS4wO1xuY29uc3QgV0lOTkVSX09QRU5fQ0FSRF9EVVJBVElPTjogbnVtYmVyID0gMC4zO1xuY29uc3QgTE9TRVJfT1BFTl9DQVJEX0RVUkFUSU9OOiBudW1iZXIgPSAwLjU7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgcG9rZXJDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpIHBva2VyUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIHByaXZhdGUgcG9rZXJzOiBQb2tlcltdID0gW11cbiAgICBwcml2YXRlIHJlc3RQb2tlckNudDogbnVtYmVyID0gUE9LRVJfQ09VTlQgLSAyO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbikgaGl0QnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pIHN0YXlCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbikgcmVzdGFydEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgY2xvc2VCdG46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIHBsYXllckFyZWE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSByb2JvdEFyZWE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgcGxheWVyUG9pbnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHJvYm90UG9pbnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHJvYm90Q2hvaWNlOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHJlc3VsdDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcCkgYmdNdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKSBmbGlwTXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcCkgc3VjY2Vzc011c2ljOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApIGZhaWxlZE11c2ljOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApIGNsaWNrTXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcCkgc3RheU11c2ljOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApIHJlc3RhcnRNdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpIHdpbjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIHByaXZhdGUgcGxheWVyOiBQbGF5ZXIgPSBudWxsO1xuICAgIHByaXZhdGUgcm9ib3Q6IFBsYXllciA9IG51bGw7XG4gICAgcHJpdmF0ZSB0dXJuUGxheWVyOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIHBsYXllckZpcnN0OiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIGdhbWVPdmVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGNsaWVudDogQ2xpZW50ID0gbnVsbDtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmJnTXVzaWMsIHRydWUpO1xuXG4gICAgICAgIGZvciAobGV0IHBvaW50ID0gMTsgcG9pbnQgPD0gUE9LRVJfQ09VTlQ7IHBvaW50KyspIHtcbiAgICAgICAgICAgIGxldCBwb2tlciA9IG5ldyBQb2tlcihwb2ludCwgUG9rZXJTdGF0dXMuQ0xPU0UpO1xuICAgICAgICAgICAgdGhpcy5wb2tlcnMucHVzaChwb2tlcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgICB0aGlzLmhpdEJ0bi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25IaXRCdG5DbGljaywgdGhpcyk7XG4gICAgICAgIHRoaXMuc3RheUJ0bi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25TdGF5QnRuQ2xpY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLnJlc3RhcnRCdG4ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uUmVzdGFydEJ0bkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jbG9zZUJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vbkNsb3NlQnRuQ2xpY2ssIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2xpZW50ID0gbmV3IENsaWVudChSUENfVVJMLCBNWV9DS0JfUFJJVkFURV9LRVksIE1ZX0NLQl9BRERSRVNTKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXQoKSB7XG4gICAgICAgIHRoaXMud2luLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaHVmZmxlKCk7XG4gICAgICAgIHRoaXMucmVzdFBva2VyQ250ID0gUE9LRVJfQ09VTlQgLSAyO1xuXG4gICAgICAgIHRoaXMucG9rZXJDb250YWluZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBQT0tFUl9DT1VOVCAtIDI7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBva2VyVUkgPSB0aGlzLmNyZWF0ZVBva2VyVUkodGhpcy5wb2tlcnNbaV0pO1xuICAgICAgICAgICAgcG9rZXJVSS5ub2RlLnggPSAtMC4zICogaTtcbiAgICAgICAgICAgIHBva2VyVUkubm9kZS55ID0gMC4zICogaTtcbiAgICAgICAgICAgIHRoaXMucG9rZXJDb250YWluZXIuYWRkQ2hpbGQocG9rZXJVSS5ub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGxheWVyQXJlYS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLnJvYm90QXJlYS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcigpO1xuICAgICAgICB0aGlzLnJvYm90ID0gbmV3IFBsYXllcigpO1xuXG4gICAgICAgIHRoaXMucGxheWVyLnNjb3JlICs9IHRoaXMucG9rZXJzW1BMQVlFUl9DQVJEX0lOREVYXS5wb2ludDtcbiAgICAgICAgdGhpcy5wbGF5ZXJQb2ludC5zdHJpbmcgPSBgUG9pbnQ6ICR7dGhpcy5wbGF5ZXIuc2NvcmV9YDtcbiAgICAgICAgdGhpcy5yb2JvdFBvaW50LnN0cmluZyA9ICdQb2ludDogMCc7XG4gICAgICAgIHRoaXMucmVzdWx0LnN0cmluZyA9ICcnO1xuICAgICAgICB0aGlzLnJvYm90Q2hvaWNlLnN0cmluZyA9ICcnO1xuXG4gICAgICAgIHRoaXMucGxhY2VQbGF5ZXJIb2xkQ2FyZCgpO1xuICAgICAgICB0aGlzLnBsYWNlUm9ib3RIb2xkQ2FyZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGxhY2VQbGF5ZXJIb2xkQ2FyZCgpIHtcbiAgICAgICAgbGV0IHBva2VyVUkgPSB0aGlzLmNyZWF0ZVBva2VyVUkodGhpcy5wb2tlcnNbUExBWUVSX0NBUkRfSU5ERVhdKTtcbiAgICAgICAgcG9rZXJVSS5ub2RlLnggPSAtNDAwO1xuICAgICAgICBwb2tlclVJLm5vZGUueSA9IDcwO1xuICAgICAgICBwb2tlclVJLnNldFN0YXR1cyhQb2tlclN0YXR1cy5PUEVOKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJBcmVhLmFkZENoaWxkKHBva2VyVUkubm9kZSk7XG4gICAgICAgIHBva2VyVUkubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4wKSxcbiAgICAgICAgICAgIGNjLm1vdmVUbygwLjUsIC0xNDMsIDMpLFxuICAgICAgICApKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYWNlUm9ib3RIb2xkQ2FyZCgpIHtcbiAgICAgICAgbGV0IHBva2VyVUkgPSB0aGlzLmNyZWF0ZVBva2VyVUkodGhpcy5wb2tlcnNbUk9CT1RfQ0FSRF9JTkRFWF0pO1xuICAgICAgICBwb2tlclVJLm5vZGUueCA9IC00MDA7XG4gICAgICAgIHBva2VyVUkubm9kZS55ID0gNzA7XG4gICAgICAgIHRoaXMucm9ib3RBcmVhLmFkZENoaWxkKHBva2VyVUkubm9kZSk7XG4gICAgICAgIHBva2VyVUkubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4wKSxcbiAgICAgICAgICAgIGNjLm1vdmVUbygwLjUsIC0xNDMsIDIpLFxuICAgICAgICApKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNodWZmbGUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU0hVRkZMRV9DT1VOVDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgc0lkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucG9rZXJzLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgZUlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucG9rZXJzLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgdG1wVmFsID0gdGhpcy5wb2tlcnNbc0lkeF1cbiAgICAgICAgICAgIHRoaXMucG9rZXJzW3NJZHhdID0gdGhpcy5wb2tlcnNbZUlkeF1cbiAgICAgICAgICAgIHRoaXMucG9rZXJzW2VJZHhdID0gdG1wVmFsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVBva2VyVUkocG9rZXI6IFBva2VyKTogUG9rZXJVSSB7XG4gICAgICAgIGxldCBwb2tlclVpTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucG9rZXJQcmVmYWIpO1xuICAgICAgICBsZXQgcG9rZXJVSTogUG9rZXJVSSA9IHBva2VyVWlOb2RlLmdldENvbXBvbmVudChQb2tlclVJKTtcbiAgICAgICAgcG9rZXJVSS5pbml0KHBva2VyKTtcbiAgICAgICAgcmV0dXJuIHBva2VyVUk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBvbkhpdEJ0bkNsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5yZXN0UG9rZXJDbnQgPD0gMCkgcmV0dXJuIGF3YWl0IHRoaXMud2hvV2luKCk7XG4gICAgICAgIGlmICghdGhpcy50dXJuUGxheWVyIHx8IHRoaXMuZ2FtZU92ZXIpIHJldHVybjtcblxuICAgICAgICBsZXQgcG9rZXJOb2RlID0gdGhpcy5wb2tlckNvbnRhaW5lci5jaGlsZHJlblt0aGlzLnJlc3RQb2tlckNudCAtIDFdO1xuICAgICAgICBsZXQgd29ybGRQb3NpdGlvbiA9IHBva2VyTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjModGhpcy5wbGF5ZXJDYXJkUG9zWCgpLCAtMTUwLCAwKSk7XG4gICAgICAgIGxldCBhcmVhUG9zaXRpb24gPSB0aGlzLnBsYXllckFyZWEuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3NpdGlvbik7XG4gICAgICAgIHBva2VyTm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgIHRoaXMucGxheWVyQXJlYS5hZGRDaGlsZChwb2tlck5vZGUpO1xuXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5mbGlwTXVzaWMsIGZhbHNlKTtcblxuICAgICAgICBwb2tlck5vZGUueCA9IC00MDA7XG4gICAgICAgIHBva2VyTm9kZS55ID0gNzA7XG5cbiAgICAgICAgaWYgKHRoaXMucGxheWVyRmlyc3QpIHtcbiAgICAgICAgICAgIHBva2VyTm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMCksXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKFdJTk5FUl9QSUNLX0NBUkRfRFVSQVRJT04sIGFyZWFQb3NpdGlvbi54LCBhcmVhUG9zaXRpb24ueSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhXSU5ORVJfT1BFTl9DQVJEX0RVUkFUSU9OLCAwLCAxKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb2tlclVJID0gcG9rZXJOb2RlLmdldENvbXBvbmVudChQb2tlclVJKTtcbiAgICAgICAgICAgICAgICAgICAgcG9rZXJVSS5zZXRTdGF0dXMoUG9rZXJTdGF0dXMuT1BFTik7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhXSU5ORVJfT1BFTl9DQVJEX0RVUkFUSU9OLCAxLCAxKVxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb2tlck5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjApLFxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbyhMT1NFUl9QSUNLX0NBUkRfRFVSQVRJT04sIGFyZWFQb3NpdGlvbi54LCBhcmVhUG9zaXRpb24ueSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhMT1NFUl9PUEVOX0NBUkRfRFVSQVRJT04sIDAsIDEpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBva2VyVUkgPSBwb2tlck5vZGUuZ2V0Q29tcG9uZW50KFBva2VyVUkpO1xuICAgICAgICAgICAgICAgICAgICBwb2tlclVJLnNldFN0YXR1cyhQb2tlclN0YXR1cy5PUEVOKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKExPU0VSX09QRU5fQ0FSRF9EVVJBVElPTiwgMSwgMSlcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbGF5ZXIuc2NvcmUgKz0gdGhpcy5wb2tlcnNbdGhpcy5yZXN0UG9rZXJDbnQgLSAxXS5wb2ludDtcbiAgICAgICAgKyt0aGlzLnBsYXllci5jYXJkQ250O1xuICAgICAgICAtLXRoaXMucmVzdFBva2VyQ250O1xuICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnBsYXllclBvaW50LnN0cmluZyA9IGBQb2ludDogJHt0aGlzLnBsYXllci5zY29yZX1gO1xuICAgICAgICB0aGlzLnBsYXllci5za2lwID0gZmFsc2U7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5yb2JvdEhpdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGxheWVyQ2FyZFBvc1goKSB7XG4gICAgICAgIHJldHVybiAzMzAgKyA3MCAqIHRoaXMucGxheWVyLmNhcmRDbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyByb2JvdEhpdCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdFBva2VyQ250IDw9IDApIHJldHVybiBhd2FpdCB0aGlzLndob1dpbigpO1xuICAgICAgICBpZiAodGhpcy50dXJuUGxheWVyIHx8IHRoaXMuZ2FtZU92ZXIpIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy5yb2JvdC5zY29yZSA+PSAxNyBcbiAgICAgICAgICAgIHx8IHRoaXMucm9ib3Quc2NvcmUgKyB0aGlzLnBva2Vyc1tST0JPVF9DQVJEX0lOREVYXS5wb2ludCA+PSAyMVxuICAgICAgICAgICAgfHwgKHRoaXMucm9ib3Quc2NvcmUgPj0gMTAgJiYgTWF0aC5yYW5kb20oKSA8IFJPQk9UX1NLSVBfUE9TU0lCSUxJVFkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb2JvdFN0YXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwb2tlck5vZGUgPSB0aGlzLnBva2VyQ29udGFpbmVyLmNoaWxkcmVuW3RoaXMucmVzdFBva2VyQ250IC0gMV07XG4gICAgICAgIGxldCB3b3JsZFBvc2l0aW9uID0gcG9rZXJOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52Myh0aGlzLnJvYm90Q2FyZFBvc1goKSwgMTUwLCAwKSk7XG4gICAgICAgIGxldCBhcmVhUG9zaXRpb24gPSB0aGlzLnJvYm90QXJlYS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvc2l0aW9uKTtcbiAgICAgICAgcG9rZXJOb2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgdGhpcy5yb2JvdEFyZWEuYWRkQ2hpbGQocG9rZXJOb2RlKTtcblxuICAgICAgICBwb2tlck5vZGUueCA9IC00MDA7XG4gICAgICAgIHBva2VyTm9kZS55ID0gNzA7XG5cbiAgICAgICAgaWYgKHRoaXMucGxheWVyRmlyc3QpIHtcbiAgICAgICAgICAgIHBva2VyTm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMCksXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKExPU0VSX1BJQ0tfQ0FSRF9EVVJBVElPTiwgYXJlYVBvc2l0aW9uLngsIGFyZWFQb3NpdGlvbi55KSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKExPU0VSX09QRU5fQ0FSRF9EVVJBVElPTiwgMCwgMSksXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9rZXJVSSA9IHBva2VyTm9kZS5nZXRDb21wb25lbnQoUG9rZXJVSSk7XG4gICAgICAgICAgICAgICAgICAgIHBva2VyVUkuc2V0U3RhdHVzKFBva2VyU3RhdHVzLk9QRU4pO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oTE9TRVJfT1BFTl9DQVJEX0RVUkFUSU9OLCAxLCAxKVxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb2tlck5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjApLFxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbyhXSU5ORVJfUElDS19DQVJEX0RVUkFUSU9OLCBhcmVhUG9zaXRpb24ueCwgYXJlYVBvc2l0aW9uLnkpLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oV0lOTkVSX09QRU5fQ0FSRF9EVVJBVElPTiwgMCwgMSksXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9rZXJVSSA9IHBva2VyTm9kZS5nZXRDb21wb25lbnQoUG9rZXJVSSk7XG4gICAgICAgICAgICAgICAgICAgIHBva2VyVUkuc2V0U3RhdHVzKFBva2VyU3RhdHVzLk9QRU4pO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oV0lOTkVSX09QRU5fQ0FSRF9EVVJBVElPTiwgMSwgMSlcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yb2JvdC5zY29yZSArPSB0aGlzLnBva2Vyc1t0aGlzLnJlc3RQb2tlckNudCAtIDFdLnBvaW50O1xuICAgICAgICArK3RoaXMucm9ib3QuY2FyZENudDtcbiAgICAgICAgLS10aGlzLnJlc3RQb2tlckNudDtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yb2JvdC5za2lwID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5yb2JvdFBvaW50LnN0cmluZyA9IGBQb2ludDogJHt0aGlzLnJvYm90LnNjb3JlfWA7XG4gICAgICAgIHRoaXMucm9ib3RDaG9pY2Uuc3RyaW5nID0gJydcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHJvYm90U3RheSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdFBva2VyQ250IDw9IDApIHJldHVybiBhd2FpdCB0aGlzLndob1dpbigpO1xuICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLnJvYm90Q2hvaWNlLnN0cmluZyA9ICdTdGF5J1xuICAgICAgICB0aGlzLnJvYm90LnNraXAgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYXllci5za2lwKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLndob1dpbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByb2JvdENhcmRQb3NYKCkge1xuICAgICAgICByZXR1cm4gMzMwICsgNzAgKiB0aGlzLnJvYm90LmNhcmRDbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBvblN0YXlCdG5DbGljaygpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnN0YXlNdXNpYywgZmFsc2UpO1xuICAgICAgICBpZiAodGhpcy5yZXN0UG9rZXJDbnQgPD0gMCkgcmV0dXJuIHRoaXMud2hvV2luKCk7XG4gICAgICAgIGlmICghdGhpcy50dXJuUGxheWVyIHx8IHRoaXMuZ2FtZU92ZXIpIHJldHVybjtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGxheWVyLnNraXAgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLnJvYm90LnNraXApIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLndob1dpbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdGhpcy5yb2JvdEhpdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25SZXN0YXJ0QnRuQ2xpY2soKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5yZXN0YXJ0TXVzaWMsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgd2hvV2luKCkge1xuICAgICAgICBsZXQgcm9ib3RIb2xkQ2FyZE5vZGUgPSB0aGlzLnJvYm90QXJlYS5jaGlsZHJlblswXTtcbiAgICAgICAgbGV0IHJvYm90SG9sZENhcmQgPSByb2JvdEhvbGRDYXJkTm9kZS5nZXRDb21wb25lbnQoUG9rZXJVSSk7XG4gICAgICAgIHJvYm90SG9sZENhcmQuc2V0U3RhdHVzKFBva2VyU3RhdHVzLk9QRU4pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgc2NvcmU6ICcgKyB0aGlzLnBsYXllci5zY29yZSArXG4gICAgICAgICAgICAgICAgICAgICcsIHBsYXllciBob2xkOiAnICsgdGhpcy5wb2tlcnNbUExBWUVSX0NBUkRfSU5ERVhdLnBvaW50KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3JvYm90IHNjb3JlOiAnICsgdGhpcy5wbGF5ZXIuc2NvcmUgK1xuICAgICAgICAgICAgICAgICAgICAnLCByb2JvdCBob2xkOiAnICsgdGhpcy5wb2tlcnNbUk9CT1RfQ0FSRF9JTkRFWF0ucG9pbnQpO1xuXG4gICAgICAgIHRoaXMucm9ib3Quc2NvcmUgKz0gdGhpcy5wb2tlcnNbUk9CT1RfQ0FSRF9JTkRFWF0ucG9pbnQ7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJQb2ludC5zdHJpbmcgPSBgUG9pbnQ6ICR7dGhpcy5wbGF5ZXIuc2NvcmV9YDtcbiAgICAgICAgdGhpcy5yb2JvdFBvaW50LnN0cmluZyA9IGBQb2ludDogJHt0aGlzLnJvYm90LnNjb3JlfWA7XG5cbiAgICAgICAgbGV0IHBsYXllcldpbjogV2luU3RhdHVzID0gV2luU3RhdHVzLkRSQVc7XG5cbiAgICAgICAgaWYgKHRoaXMucGxheWVyLnNjb3JlID09IHRoaXMucm9ib3Quc2NvcmUpIHtcbiAgICAgICAgICAgIHBsYXllcldpbiA9IFdpblN0YXR1cy5EUkFXO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyLnNjb3JlID4gMjEgJiYgdGhpcy5yb2JvdC5zY29yZSA+IDIxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuc2NvcmUgPCB0aGlzLnJvYm90LnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyV2luID0gV2luU3RhdHVzLldJTjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGxheWVyV2luID0gV2luU3RhdHVzLkxPU0U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXIuc2NvcmUgPiAyMSkge1xuICAgICAgICAgICAgcGxheWVyV2luID0gV2luU3RhdHVzLkxPU0U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5yb2JvdC5zY29yZSA+IDIxKSB7XG4gICAgICAgICAgICBwbGF5ZXJXaW4gPSBXaW5TdGF0dXMuV0lOO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLnNjb3JlID4gdGhpcy5yb2JvdC5zY29yZSkge1xuICAgICAgICAgICAgICAgIHBsYXllcldpbiA9IFdpblN0YXR1cy5XSU47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBsYXllcldpbiA9IFdpblN0YXR1cy5MT1NFO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG5cbiAgICAgICAgaWYgKHBsYXllcldpbiA9PT0gV2luU3RhdHVzLldJTikge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQuc3RyaW5nID0gJ1lvdSBXaW4nO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJGaXJzdCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLndpbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc3VjY2Vzc011c2ljLCBmYWxzZSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNsaWVudC5iYXR0bGVfd2luKCk7XG4gICAgICAgIH0gZWxzZSAge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmZhaWxlZE11c2ljLCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAocGxheWVyV2luID09PSBXaW5TdGF0dXMuRFJBVykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0LnN0cmluZyA9ICdEcmF3JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQuc3RyaW5nID0gJ1lvdSBMb3NlJztcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNsaWVudC5iYXR0bGVfbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsb3NlQnRuQ2xpY2soKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jbGlja011c2ljLCBmYWxzZSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWVudScpO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxufVxuXG5jbGFzcyBQbGF5ZXIge1xuICAgIHB1YmxpYyBzY29yZTogbnVtYmVyO1xuICAgIHB1YmxpYyBjYXJkQ250OiBudW1iZXI7XG4gICAgcHVibGljIHNraXA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuY2FyZENudCA9IDA7XG4gICAgICAgIHRoaXMuc2tpcCA9IGZhbHNlO1xuICAgIH1cbn07XG5cbmVudW0gV2luU3RhdHVzIHtcbiAgICBXSU4gPSAwLFxuICAgIERSQVcgPSAxLFxuICAgIExPU0UgPSAyLFxufTtcbiJdfQ==