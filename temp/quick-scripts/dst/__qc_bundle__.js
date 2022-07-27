
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
require('./assets/script/config');
require('./assets/script/game');
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
var config_1 = require("./config");
var Poker = /** @class */ (function () {
    function Poker(point, status) {
        this.point = -1;
        this.status = config_1.PokerStatus.CLOSE;
        this.point = point;
        this.status = status;
    }
    return Poker;
}());
exports.default = Poker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcG9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBb0M7QUFFcEM7SUFJSSxlQUFZLEtBQWEsRUFBRSxNQUFtQjtRQUh2QyxVQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbkIsV0FBTSxHQUFnQixvQkFBVyxDQUFDLEtBQUssQ0FBQztRQUczQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBQ0wsWUFBQztBQUFELENBUkEsQUFRQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQb2tlclN0YXR1c30gZnJvbSBcIi4vY29uZmlnXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9rZXIge1xuICAgIHB1YmxpYyBwb2ludDogbnVtYmVyID0gLTE7XG4gICAgcHVibGljIHN0YXR1czogUG9rZXJTdGF0dXMgPSBQb2tlclN0YXR1cy5DTE9TRTtcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50OiBudW1iZXIsIHN0YXR1czogUG9rZXJTdGF0dXMpIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB9XG59XG4iXX0=
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
var config_1 = require("./config");
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
        if (status == config_1.PokerStatus.CLOSE) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcG9rZXJVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxtQ0FBb0M7QUFHcEM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUF5QkM7UUF2QnVCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFDdEIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUVsQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUNoQyxlQUFTLEdBQW1CLElBQUksQ0FBQzs7SUFtQi9ELENBQUM7SUFqQkcsdUJBQUssR0FBTDtJQUNBLENBQUM7SUFFTSxzQkFBSSxHQUFYLFVBQVksS0FBWTtRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFHLEtBQUssQ0FBQyxLQUFPLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVNLDJCQUFTLEdBQWhCLFVBQWlCLE1BQW1CO1FBQ2hDLElBQUksTUFBTSxJQUFJLG9CQUFXLENBQUMsS0FBSyxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN6QzthQUFNO1lBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQzFDO0lBQ0wsQ0FBQztJQXRCbUI7UUFBbkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQXdCO0lBQ3RCO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUF3QjtJQUVsQjtRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FBaUM7SUFDaEM7UUFBekIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7OENBQWtDO0lBTjFDLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F5QjNCO0lBQUQsY0FBQztDQXpCRCxBQXlCQyxDQXpCb0MsRUFBRSxDQUFDLFNBQVMsR0F5QmhEO2tCQXpCb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCBQb2tlciBmcm9tIFwiLi9wb2tlclwiXG5pbXBvcnQge1Bva2VyU3RhdHVzfSBmcm9tIFwiLi9jb25maWdcIlxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9rZXJVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHBvaW50OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSkgY2FyZDogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgY2FyZEJhY2s6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIGNhcmRGcm9udDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgc3RhcnQgKCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KHBva2VyOiBQb2tlcikge1xuICAgICAgICB0aGlzLnBvaW50LnN0cmluZyA9IGAke3Bva2VyLnBvaW50fWA7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKHBva2VyLnN0YXR1cylcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U3RhdHVzKHN0YXR1czogUG9rZXJTdGF0dXMpIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PSBQb2tlclN0YXR1cy5DTE9TRSkge1xuICAgICAgICAgICAgdGhpcy5wb2ludC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jYXJkLnNwcml0ZUZyYW1lID0gdGhpcy5jYXJkQmFjaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9pbnQubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jYXJkLnNwcml0ZUZyYW1lID0gdGhpcy5jYXJkRnJvbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a4d12G/2S1IO55nEoL1Umj5', 'config');
// script/config.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokerStatus = void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNuQiwrQ0FBUyxDQUFBO0lBQ1QsNkNBQVEsQ0FBQTtBQUNaLENBQUMsRUFIVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUd0QjtBQUFBLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBQb2tlclN0YXR1cyB7XG4gICAgQ0xPU0UgPSAwLFxuICAgIE9QRU4gPSAxLFxufTtcbiJdfQ==
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
var config_1 = require("./config");
var POKER_COUNT = 11;
var SHUFFLE_COUNT = 100;
var PLAYER_CARD_INDEX = 9;
var ROBOT_CARD_INDEX = 10;
var ROBOT_SKIP_POSSIBILITY = 0.6;
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
        _this.pickBtn = null;
        _this.skipBtn = null;
        _this.restartBtn = null;
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
        return _this;
    }
    Game.prototype.start = function () {
        cc.audioEngine.playEffect(this.bgMusic, true);
        for (var point = 1; point <= POKER_COUNT; point++) {
            var poker = new poker_1.default(point, config_1.PokerStatus.CLOSE);
            this.pokers.push(poker);
        }
        this.init();
        this.pickBtn.node.on('click', this.onPickBtnClick, this);
        this.skipBtn.node.on('click', this.onSkipBtnClick, this);
        this.restartBtn.node.on('click', this.onRestartBtnClick, this);
    };
    Game.prototype.init = function () {
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
    Game.prototype.onPickBtnClick = function () {
        if (this.restPokerCnt <= 0)
            return this.whoWin();
        if (!this.turnPlayer)
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
                pokerUI.setStatus(config_1.PokerStatus.OPEN);
            }), cc.scaleTo(WINNER_OPEN_CARD_DURATION, 1, 1)));
        }
        else {
            pokerNode.runAction(cc.sequence(cc.delayTime(0.0), cc.moveTo(LOSER_PICK_CARD_DURATION, areaPosition.x, areaPosition.y), cc.scaleTo(LOSER_OPEN_CARD_DURATION, 0, 1), cc.callFunc(function () {
                var pokerUI = pokerNode.getComponent(pokerUI_1.default);
                pokerUI.setStatus(config_1.PokerStatus.OPEN);
            }), cc.scaleTo(LOSER_OPEN_CARD_DURATION, 1, 1)));
        }
        this.player.score += this.pokers[this.restPokerCnt - 1].point;
        ++this.player.cardCnt;
        --this.restPokerCnt;
        this.turnPlayer = false;
        this.playerPoint.string = "Point: " + this.player.score;
        this.player.skip = false;
        this.robotPlay();
    };
    Game.prototype.playerCardPosX = function () {
        return 330 + 70 * this.player.cardCnt;
    };
    Game.prototype.robotPlay = function () {
        if (this.restPokerCnt <= 0)
            return this.whoWin();
        if (this.turnPlayer)
            return;
        if (this.robot.score >= 17 ||
            (this.robot.score >= 10 && Math.random() < ROBOT_SKIP_POSSIBILITY)) {
            return this.robotSkip();
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
                pokerUI.setStatus(config_1.PokerStatus.OPEN);
            }), cc.scaleTo(LOSER_OPEN_CARD_DURATION, 1, 1)));
        }
        else {
            pokerNode.runAction(cc.sequence(cc.delayTime(0.0), cc.moveTo(WINNER_PICK_CARD_DURATION, areaPosition.x, areaPosition.y), cc.scaleTo(WINNER_OPEN_CARD_DURATION, 0, 1), cc.callFunc(function () {
                var pokerUI = pokerNode.getComponent(pokerUI_1.default);
                pokerUI.setStatus(config_1.PokerStatus.OPEN);
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
    Game.prototype.robotSkip = function () {
        if (this.restPokerCnt <= 0)
            return this.whoWin();
        this.turnPlayer = true;
        this.robotChoice.string = 'Skip';
        this.robot.skip = true;
        if (this.player.skip) {
            this.whoWin();
        }
    };
    Game.prototype.robotCardPosX = function () {
        return 330 + 70 * this.robot.cardCnt;
    };
    Game.prototype.onSkipBtnClick = function () {
        if (this.restPokerCnt <= 0)
            return this.whoWin();
        if (!this.turnPlayer)
            return;
        this.turnPlayer = false;
        this.player.skip = true;
        if (this.robot.skip) {
            return this.whoWin();
        }
        this.robotPlay();
    };
    Game.prototype.onRestartBtnClick = function () {
        this.reset();
    };
    Game.prototype.whoWin = function () {
        var playerHoldCardNode = this.playerArea.children[0];
        var playerHoldCard = playerHoldCardNode.getComponent(pokerUI_1.default);
        playerHoldCard.setStatus(config_1.PokerStatus.OPEN);
        var robotHoldCardNode = this.robotArea.children[0];
        var robotHoldCard = robotHoldCardNode.getComponent(pokerUI_1.default);
        robotHoldCard.setStatus(config_1.PokerStatus.OPEN);
        console.log('player score: ' + this.player.score +
            ', player hold: ' + this.pokers[PLAYER_CARD_INDEX].point);
        this.player.score += this.pokers[PLAYER_CARD_INDEX].point;
        console.log('robot score: ' + this.player.score +
            ', robot hold: ' + this.pokers[ROBOT_CARD_INDEX].point);
        this.robot.score += this.pokers[ROBOT_CARD_INDEX].point;
        this.playerPoint.string = "Point: " + this.player.score;
        this.robotPoint.string = "Point: " + this.robot.score;
        var result = '';
        if (this.player.score == this.robot.score) {
            result = 'Draw';
            this.playerFirst = true;
        }
        else if (this.player.score > 21 && this.robot.score > 21) {
            if (this.player.score < this.robot.score) {
                result = 'You Win';
                this.playerFirst = true;
            }
            else {
                result = 'You Lose';
                this.playerFirst = false;
            }
        }
        else if (this.player.score > 21) {
            result = 'You Lose';
            this.playerFirst = false;
        }
        else if (this.robot.score > 21) {
            result = 'You Win';
            this.playerFirst = true;
        }
        else {
            if (this.player.score > this.robot.score) {
                result = 'You Win';
                this.playerFirst = true;
            }
            else {
                result = 'You Lose';
                this.playerFirst = false;
            }
        }
        this.result.string = result;
        if (this.playerFirst) {
            cc.audioEngine.playEffect(this.successMusic, false);
        }
        else {
            cc.audioEngine.playEffect(this.failedMusic, false);
        }
    };
    __decorate([
        property(cc.Node)
    ], Game.prototype, "pokerContainer", void 0);
    __decorate([
        property(cc.Prefab)
    ], Game.prototype, "pokerPrefab", void 0);
    __decorate([
        property(cc.Button)
    ], Game.prototype, "pickBtn", void 0);
    __decorate([
        property(cc.Button)
    ], Game.prototype, "skipBtn", void 0);
    __decorate([
        property(cc.Button)
    ], Game.prototype, "restartBtn", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBMkI7SUFDekI7UUFBbkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQThCO0lBQzdCO1FBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUE2QjtJQUM1QjtRQUFuQixRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FBOEI7SUFFN0I7UUFBbkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0NBQXlCO0lBRXBCO1FBQXZCLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3lDQUE4QjtJQUM3QjtRQUF2QixRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsyQ0FBZ0M7SUFDL0I7UUFBdkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQW1DO0lBQ2xDO1FBQXZCLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUFrQztJQXJCeEMsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQW9UeEI7SUFBRCxXQUFDO0NBcFRELEFBb1RDLENBcFRpQyxFQUFFLENBQUMsU0FBUyxHQW9UN0M7a0JBcFRvQixJQUFJO0FBc1R6QjtJQUtJO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0wsYUFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBQUEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCBQb2tlciBmcm9tIFwiLi9wb2tlclwiXG5pbXBvcnQgUG9rZXJVSSBmcm9tIFwiLi9wb2tlclVJXCJcbmltcG9ydCB7UG9rZXJTdGF0dXN9IGZyb20gXCIuL2NvbmZpZ1wiXG5cbmNvbnN0IFBPS0VSX0NPVU5UOiBudW1iZXIgPSAxMTtcbmNvbnN0IFNIVUZGTEVfQ09VTlQ6IG51bWJlciA9IDEwMDtcbmNvbnN0IFBMQVlFUl9DQVJEX0lOREVYOiBudW1iZXIgPSA5O1xuY29uc3QgUk9CT1RfQ0FSRF9JTkRFWDogbnVtYmVyID0gMTA7XG5jb25zdCBST0JPVF9TS0lQX1BPU1NJQklMSVRZOiBudW1iZXIgPSAwLjY7XG5jb25zdCBXSU5ORVJfUElDS19DQVJEX0RVUkFUSU9OOiBudW1iZXIgPSAwLjU7XG5jb25zdCBMT1NFUl9QSUNLX0NBUkRfRFVSQVRJT046IG51bWJlciA9IDEuMDtcbmNvbnN0IFdJTk5FUl9PUEVOX0NBUkRfRFVSQVRJT046IG51bWJlciA9IDAuMztcbmNvbnN0IExPU0VSX09QRU5fQ0FSRF9EVVJBVElPTjogbnVtYmVyID0gMC41O1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIHBva2VyQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKSBwb2tlclByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBwcml2YXRlIHBva2VyczogUG9rZXJbXSA9IFtdXG4gICAgcHJpdmF0ZSByZXN0UG9rZXJDbnQ6IG51bWJlciA9IFBPS0VSX0NPVU5UIC0gMjtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pIHBpY2tCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbikgc2tpcEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKSByZXN0YXJ0QnRuOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIHBsYXllckFyZWE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSByb2JvdEFyZWE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgcGxheWVyUG9pbnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHJvYm90UG9pbnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHJvYm90Q2hvaWNlOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHJlc3VsdDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcCkgYmdNdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKSBmbGlwTXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcCkgc3VjY2Vzc011c2ljOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApIGZhaWxlZE11c2ljOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBwbGF5ZXI6IFBsYXllciA9IG51bGw7XG4gICAgcHJpdmF0ZSByb2JvdDogUGxheWVyID0gbnVsbDtcbiAgICBwcml2YXRlIHR1cm5QbGF5ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgcGxheWVyRmlyc3Q6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYmdNdXNpYywgdHJ1ZSk7XG5cbiAgICAgICAgZm9yIChsZXQgcG9pbnQgPSAxOyBwb2ludCA8PSBQT0tFUl9DT1VOVDsgcG9pbnQrKykge1xuICAgICAgICAgICAgbGV0IHBva2VyID0gbmV3IFBva2VyKHBvaW50LCBQb2tlclN0YXR1cy5DTE9TRSk7XG4gICAgICAgICAgICB0aGlzLnBva2Vycy5wdXNoKHBva2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICAgIHRoaXMucGlja0J0bi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25QaWNrQnRuQ2xpY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLnNraXBCdG4ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uU2tpcEJ0bkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0QnRuLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vblJlc3RhcnRCdG5DbGljaywgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCkge1xuICAgICAgICB0aGlzLnNodWZmbGUoKTtcbiAgICAgICAgdGhpcy5yZXN0UG9rZXJDbnQgPSBQT0tFUl9DT1VOVCAtIDI7XG5cbiAgICAgICAgdGhpcy5wb2tlckNvbnRhaW5lci5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFBPS0VSX0NPVU5UIC0gMjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcG9rZXJVSSA9IHRoaXMuY3JlYXRlUG9rZXJVSSh0aGlzLnBva2Vyc1tpXSk7XG4gICAgICAgICAgICBwb2tlclVJLm5vZGUueCA9IC0wLjMgKiBpO1xuICAgICAgICAgICAgcG9rZXJVSS5ub2RlLnkgPSAwLjMgKiBpO1xuICAgICAgICAgICAgdGhpcy5wb2tlckNvbnRhaW5lci5hZGRDaGlsZChwb2tlclVJLm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJBcmVhLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMucm9ib3RBcmVhLnJlbW92ZUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJQb2ludC5zdHJpbmcgPSAnUG9pbnQ6IDAnO1xuICAgICAgICB0aGlzLnJvYm90UG9pbnQuc3RyaW5nID0gJ1BvaW50OiAwJztcbiAgICAgICAgdGhpcy5yZXN1bHQuc3RyaW5nID0gJyc7XG4gICAgICAgIHRoaXMucm9ib3RDaG9pY2Uuc3RyaW5nID0gJyc7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgICAgIHRoaXMucm9ib3QgPSBuZXcgUGxheWVyKCk7XG5cbiAgICAgICAgdGhpcy5wbGFjZVBsYXllckhvbGRDYXJkKCk7XG4gICAgICAgIHRoaXMucGxhY2VSb2JvdEhvbGRDYXJkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldCgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMudHVyblBsYXllciA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGFjZVBsYXllckhvbGRDYXJkKCkge1xuICAgICAgICBsZXQgcG9rZXJVSSA9IHRoaXMuY3JlYXRlUG9rZXJVSSh0aGlzLnBva2Vyc1tQTEFZRVJfQ0FSRF9JTkRFWF0pO1xuICAgICAgICBwb2tlclVJLm5vZGUueCA9IC00MDA7XG4gICAgICAgIHBva2VyVUkubm9kZS55ID0gNzA7XG4gICAgICAgIHRoaXMucGxheWVyQXJlYS5hZGRDaGlsZChwb2tlclVJLm5vZGUpO1xuICAgICAgICBwb2tlclVJLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMCksXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMC41LCAtMTQzLCAzKSxcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGFjZVJvYm90SG9sZENhcmQoKSB7XG4gICAgICAgIGxldCBwb2tlclVJID0gdGhpcy5jcmVhdGVQb2tlclVJKHRoaXMucG9rZXJzW1JPQk9UX0NBUkRfSU5ERVhdKTtcbiAgICAgICAgcG9rZXJVSS5ub2RlLnggPSAtNDAwO1xuICAgICAgICBwb2tlclVJLm5vZGUueSA9IDcwO1xuICAgICAgICB0aGlzLnJvYm90QXJlYS5hZGRDaGlsZChwb2tlclVJLm5vZGUpO1xuICAgICAgICBwb2tlclVJLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMCksXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMC41LCAtMTQzLCAyKSxcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaHVmZmxlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFNIVUZGTEVfQ09VTlQ7ICsraSkge1xuICAgICAgICAgICAgbGV0IHNJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnBva2Vycy5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IGVJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnBva2Vycy5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IHRtcFZhbCA9IHRoaXMucG9rZXJzW3NJZHhdXG4gICAgICAgICAgICB0aGlzLnBva2Vyc1tzSWR4XSA9IHRoaXMucG9rZXJzW2VJZHhdXG4gICAgICAgICAgICB0aGlzLnBva2Vyc1tlSWR4XSA9IHRtcFZhbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVQb2tlclVJKHBva2VyOiBQb2tlcik6IFBva2VyVUkge1xuICAgICAgICBsZXQgcG9rZXJVaU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBva2VyUHJlZmFiKTtcbiAgICAgICAgbGV0IHBva2VyVUk6IFBva2VyVUkgPSBwb2tlclVpTm9kZS5nZXRDb21wb25lbnQoUG9rZXJVSSk7XG4gICAgICAgIHBva2VyVUkuaW5pdChwb2tlcik7XG4gICAgICAgIHJldHVybiBwb2tlclVJO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25QaWNrQnRuQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3RQb2tlckNudCA8PSAwKSByZXR1cm4gdGhpcy53aG9XaW4oKTtcbiAgICAgICAgaWYgKCF0aGlzLnR1cm5QbGF5ZXIpIHJldHVybjtcblxuICAgICAgICBsZXQgcG9rZXJOb2RlID0gdGhpcy5wb2tlckNvbnRhaW5lci5jaGlsZHJlblt0aGlzLnJlc3RQb2tlckNudCAtIDFdO1xuICAgICAgICBsZXQgd29ybGRQb3NpdGlvbiA9IHBva2VyTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjModGhpcy5wbGF5ZXJDYXJkUG9zWCgpLCAtMTUwLCAwKSk7XG4gICAgICAgIGxldCBhcmVhUG9zaXRpb24gPSB0aGlzLnBsYXllckFyZWEuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3NpdGlvbik7XG4gICAgICAgIHBva2VyTm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgIHRoaXMucGxheWVyQXJlYS5hZGRDaGlsZChwb2tlck5vZGUpO1xuXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5mbGlwTXVzaWMsIGZhbHNlKTtcblxuICAgICAgICBwb2tlck5vZGUueCA9IC00MDA7XG4gICAgICAgIHBva2VyTm9kZS55ID0gNzA7XG5cbiAgICAgICAgaWYgKHRoaXMucGxheWVyRmlyc3QpIHtcbiAgICAgICAgICAgIHBva2VyTm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMCksXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKFdJTk5FUl9QSUNLX0NBUkRfRFVSQVRJT04sIGFyZWFQb3NpdGlvbi54LCBhcmVhUG9zaXRpb24ueSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhXSU5ORVJfT1BFTl9DQVJEX0RVUkFUSU9OLCAwLCAxKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb2tlclVJID0gcG9rZXJOb2RlLmdldENvbXBvbmVudChQb2tlclVJKTtcbiAgICAgICAgICAgICAgICAgICAgcG9rZXJVSS5zZXRTdGF0dXMoUG9rZXJTdGF0dXMuT1BFTik7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhXSU5ORVJfT1BFTl9DQVJEX0RVUkFUSU9OLCAxLCAxKVxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb2tlck5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjApLFxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbyhMT1NFUl9QSUNLX0NBUkRfRFVSQVRJT04sIGFyZWFQb3NpdGlvbi54LCBhcmVhUG9zaXRpb24ueSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhMT1NFUl9PUEVOX0NBUkRfRFVSQVRJT04sIDAsIDEpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBva2VyVUkgPSBwb2tlck5vZGUuZ2V0Q29tcG9uZW50KFBva2VyVUkpO1xuICAgICAgICAgICAgICAgICAgICBwb2tlclVJLnNldFN0YXR1cyhQb2tlclN0YXR1cy5PUEVOKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKExPU0VSX09QRU5fQ0FSRF9EVVJBVElPTiwgMSwgMSlcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbGF5ZXIuc2NvcmUgKz0gdGhpcy5wb2tlcnNbdGhpcy5yZXN0UG9rZXJDbnQgLSAxXS5wb2ludDtcbiAgICAgICAgKyt0aGlzLnBsYXllci5jYXJkQ250O1xuICAgICAgICAtLXRoaXMucmVzdFBva2VyQ250O1xuICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnBsYXllclBvaW50LnN0cmluZyA9IGBQb2ludDogJHt0aGlzLnBsYXllci5zY29yZX1gO1xuICAgICAgICB0aGlzLnBsYXllci5za2lwID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5yb2JvdFBsYXkoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXllckNhcmRQb3NYKCkge1xuICAgICAgICByZXR1cm4gMzMwICsgNzAgKiB0aGlzLnBsYXllci5jYXJkQ250O1xuICAgIH1cblxuICAgIHByaXZhdGUgcm9ib3RQbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5yZXN0UG9rZXJDbnQgPD0gMCkgcmV0dXJuIHRoaXMud2hvV2luKCk7XG4gICAgICAgIGlmICh0aGlzLnR1cm5QbGF5ZXIpIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy5yb2JvdC5zY29yZSA+PSAxNyB8fCBcbiAgICAgICAgICAgICh0aGlzLnJvYm90LnNjb3JlID49IDEwICYmIE1hdGgucmFuZG9tKCkgPCBST0JPVF9TS0lQX1BPU1NJQklMSVRZKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9ib3RTa2lwKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcG9rZXJOb2RlID0gdGhpcy5wb2tlckNvbnRhaW5lci5jaGlsZHJlblt0aGlzLnJlc3RQb2tlckNudCAtIDFdO1xuICAgICAgICBsZXQgd29ybGRQb3NpdGlvbiA9IHBva2VyTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjModGhpcy5yb2JvdENhcmRQb3NYKCksIDE1MCwgMCkpO1xuICAgICAgICBsZXQgYXJlYVBvc2l0aW9uID0gdGhpcy5yb2JvdEFyZWEuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3NpdGlvbik7XG4gICAgICAgIHBva2VyTm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgIHRoaXMucm9ib3RBcmVhLmFkZENoaWxkKHBva2VyTm9kZSk7XG5cbiAgICAgICAgcG9rZXJOb2RlLnggPSAtNDAwO1xuICAgICAgICBwb2tlck5vZGUueSA9IDcwO1xuXG4gICAgICAgIGlmICh0aGlzLnBsYXllckZpcnN0KSB7XG4gICAgICAgICAgICBwb2tlck5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjApLFxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbyhMT1NFUl9QSUNLX0NBUkRfRFVSQVRJT04sIGFyZWFQb3NpdGlvbi54LCBhcmVhUG9zaXRpb24ueSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhMT1NFUl9PUEVOX0NBUkRfRFVSQVRJT04sIDAsIDEpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBva2VyVUkgPSBwb2tlck5vZGUuZ2V0Q29tcG9uZW50KFBva2VyVUkpO1xuICAgICAgICAgICAgICAgICAgICBwb2tlclVJLnNldFN0YXR1cyhQb2tlclN0YXR1cy5PUEVOKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKExPU0VSX09QRU5fQ0FSRF9EVVJBVElPTiwgMSwgMSlcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9rZXJOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4wKSxcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oV0lOTkVSX1BJQ0tfQ0FSRF9EVVJBVElPTiwgYXJlYVBvc2l0aW9uLngsIGFyZWFQb3NpdGlvbi55KSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKFdJTk5FUl9PUEVOX0NBUkRfRFVSQVRJT04sIDAsIDEpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBva2VyVUkgPSBwb2tlck5vZGUuZ2V0Q29tcG9uZW50KFBva2VyVUkpO1xuICAgICAgICAgICAgICAgICAgICBwb2tlclVJLnNldFN0YXR1cyhQb2tlclN0YXR1cy5PUEVOKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKFdJTk5FUl9PUEVOX0NBUkRfRFVSQVRJT04sIDEsIDEpXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm9ib3Quc2NvcmUgKz0gdGhpcy5wb2tlcnNbdGhpcy5yZXN0UG9rZXJDbnQgLSAxXS5wb2ludDtcbiAgICAgICAgKyt0aGlzLnJvYm90LmNhcmRDbnQ7XG4gICAgICAgIC0tdGhpcy5yZXN0UG9rZXJDbnQ7XG4gICAgICAgIHRoaXMudHVyblBsYXllciA9IHRydWU7XG4gICAgICAgIHRoaXMucm9ib3Quc2tpcCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMucm9ib3RQb2ludC5zdHJpbmcgPSBgUG9pbnQ6ICR7dGhpcy5yb2JvdC5zY29yZX1gO1xuICAgICAgICB0aGlzLnJvYm90Q2hvaWNlLnN0cmluZyA9ICcnXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByb2JvdFNraXAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3RQb2tlckNudCA8PSAwKSByZXR1cm4gdGhpcy53aG9XaW4oKTtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yb2JvdENob2ljZS5zdHJpbmcgPSAnU2tpcCdcbiAgICAgICAgdGhpcy5yb2JvdC5za2lwID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIuc2tpcCkge1xuICAgICAgICAgICAgdGhpcy53aG9XaW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcm9ib3RDYXJkUG9zWCgpIHtcbiAgICAgICAgcmV0dXJuIDMzMCArIDcwICogdGhpcy5yb2JvdC5jYXJkQ250O1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Ta2lwQnRuQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3RQb2tlckNudCA8PSAwKSByZXR1cm4gdGhpcy53aG9XaW4oKTtcbiAgICAgICAgaWYgKCF0aGlzLnR1cm5QbGF5ZXIpIHJldHVybjtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGxheWVyLnNraXAgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLnJvYm90LnNraXApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndob1dpbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yb2JvdFBsYXkoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUmVzdGFydEJ0bkNsaWNrKCkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB3aG9XaW4oKSB7XG4gICAgICAgIGxldCBwbGF5ZXJIb2xkQ2FyZE5vZGUgPSB0aGlzLnBsYXllckFyZWEuY2hpbGRyZW5bMF07XG4gICAgICAgIGxldCBwbGF5ZXJIb2xkQ2FyZCA9IHBsYXllckhvbGRDYXJkTm9kZS5nZXRDb21wb25lbnQoUG9rZXJVSSk7XG4gICAgICAgIHBsYXllckhvbGRDYXJkLnNldFN0YXR1cyhQb2tlclN0YXR1cy5PUEVOKTtcblxuICAgICAgICBsZXQgcm9ib3RIb2xkQ2FyZE5vZGUgPSB0aGlzLnJvYm90QXJlYS5jaGlsZHJlblswXTtcbiAgICAgICAgbGV0IHJvYm90SG9sZENhcmQgPSByb2JvdEhvbGRDYXJkTm9kZS5nZXRDb21wb25lbnQoUG9rZXJVSSk7XG4gICAgICAgIHJvYm90SG9sZENhcmQuc2V0U3RhdHVzKFBva2VyU3RhdHVzLk9QRU4pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgc2NvcmU6ICcgKyB0aGlzLnBsYXllci5zY29yZSArXG4gICAgICAgICAgICAgICAgICAgICcsIHBsYXllciBob2xkOiAnICsgdGhpcy5wb2tlcnNbUExBWUVSX0NBUkRfSU5ERVhdLnBvaW50KTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2NvcmUgKz0gdGhpcy5wb2tlcnNbUExBWUVSX0NBUkRfSU5ERVhdLnBvaW50O1xuICAgICAgICBjb25zb2xlLmxvZygncm9ib3Qgc2NvcmU6ICcgKyB0aGlzLnBsYXllci5zY29yZSArXG4gICAgICAgICAgICAgICAgICAgICcsIHJvYm90IGhvbGQ6ICcgKyB0aGlzLnBva2Vyc1tST0JPVF9DQVJEX0lOREVYXS5wb2ludCk7XG4gICAgICAgIHRoaXMucm9ib3Quc2NvcmUgKz0gdGhpcy5wb2tlcnNbUk9CT1RfQ0FSRF9JTkRFWF0ucG9pbnQ7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJQb2ludC5zdHJpbmcgPSBgUG9pbnQ6ICR7dGhpcy5wbGF5ZXIuc2NvcmV9YDtcbiAgICAgICAgdGhpcy5yb2JvdFBvaW50LnN0cmluZyA9IGBQb2ludDogJHt0aGlzLnJvYm90LnNjb3JlfWA7XG5cbiAgICAgICAgbGV0IHJlc3VsdDogc3RyaW5nID0gJyc7XG5cbiAgICAgICAgaWYgKHRoaXMucGxheWVyLnNjb3JlID09IHRoaXMucm9ib3Quc2NvcmUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9ICdEcmF3JztcbiAgICAgICAgICAgIHRoaXMucGxheWVyRmlyc3QgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyLnNjb3JlID4gMjEgJiYgdGhpcy5yb2JvdC5zY29yZSA+IDIxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuc2NvcmUgPCB0aGlzLnJvYm90LnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ1lvdSBXaW4nO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyRmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnWW91IExvc2UnO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllci5zY29yZSA+IDIxKSB7XG4gICAgICAgICAgICByZXN1bHQgPSAnWW91IExvc2UnO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJGaXJzdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucm9ib3Quc2NvcmUgPiAyMSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gJ1lvdSBXaW4nO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJGaXJzdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuc2NvcmUgPiB0aGlzLnJvYm90LnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ1lvdSBXaW4nO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyRmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnWW91IExvc2UnO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzdWx0LnN0cmluZyA9IHJlc3VsdDtcblxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJGaXJzdCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnN1Y2Nlc3NNdXNpYywgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmZhaWxlZE11c2ljLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFBsYXllciB7XG4gICAgcHVibGljIHNjb3JlOiBudW1iZXI7XG4gICAgcHVibGljIGNhcmRDbnQ6IG51bWJlcjtcbiAgICBwdWJsaWMgc2tpcDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5jYXJkQ250ID0gMDtcbiAgICAgICAgdGhpcy5za2lwID0gZmFsc2U7XG4gICAgfVxufTtcbiJdfQ==
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
cc._RF.push(module, '19cabHBXyFPmbAKpouPwN7g', 'start');
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
    StartScene.prototype.onPlayBtnClick = function (button) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc3RhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFhQztRQVZHLGdCQUFVLEdBQWMsSUFBSSxDQUFDOztRQVM3QixpQkFBaUI7SUFDckIsQ0FBQztJQVJHLDBCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELG1DQUFjLEdBQWQsVUFBZSxNQUFNO1FBQ2pCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFSRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNTO0lBSFosVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWE5QjtJQUFELGlCQUFDO0NBYkQsQUFhQyxDQWJ1QyxFQUFFLENBQUMsU0FBUyxHQWFuRDtrQkFib0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0U2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBwbGF5QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLnBsYXlCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uUGxheUJ0bkNsaWNrLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvblBsYXlCdG5DbGljayhidXR0b24pIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdnYW1lJyk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
