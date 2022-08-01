"use strict";
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