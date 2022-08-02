
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
var achievementItemUI_1 = require("./achievementItemUI");
var client_1 = require("./client");
var achievementItem_1 = require("./entity/achievementItem");
var config_1 = require("./config");
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.clickMusic = null;
        _this.progressLabel = null;
        _this.countLabel = null;
        _this.progressSprite = null;
        _this.achievementItem = null;
        _this.client = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var statics, total, y, i, x, j, itemUI;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.closeBtn.on(cc.Node.EventType.TOUCH_START, this.onCloseBtnClick, this);
                        this.client = new client_1.default(config_1.RPC_URL, config_1.MY_CKB_PRIVATE_KEY, config_1.MY_CKB_ADDRESS);
                        return [4 /*yield*/, this.client.get_achievement()];
                    case 1:
                        statics = _a.sent();
                        this.initScore(statics.win_count, statics.win_count + statics.lose_count);
                        total = statics.nfts.length;
                        y = -10;
                        for (i = 0; i < total / 7; ++i) {
                            x = -240;
                            for (j = 0; j < 7 && i * 7 + j < total; j++) {
                                itemUI = this.createItemUI(new achievementItem_1.AchievementItem(statics.nfts[i * 7 + j]));
                                itemUI.node.x = x;
                                itemUI.node.y = y;
                                this.node.addChild(itemUI.node);
                                x += 80;
                            }
                            y -= 85;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NewClass.prototype.createItemUI = function (item) {
        var itemUiNode = cc.instantiate(this.achievementItem);
        var itemUI = itemUiNode.getComponent(achievementItemUI_1.default);
        itemUI.init(item);
        return itemUI;
    };
    NewClass.prototype.onCloseBtnClick = function () {
        cc.audioEngine.playEffect(this.clickMusic, false);
        cc.director.loadScene('menu');
    };
    NewClass.prototype.initScore = function (count, total) {
        var percent = total == 0 ? 0 : Math.floor(count * 100 / total);
        this.progressLabel.string = percent + "%";
        this.countLabel.string = "" + count;
        this.progressSprite.fillRange = percent / 100.0;
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "closeBtn", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "clickMusic", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "progressLabel", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "countLabel", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "progressSprite", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "achievementItem", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYWNoaWV2ZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMseURBQW9EO0FBQ3BELG1DQUE2QjtBQUM3Qiw0REFBMkQ7QUFDM0QsbUNBQXVFO0FBR3ZFO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBc0RDO1FBcERzQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3BCLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVwQyxtQkFBYSxHQUFhLElBQUksQ0FBQztRQUMvQixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUMzQixvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyxxQkFBZSxHQUFjLElBQUksQ0FBQztRQUUvQyxZQUFNLEdBQVcsSUFBSSxDQUFDOztJQTJDbEMsQ0FBQztJQXpDUyx3QkFBSyxHQUFYOzs7Ozs7d0JBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzVFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDLGdCQUFPLEVBQUUsMkJBQWtCLEVBQUUsdUJBQWMsQ0FBQyxDQUFDO3dCQUV0RCxxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxFQUFBOzt3QkFBN0MsT0FBTyxHQUFHLFNBQW1DO3dCQUNuRCxJQUFJLENBQUMsU0FBUyxDQUFD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O2tCQXREb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCBBY2hpZXZlbWVudEl0ZW1VSSBmcm9tICcuL2FjaGlldmVtZW50SXRlbVVJJztcbmltcG9ydCBDbGllbnQgZnJvbSAnLi9jbGllbnQnXG5pbXBvcnQgeyBBY2hpZXZlbWVudEl0ZW0gfSBmcm9tICcuL2VudGl0eS9hY2hpZXZlbWVudEl0ZW0nO1xuaW1wb3J0IHsgUlBDX1VSTCwgTVlfQ0tCX1BSSVZBVEVfS0VZLCBNWV9DS0JfQUREUkVTUyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIGNsb3NlQnRuOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKSBjbGlja011c2ljOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKSBwcm9ncmVzc0xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKSBjb3VudExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSkgcHJvZ3Jlc3NTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKSBhY2hpZXZlbWVudEl0ZW06IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBwcml2YXRlIGNsaWVudDogQ2xpZW50ID0gbnVsbDtcblxuICAgIGFzeW5jIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5jbG9zZUJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vbkNsb3NlQnRuQ2xpY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLmNsaWVudCA9IG5ldyBDbGllbnQoUlBDX1VSTCwgTVlfQ0tCX1BSSVZBVEVfS0VZLCBNWV9DS0JfQUREUkVTUyk7XG5cbiAgICAgICAgY29uc3Qgc3RhdGljcyA9IGF3YWl0IHRoaXMuY2xpZW50LmdldF9hY2hpZXZlbWVudCgpO1xuICAgICAgICB0aGlzLmluaXRTY29yZShzdGF0aWNzLndpbl9jb3VudCwgc3RhdGljcy53aW5fY291bnQgKyBzdGF0aWNzLmxvc2VfY291bnQpO1xuXG4gICAgICAgIGxldCB0b3RhbCA9IHN0YXRpY3MubmZ0cy5sZW5ndGg7XG4gICAgICAgIHZhciB5ID0gLTEwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdGFsIC8gNzsgKytpKSB7XG4gICAgICAgICAgICB2YXIgeCA9IC0yNDA7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDcgJiYgaSAqIDcgKyBqIDwgdG90YWw7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtVUkgPSB0aGlzLmNyZWF0ZUl0ZW1VSShuZXcgQWNoaWV2ZW1lbnRJdGVtKHN0YXRpY3MubmZ0c1tpICogNyArIGpdKSk7XG4gICAgICAgICAgICAgICAgaXRlbVVJLm5vZGUueCA9IHg7XG4gICAgICAgICAgICAgICAgaXRlbVVJLm5vZGUueSA9IHk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGl0ZW1VSS5ub2RlKTtcbiAgICAgICAgICAgICAgICB4ICs9IDgwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeSAtPSA4NTtcbiAgICAgICAgfVxuICAgIH1cbnhcbiAgICBwcml2YXRlIGNyZWF0ZUl0ZW1VSShpdGVtOiBBY2hpZXZlbWVudEl0ZW0pOiBBY2hpZXZlbWVudEl0ZW1VSSB7XG4gICAgICAgIGxldCBpdGVtVWlOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5hY2hpZXZlbWVudEl0ZW0pO1xuICAgICAgICBsZXQgaXRlbVVJOiBBY2hpZXZlbWVudEl0ZW1VSSA9IGl0ZW1VaU5vZGUuZ2V0Q29tcG9uZW50KEFjaGlldmVtZW50SXRlbVVJKTtcbiAgICAgICAgaXRlbVVJLmluaXQoaXRlbSk7XG4gICAgICAgIHJldHVybiBpdGVtVUk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsb3NlQnRuQ2xpY2soKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jbGlja011c2ljLCBmYWxzZSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWVudScpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdFNjb3JlKGNvdW50OiBudW1iZXIsIHRvdGFsOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHBlcmNlbnQgPSB0b3RhbCA9PSAwID8gMCA6IE1hdGguZmxvb3IoY291bnQgKiAxMDAgLyB0b3RhbClcblxuICAgICAgICB0aGlzLnByb2dyZXNzTGFiZWwuc3RyaW5nID0gYCR7cGVyY2VudH0lYFxuICAgICAgICB0aGlzLmNvdW50TGFiZWwuc3RyaW5nID0gYCR7Y291bnR9YFxuICAgICAgICB0aGlzLnByb2dyZXNzU3ByaXRlLmZpbGxSYW5nZSA9IHBlcmNlbnQgLyAxMDAuMFxuICAgIH1cbn1cbiJdfQ==