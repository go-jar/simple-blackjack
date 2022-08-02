
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
        _this.txHash = null;
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
        this.txHash.string = "";
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
            var robotHoldCardNode, robotHoldCard, playerWin, txHash;
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
                        txHash = "";
                        if (!(playerWin === WinStatus.WIN)) return [3 /*break*/, 2];
                        this.result.string = 'You Win';
                        this.playerFirst = true;
                        this.win.node.active = true;
                        cc.audioEngine.playEffect(this.successMusic, false);
                        return [4 /*yield*/, this.client.battle_win()];
                    case 1:
                        txHash = _a.sent();
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
                        txHash = _a.sent();
                        _a.label = 5;
                    case 5:
                        this.txHash.string = "tx hash: " + txHash;
                        return [2 /*return*/];
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
        property(cc.Label)
    ], Game.prototype, "txHash", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyx3Q0FBaUQ7QUFDakQscUNBQStCO0FBQy9CLG1DQUE2QjtBQUM3QixtQ0FBdUU7QUFFdkUsSUFBTSxXQUFXLEdBQVcsRUFBRSxDQUFDO0FBQy9CLElBQU0sYUFBYSxHQUFXLEdBQUcsQ0FBQztBQUNsQyxJQUFNLGlCQUFpQixHQUFXLENBQUMsQ0FBQztBQUNwQyxJQUFNLGdCQUFnQixHQUFXLEVBQUUsQ0FBQztBQUNwQyxJQUFNLHNCQUFzQixHQUFXLEdBQUcsQ0FBQztBQUMzQyxJQUFNLHlCQUF5QixHQUFXLEdBQUcsQ0FBQztBQUM5QyxJQUFNLHdCQUF3QixHQUFXLEdBQUcsQ0FBQztBQUM3QyxJQUFNLHlCQUF5QixHQUFXLEdBQUcsQ0FBQztBQUM5QyxJQUFNLHdCQUF3QixHQUFXLEdBQUcsQ0FBQztBQUc3QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQWdWQztRQS9Vc0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFDN0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFDM0MsWUFBTSxHQUFZLEVBQUUsQ0FBQTtRQUNwQixrQkFBWSxHQUFXLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFFMUIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUN6QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBQzFCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBQy9CLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIs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Q0FBQTtBQUNaLENBQUMsRUFKSSxTQUFTLEtBQVQsU0FBUyxRQUliO0FBQUEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCB7UG9rZXIsIFBva2VyU3RhdHVzfSBmcm9tIFwiLi9lbnRpdHkvcG9rZXJcIlxuaW1wb3J0IFBva2VyVUkgZnJvbSBcIi4vcG9rZXJVSVwiXG5pbXBvcnQgQ2xpZW50IGZyb20gJy4vY2xpZW50J1xuaW1wb3J0IHsgUlBDX1VSTCwgTVlfQ0tCX1BSSVZBVEVfS0VZLCBNWV9DS0JfQUREUkVTUyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuXG5jb25zdCBQT0tFUl9DT1VOVDogbnVtYmVyID0gMTE7XG5jb25zdCBTSFVGRkxFX0NPVU5UOiBudW1iZXIgPSAxMDA7XG5jb25zdCBQTEFZRVJfQ0FSRF9JTkRFWDogbnVtYmVyID0gOTtcbmNvbnN0IFJPQk9UX0NBUkRfSU5ERVg6IG51bWJlciA9IDEwO1xuY29uc3QgUk9CT1RfU0tJUF9QT1NTSUJJTElUWTogbnVtYmVyID0gMC41O1xuY29uc3QgV0lOTkVSX1BJQ0tfQ0FSRF9EVVJBVElPTjogbnVtYmVyID0gMC41O1xuY29uc3QgTE9TRVJfUElDS19DQVJEX0RVUkFUSU9OOiBudW1iZXIgPSAxLjA7XG5jb25zdCBXSU5ORVJfT1BFTl9DQVJEX0RVUkFUSU9OOiBudW1iZXIgPSAwLjM7XG5jb25zdCBMT1NFUl9PUEVOX0NBUkRfRFVSQVRJT046IG51bWJlciA9IDAuNTtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBwb2tlckNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgcG9rZXJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgcHJpdmF0ZSBwb2tlcnM6IFBva2VyW10gPSBbXVxuICAgIHByaXZhdGUgcmVzdFBva2VyQ250OiBudW1iZXIgPSBQT0tFUl9DT1VOVCAtIDI7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKSBoaXRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbikgc3RheUJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKSByZXN0YXJ0QnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBjbG9zZUJ0bjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgcGxheWVyQXJlYTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIHJvYm90QXJlYTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKSBwbGF5ZXJQb2ludDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgcm9ib3RQb2ludDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgcm9ib3RDaG9pY2U6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgcmVzdWx0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKSB0eEhhc2g6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApIGJnTXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcCkgZmxpcE11c2ljOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApIHN1Y2Nlc3NNdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKSBmYWlsZWRNdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKSBjbGlja011c2ljOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApIHN0YXlNdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKSByZXN0YXJ0TXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKSB3aW46IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHBsYXllcjogUGxheWVyID0gbnVsbDtcbiAgICBwcml2YXRlIHJvYm90OiBQbGF5ZXIgPSBudWxsO1xuICAgIHByaXZhdGUgdHVyblBsYXllcjogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBwbGF5ZXJGaXJzdDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBnYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBjbGllbnQ6IENsaWVudCA9IG51bGw7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5iZ011c2ljLCB0cnVlKTtcblxuICAgICAgICBmb3IgKGxldCBwb2ludCA9IDE7IHBvaW50IDw9IFBPS0VSX0NPVU5UOyBwb2ludCsrKSB7XG4gICAgICAgICAgICBsZXQgcG9rZXIgPSBuZXcgUG9rZXIocG9pbnQsIFBva2VyU3RhdHVzLkNMT1NFKTtcbiAgICAgICAgICAgIHRoaXMucG9rZXJzLnB1c2gocG9rZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgdGhpcy5oaXRCdG4ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uSGl0QnRuQ2xpY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXlCdG4ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uU3RheUJ0bkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0QnRuLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vblJlc3RhcnRCdG5DbGljaywgdGhpcyk7XG4gICAgICAgIHRoaXMuY2xvc2VCdG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25DbG9zZUJ0bkNsaWNrLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmNsaWVudCA9IG5ldyBDbGllbnQoUlBDX1VSTCwgTVlfQ0tCX1BSSVZBVEVfS0VZLCBNWV9DS0JfQUREUkVTUyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCkge1xuICAgICAgICB0aGlzLnR4SGFzaC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICB0aGlzLndpbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2h1ZmZsZSgpO1xuICAgICAgICB0aGlzLnJlc3RQb2tlckNudCA9IFBPS0VSX0NPVU5UIC0gMjtcblxuICAgICAgICB0aGlzLnBva2VyQ29udGFpbmVyLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUE9LRVJfQ09VTlQgLSAyOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwb2tlclVJID0gdGhpcy5jcmVhdGVQb2tlclVJKHRoaXMucG9rZXJzW2ldKTtcbiAgICAgICAgICAgIHBva2VyVUkubm9kZS54ID0gLTAuMyAqIGk7XG4gICAgICAgICAgICBwb2tlclVJLm5vZGUueSA9IDAuMyAqIGk7XG4gICAgICAgICAgICB0aGlzLnBva2VyQ29udGFpbmVyLmFkZENoaWxkKHBva2VyVUkubm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBsYXllckFyZWEucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5yb2JvdEFyZWEucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5yb2JvdCA9IG5ldyBQbGF5ZXIoKTtcblxuICAgICAgICB0aGlzLnBsYXllci5zY29yZSArPSB0aGlzLnBva2Vyc1tQTEFZRVJfQ0FSRF9JTkRFWF0ucG9pbnQ7XG4gICAgICAgIHRoaXMucGxheWVyUG9pbnQuc3RyaW5nID0gYFBvaW50OiAke3RoaXMucGxheWVyLnNjb3JlfWA7XG4gICAgICAgIHRoaXMucm9ib3RQb2ludC5zdHJpbmcgPSAnUG9pbnQ6IDAnO1xuICAgICAgICB0aGlzLnJlc3VsdC5zdHJpbmcgPSAnJztcbiAgICAgICAgdGhpcy5yb2JvdENob2ljZS5zdHJpbmcgPSAnJztcblxuICAgICAgICB0aGlzLnBsYWNlUGxheWVySG9sZENhcmQoKTtcbiAgICAgICAgdGhpcy5wbGFjZVJvYm90SG9sZENhcmQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYWNlUGxheWVySG9sZENhcmQoKSB7XG4gICAgICAgIGxldCBwb2tlclVJID0gdGhpcy5jcmVhdGVQb2tlclVJKHRoaXMucG9rZXJzW1BMQVlFUl9DQVJEX0lOREVYXSk7XG4gICAgICAgIHBva2VyVUkubm9kZS54ID0gLTQwMDtcbiAgICAgICAgcG9rZXJVSS5ub2RlLnkgPSA3MDtcbiAgICAgICAgcG9rZXJVSS5zZXRTdGF0dXMoUG9rZXJTdGF0dXMuT1BFTik7XG4gICAgICAgIHRoaXMucGxheWVyQXJlYS5hZGRDaGlsZChwb2tlclVJLm5vZGUpO1xuICAgICAgICBwb2tlclVJLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMCksXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMC41LCAtMTQzLCAzKSxcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGFjZVJvYm90SG9sZENhcmQoKSB7XG4gICAgICAgIGxldCBwb2tlclVJID0gdGhpcy5jcmVhdGVQb2tlclVJKHRoaXMucG9rZXJzW1JPQk9UX0NBUkRfSU5ERVhdKTtcbiAgICAgICAgcG9rZXJVSS5ub2RlLnggPSAtNDAwO1xuICAgICAgICBwb2tlclVJLm5vZGUueSA9IDcwO1xuICAgICAgICB0aGlzLnJvYm90QXJlYS5hZGRDaGlsZChwb2tlclVJLm5vZGUpO1xuICAgICAgICBwb2tlclVJLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMCksXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMC41LCAtMTQzLCAyKSxcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaHVmZmxlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFNIVUZGTEVfQ09VTlQ7ICsraSkge1xuICAgICAgICAgICAgbGV0IHNJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnBva2Vycy5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IGVJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnBva2Vycy5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IHRtcFZhbCA9IHRoaXMucG9rZXJzW3NJZHhdXG4gICAgICAgICAgICB0aGlzLnBva2Vyc1tzSWR4XSA9IHRoaXMucG9rZXJzW2VJZHhdXG4gICAgICAgICAgICB0aGlzLnBva2Vyc1tlSWR4XSA9IHRtcFZhbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVQb2tlclVJKHBva2VyOiBQb2tlcik6IFBva2VyVUkge1xuICAgICAgICBsZXQgcG9rZXJVaU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBva2VyUHJlZmFiKTtcbiAgICAgICAgbGV0IHBva2VyVUk6IFBva2VyVUkgPSBwb2tlclVpTm9kZS5nZXRDb21wb25lbnQoUG9rZXJVSSk7XG4gICAgICAgIHBva2VyVUkuaW5pdChwb2tlcik7XG4gICAgICAgIHJldHVybiBwb2tlclVJO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25IaXRCdG5DbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdFBva2VyQ250IDw9IDApIHJldHVybiBhd2FpdCB0aGlzLndob1dpbigpO1xuICAgICAgICBpZiAoIXRoaXMudHVyblBsYXllciB8fCB0aGlzLmdhbWVPdmVyKSByZXR1cm47XG5cbiAgICAgICAgbGV0IHBva2VyTm9kZSA9IHRoaXMucG9rZXJDb250YWluZXIuY2hpbGRyZW5bdGhpcy5yZXN0UG9rZXJDbnQgLSAxXTtcbiAgICAgICAgbGV0IHdvcmxkUG9zaXRpb24gPSBwb2tlck5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKHRoaXMucGxheWVyQ2FyZFBvc1goKSwgLTE1MCwgMCkpO1xuICAgICAgICBsZXQgYXJlYVBvc2l0aW9uID0gdGhpcy5wbGF5ZXJBcmVhLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zaXRpb24pO1xuICAgICAgICBwb2tlck5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICB0aGlzLnBsYXllckFyZWEuYWRkQ2hpbGQocG9rZXJOb2RlKTtcblxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZmxpcE11c2ljLCBmYWxzZSk7XG5cbiAgICAgICAgcG9rZXJOb2RlLnggPSAtNDAwO1xuICAgICAgICBwb2tlck5vZGUueSA9IDcwO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYXllckZpcnN0KSB7XG4gICAgICAgICAgICBwb2tlck5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjApLFxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbyhXSU5ORVJfUElDS19DQVJEX0RVUkFUSU9OLCBhcmVhUG9zaXRpb24ueCwgYXJlYVBvc2l0aW9uLnkpLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oV0lOTkVSX09QRU5fQ0FSRF9EVVJBVElPTiwgMCwgMSksXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9rZXJVSSA9IHBva2VyTm9kZS5nZXRDb21wb25lbnQoUG9rZXJVSSk7XG4gICAgICAgICAgICAgICAgICAgIHBva2VyVUkuc2V0U3RhdHVzKFBva2VyU3RhdHVzLk9QRU4pO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oV0lOTkVSX09QRU5fQ0FSRF9EVVJBVElPTiwgMSwgMSlcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9rZXJOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4wKSxcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oTE9TRVJfUElDS19DQVJEX0RVUkFUSU9OLCBhcmVhUG9zaXRpb24ueCwgYXJlYVBvc2l0aW9uLnkpLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oTE9TRVJfT1BFTl9DQVJEX0RVUkFUSU9OLCAwLCAxKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb2tlclVJID0gcG9rZXJOb2RlLmdldENvbXBvbmVudChQb2tlclVJKTtcbiAgICAgICAgICAgICAgICAgICAgcG9rZXJVSS5zZXRTdGF0dXMoUG9rZXJTdGF0dXMuT1BFTik7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhMT1NFUl9PUEVOX0NBUkRfRFVSQVRJT04sIDEsIDEpXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGxheWVyLnNjb3JlICs9IHRoaXMucG9rZXJzW3RoaXMucmVzdFBva2VyQ250IC0gMV0ucG9pbnQ7XG4gICAgICAgICsrdGhpcy5wbGF5ZXIuY2FyZENudDtcbiAgICAgICAgLS10aGlzLnJlc3RQb2tlckNudDtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJQb2ludC5zdHJpbmcgPSBgUG9pbnQ6ICR7dGhpcy5wbGF5ZXIuc2NvcmV9YDtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2tpcCA9IGZhbHNlO1xuXG4gICAgICAgIGF3YWl0IHRoaXMucm9ib3RIaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXllckNhcmRQb3NYKCkge1xuICAgICAgICByZXR1cm4gMzMwICsgNzAgKiB0aGlzLnBsYXllci5jYXJkQ250O1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgcm9ib3RIaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3RQb2tlckNudCA8PSAwKSByZXR1cm4gYXdhaXQgdGhpcy53aG9XaW4oKTtcbiAgICAgICAgaWYgKHRoaXMudHVyblBsYXllciB8fCB0aGlzLmdhbWVPdmVyKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHRoaXMucm9ib3Quc2NvcmUgPj0gMTcgXG4gICAgICAgICAgICB8fCB0aGlzLnJvYm90LnNjb3JlICsgdGhpcy5wb2tlcnNbUk9CT1RfQ0FSRF9JTkRFWF0ucG9pbnQgPj0gMjFcbiAgICAgICAgICAgIHx8ICh0aGlzLnJvYm90LnNjb3JlID49IDEwICYmIE1hdGgucmFuZG9tKCkgPCBST0JPVF9TS0lQX1BPU1NJQklMSVRZKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9ib3RTdGF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcG9rZXJOb2RlID0gdGhpcy5wb2tlckNvbnRhaW5lci5jaGlsZHJlblt0aGlzLnJlc3RQb2tlckNudCAtIDFdO1xuICAgICAgICBsZXQgd29ybGRQb3NpdGlvbiA9IHBva2VyTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjModGhpcy5yb2JvdENhcmRQb3NYKCksIDE1MCwgMCkpO1xuICAgICAgICBsZXQgYXJlYVBvc2l0aW9uID0gdGhpcy5yb2JvdEFyZWEuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3NpdGlvbik7XG4gICAgICAgIHBva2VyTm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgIHRoaXMucm9ib3RBcmVhLmFkZENoaWxkKHBva2VyTm9kZSk7XG5cbiAgICAgICAgcG9rZXJOb2RlLnggPSAtNDAwO1xuICAgICAgICBwb2tlck5vZGUueSA9IDcwO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYXllckZpcnN0KSB7XG4gICAgICAgICAgICBwb2tlck5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjApLFxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbyhMT1NFUl9QSUNLX0NBUkRfRFVSQVRJT04sIGFyZWFQb3NpdGlvbi54LCBhcmVhUG9zaXRpb24ueSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhMT1NFUl9PUEVOX0NBUkRfRFVSQVRJT04sIDAsIDEpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBva2VyVUkgPSBwb2tlck5vZGUuZ2V0Q29tcG9uZW50KFBva2VyVUkpO1xuICAgICAgICAgICAgICAgICAgICBwb2tlclVJLnNldFN0YXR1cyhQb2tlclN0YXR1cy5PUEVOKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKExPU0VSX09QRU5fQ0FSRF9EVVJBVElPTiwgMSwgMSlcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9rZXJOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4wKSxcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oV0lOTkVSX1BJQ0tfQ0FSRF9EVVJBVElPTiwgYXJlYVBvc2l0aW9uLngsIGFyZWFQb3NpdGlvbi55KSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKFdJTk5FUl9PUEVOX0NBUkRfRFVSQVRJT04sIDAsIDEpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBva2VyVUkgPSBwb2tlck5vZGUuZ2V0Q29tcG9uZW50KFBva2VyVUkpO1xuICAgICAgICAgICAgICAgICAgICBwb2tlclVJLnNldFN0YXR1cyhQb2tlclN0YXR1cy5PUEVOKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKFdJTk5FUl9PUEVOX0NBUkRfRFVSQVRJT04sIDEsIDEpXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm9ib3Quc2NvcmUgKz0gdGhpcy5wb2tlcnNbdGhpcy5yZXN0UG9rZXJDbnQgLSAxXS5wb2ludDtcbiAgICAgICAgKyt0aGlzLnJvYm90LmNhcmRDbnQ7XG4gICAgICAgIC0tdGhpcy5yZXN0UG9rZXJDbnQ7XG4gICAgICAgIHRoaXMudHVyblBsYXllciA9IHRydWU7XG4gICAgICAgIHRoaXMucm9ib3Quc2tpcCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMucm9ib3RQb2ludC5zdHJpbmcgPSBgUG9pbnQ6ICR7dGhpcy5yb2JvdC5zY29yZX1gO1xuICAgICAgICB0aGlzLnJvYm90Q2hvaWNlLnN0cmluZyA9ICcnXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyByb2JvdFN0YXkoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3RQb2tlckNudCA8PSAwKSByZXR1cm4gYXdhaXQgdGhpcy53aG9XaW4oKTtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yb2JvdENob2ljZS5zdHJpbmcgPSAnU3RheSdcbiAgICAgICAgdGhpcy5yb2JvdC5za2lwID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIuc2tpcCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy53aG9XaW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcm9ib3RDYXJkUG9zWCgpIHtcbiAgICAgICAgcmV0dXJuIDMzMCArIDcwICogdGhpcy5yb2JvdC5jYXJkQ250O1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25TdGF5QnRuQ2xpY2soKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zdGF5TXVzaWMsIGZhbHNlKTtcbiAgICAgICAgaWYgKHRoaXMucmVzdFBva2VyQ250IDw9IDApIHJldHVybiB0aGlzLndob1dpbigpO1xuICAgICAgICBpZiAoIXRoaXMudHVyblBsYXllciB8fCB0aGlzLmdhbWVPdmVyKSByZXR1cm47XG4gICAgICAgIHRoaXMudHVyblBsYXllciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYXllci5za2lwID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5yb2JvdC5za2lwKSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy53aG9XaW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRoaXMucm9ib3RIaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUmVzdGFydEJ0bkNsaWNrKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucmVzdGFydE11c2ljLCBmYWxzZSk7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHdob1dpbigpIHtcbiAgICAgICAgbGV0IHJvYm90SG9sZENhcmROb2RlID0gdGhpcy5yb2JvdEFyZWEuY2hpbGRyZW5bMF07XG4gICAgICAgIGxldCByb2JvdEhvbGRDYXJkID0gcm9ib3RIb2xkQ2FyZE5vZGUuZ2V0Q29tcG9uZW50KFBva2VyVUkpO1xuICAgICAgICByb2JvdEhvbGRDYXJkLnNldFN0YXR1cyhQb2tlclN0YXR1cy5PUEVOKTtcblxuICAgICAgICBjb25zb2xlLmxvZygncGxheWVyIHNjb3JlOiAnICsgdGhpcy5wbGF5ZXIuc2NvcmUgK1xuICAgICAgICAgICAgICAgICAgICAnLCBwbGF5ZXIgaG9sZDogJyArIHRoaXMucG9rZXJzW1BMQVlFUl9DQVJEX0lOREVYXS5wb2ludCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyb2JvdCBzY29yZTogJyArIHRoaXMucGxheWVyLnNjb3JlICtcbiAgICAgICAgICAgICAgICAgICAgJywgcm9ib3QgaG9sZDogJyArIHRoaXMucG9rZXJzW1JPQk9UX0NBUkRfSU5ERVhdLnBvaW50KTtcblxuICAgICAgICB0aGlzLnJvYm90LnNjb3JlICs9IHRoaXMucG9rZXJzW1JPQk9UX0NBUkRfSU5ERVhdLnBvaW50O1xuXG4gICAgICAgIHRoaXMucGxheWVyUG9pbnQuc3RyaW5nID0gYFBvaW50OiAke3RoaXMucGxheWVyLnNjb3JlfWA7XG4gICAgICAgIHRoaXMucm9ib3RQb2ludC5zdHJpbmcgPSBgUG9pbnQ6ICR7dGhpcy5yb2JvdC5zY29yZX1gO1xuXG4gICAgICAgIGxldCBwbGF5ZXJXaW46IFdpblN0YXR1cyA9IFdpblN0YXR1cy5EUkFXO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYXllci5zY29yZSA9PSB0aGlzLnJvYm90LnNjb3JlKSB7XG4gICAgICAgICAgICBwbGF5ZXJXaW4gPSBXaW5TdGF0dXMuRFJBVztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllci5zY29yZSA+IDIxICYmIHRoaXMucm9ib3Quc2NvcmUgPiAyMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLnNjb3JlIDwgdGhpcy5yb2JvdC5zY29yZSkge1xuICAgICAgICAgICAgICAgIHBsYXllcldpbiA9IFdpblN0YXR1cy5XSU47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBsYXllcldpbiA9IFdpblN0YXR1cy5MT1NFO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyLnNjb3JlID4gMjEpIHtcbiAgICAgICAgICAgIHBsYXllcldpbiA9IFdpblN0YXR1cy5MT1NFO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucm9ib3Quc2NvcmUgPiAyMSkge1xuICAgICAgICAgICAgcGxheWVyV2luID0gV2luU3RhdHVzLldJTjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5zY29yZSA+IHRoaXMucm9ib3Quc2NvcmUpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJXaW4gPSBXaW5TdGF0dXMuV0lOO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJXaW4gPSBXaW5TdGF0dXMuTE9TRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICB2YXIgdHhIYXNoOiBTdHJpbmcgPSBcIlwiO1xuICAgICAgICBpZiAocGxheWVyV2luID09PSBXaW5TdGF0dXMuV0lOKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5zdHJpbmcgPSAnWW91IFdpbic7XG4gICAgICAgICAgICB0aGlzLnBsYXllckZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMud2luLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zdWNjZXNzTXVzaWMsIGZhbHNlKTtcbiAgICAgICAgICAgIHR4SGFzaCA9IGF3YWl0IHRoaXMuY2xpZW50LmJhdHRsZV93aW4oKTtcbiAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZmFpbGVkTXVzaWMsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJXaW4gPT09IFdpblN0YXR1cy5EUkFXKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQuc3RyaW5nID0gJ0RyYXcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdC5zdHJpbmcgPSAnWW91IExvc2UnO1xuICAgICAgICAgICAgICAgIHR4SGFzaCA9IGF3YWl0IHRoaXMuY2xpZW50LmJhdHRsZV9sb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50eEhhc2guc3RyaW5nID0gYHR4IGhhc2g6ICR7dHhIYXNofWBcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xvc2VCdG5DbGljaygpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNsaWNrTXVzaWMsIGZhbHNlKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtZW51Jyk7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG59XG5cbmNsYXNzIFBsYXllciB7XG4gICAgcHVibGljIHNjb3JlOiBudW1iZXI7XG4gICAgcHVibGljIGNhcmRDbnQ6IG51bWJlcjtcbiAgICBwdWJsaWMgc2tpcDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5jYXJkQ250ID0gMDtcbiAgICAgICAgdGhpcy5za2lwID0gZmFsc2U7XG4gICAgfVxufTtcblxuZW51bSBXaW5TdGF0dXMge1xuICAgIFdJTiA9IDAsXG4gICAgRFJBVyA9IDEsXG4gICAgTE9TRSA9IDIsXG59O1xuIl19