
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
var poker_1 = require("./entity/poker");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcG9rZXJVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyx3Q0FBaUQ7QUFHakQ7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUF5QkM7UUF2QnVCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFDdEIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUVsQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUNoQyxlQUFTLEdBQW1CLElBQUksQ0FBQzs7SUFtQi9ELENBQUM7SUFqQkcsdUJBQUssR0FBTDtJQUNBLENBQUM7SUFFTSxzQkFBSSxHQUFYLFVBQVksS0FBWTtRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFHLEtBQUssQ0FBQyxLQUFPLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVNLDJCQUFTLEdBQWhCLFVBQWlCLE1BQW1CO1FBQ2hDLElBQUksTUFBTSxJQUFJLG1CQUFXLENBQUMsS0FBSyxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN6QzthQUFNO1lBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQzFDO0lBQ0wsQ0FBQztJQXRCbUI7UUFBbkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQXdCO0lBQ3RCO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUF3QjtJQUVsQjtRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FBaUM7SUFDaEM7UUFBekIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7OENBQWtDO0lBTjFDLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F5QjNCO0lBQUQsY0FBQztDQXpCRCxBQXlCQyxDQXpCb0MsRUFBRSxDQUFDLFNBQVMsR0F5QmhEO2tCQXpCb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCB7UG9rZXIsIFBva2VyU3RhdHVzfSBmcm9tIFwiLi9lbnRpdHkvcG9rZXJcIlxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9rZXJVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHBvaW50OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSkgY2FyZDogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgY2FyZEJhY2s6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIGNhcmRGcm9udDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgc3RhcnQgKCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KHBva2VyOiBQb2tlcikge1xuICAgICAgICB0aGlzLnBvaW50LnN0cmluZyA9IGAke3Bva2VyLnBvaW50fWA7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKHBva2VyLnN0YXR1cylcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U3RhdHVzKHN0YXR1czogUG9rZXJTdGF0dXMpIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PSBQb2tlclN0YXR1cy5DTE9TRSkge1xuICAgICAgICAgICAgdGhpcy5wb2ludC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jYXJkLnNwcml0ZUZyYW1lID0gdGhpcy5jYXJkQmFjaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9pbnQubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jYXJkLnNwcml0ZUZyYW1lID0gdGhpcy5jYXJkRnJvbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=