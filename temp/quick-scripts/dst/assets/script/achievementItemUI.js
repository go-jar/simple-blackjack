
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/achievementItemUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '36ef3EHI8pJuI2INKDtpnhY', 'achievementItemUI');
// script/achievementItemUI.ts

"use strict";
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
var AchievementItemUI = /** @class */ (function (_super) {
    __extends(AchievementItemUI, _super);
    function AchievementItemUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = null;
        return _this;
    }
    AchievementItemUI.prototype.init = function (item) {
        this.id.string = "" + item.id;
    };
    __decorate([
        property(cc.Label)
    ], AchievementItemUI.prototype, "id", void 0);
    AchievementItemUI = __decorate([
        ccclass
    ], AchievementItemUI);
    return AchievementItemUI;
}(cc.Component));
exports.default = AchievementItemUI;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYWNoaWV2ZW1lbnRJdGVtVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFNQztRQUx1QixRQUFFLEdBQWEsSUFBSSxDQUFDOztJQUs1QyxDQUFDO0lBSFUsZ0NBQUksR0FBWCxVQUFZLElBQXFCO1FBQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUcsSUFBSSxDQUFDLEVBQUksQ0FBQztJQUNsQyxDQUFDO0lBSm1CO1FBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUFxQjtJQUR2QixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQU1yQztJQUFELHdCQUFDO0NBTkQsQUFNQyxDQU44QyxFQUFFLENBQUMsU0FBUyxHQU0xRDtrQkFOb0IsaUJBQWlCO0FBTXJDLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IHsgQWNoaWV2ZW1lbnRJdGVtIH0gZnJvbSBcIi4vZW50aXR5L2FjaGlldmVtZW50SXRlbVwiO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNoaWV2ZW1lbnRJdGVtVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgaWQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHB1YmxpYyBpbml0KGl0ZW06IEFjaGlldmVtZW50SXRlbSkge1xuICAgICAgICB0aGlzLmlkLnN0cmluZyA9IGAke2l0ZW0uaWR9YDtcbiAgICB9XG59O1xuIl19