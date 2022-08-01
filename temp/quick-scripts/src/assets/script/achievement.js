"use strict";
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
var achievementItemUI_1 = require("./achievementItemUI");
var achievementItem_1 = require("./entity/achievementItem");
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
        this.closeBtn.on(cc.Node.EventType.TOUCH_START, this.onCloseBtnClick, this);
        // const client = new Client();
        // const scoreRes = await client.getScore('user');
        // this.init(scoreRes.success, scoreRes.total);
        this.initScore(10, 30);
        var total = 20;
        var y = -10;
        for (var i = 0; i < total / 7; ++i) {
            var x = -240;
            for (var j = 0; j < 7; j++) {
                var itemUI = this.createItemUI(new achievementItem_1.AchievementItem(i * 7 + j));
                itemUI.node.x = x;
                itemUI.node.y = y;
                this.node.addChild(itemUI.node);
                x += 80;
            }
            y -= 85;
        }
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