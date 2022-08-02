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