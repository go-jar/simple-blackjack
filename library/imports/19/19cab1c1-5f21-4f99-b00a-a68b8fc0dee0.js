"use strict";
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
        _this.helpButton = null;
        _this.clickMusic = null;
        return _this;
    }
    StartScene.prototype.start = function () {
        this.playButton.on(cc.Node.EventType.TOUCH_START, this.onPlayBtnClick, this);
        this.achievementButton.on(cc.Node.EventType.TOUCH_START, this.onAchievementBtnClick, this);
        this.helpButton.on(cc.Node.EventType.TOUCH_START, this.onHelpBtnClick, this);
    };
    StartScene.prototype.onPlayBtnClick = function (button) {
        cc.audioEngine.playEffect(this.clickMusic, false);
        cc.director.loadScene('game');
    };
    StartScene.prototype.onAchievementBtnClick = function () {
        cc.audioEngine.playEffect(this.clickMusic, false);
        cc.director.loadScene('achievement');
    };
    StartScene.prototype.onHelpBtnClick = function () {
        cc.audioEngine.playEffect(this.clickMusic, false);
        cc.director.loadScene('help');
    };
    __decorate([
        property(cc.Node)
    ], StartScene.prototype, "playButton", void 0);
    __decorate([
        property(cc.Node)
    ], StartScene.prototype, "achievementButton", void 0);
    __decorate([
        property(cc.Node)
    ], StartScene.prototype, "helpButton", void 0);
    __decorate([
        property(cc.AudioClip)
    ], StartScene.prototype, "clickMusic", void 0);
    StartScene = __decorate([
        ccclass
    ], StartScene);
    return StartScene;
}(cc.Component));
exports.default = StartScene;

cc._RF.pop();