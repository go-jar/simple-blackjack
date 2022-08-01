
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYWNoaWV2ZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMseURBQW9EO0FBRXBELDREQUEyRDtBQUczRDtJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXNEQztRQXBEc0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUNwQixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFcEMsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFDL0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFDM0Isb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFFakMscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFFL0MsWUFBTSxHQUFXLElBQUksQ0FBQzs7SUEyQ2xDLENBQUM7SUF6Q0csd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVFLCtCQUErQjtRQUMvQixrREFBa0Q7UUFDbEQsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXZCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksaUNBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9ELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDWDtZQUNELENBQUMsSUFBSSxFQUFFLENBQUM7U0FDWDtJQUNMLENBQUM7SUFFTywrQkFBWSxHQUFwQixVQUFxQixJQUFxQjtRQUN0QyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RCxJQUFJLE1BQU0sR0FBc0IsVUFBVSxDQUFDLFlBQVksQ0FBQywyQkFBaUIsQ0FBQyxDQUFDO1FBQzNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVPLGtDQUFlLEdBQXZCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsRCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8sNEJBQVMsR0FBakIsVUFBa0IsS0FBYSxFQUFFLEtBQWE7UUFDMUMsSUFBSSxPQUFPLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUE7UUFFOUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQU0sT0FBTyxNQUFHLENBQUE7UUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBRyxLQUFPLENBQUE7UUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxHQUFHLEtBQUssQ0FBQTtJQUNuRCxDQUFDO0lBbkRrQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FBMEI7SUFDcEI7UUFBdkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQWlDO0lBRXBDO1FBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUFnQztJQUMvQjtRQUFuQixRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFBNkI7SUFDM0I7UUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQWtDO0lBRWpDO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUFtQztJQVR0QyxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBc0Q1QjtJQUFELGVBQUM7Q0F0REQsQUFzREMsQ0F0RHFDLEVBQUUsQ0FBQyxTQUFTLEdBc0RqRDtrQkF0RG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgQWNoaWV2ZW1lbnRJdGVtVUkgZnJvbSAnLi9hY2hpZXZlbWVudEl0ZW1VSSc7XG5pbXBvcnQgQ2xpZW50IGZyb20gJy4vY2xpZW50J1xuaW1wb3J0IHsgQWNoaWV2ZW1lbnRJdGVtIH0gZnJvbSAnLi9lbnRpdHkvYWNoaWV2ZW1lbnRJdGVtJztcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBjbG9zZUJ0bjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcCkgY2xpY2tNdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgcHJvZ3Jlc3NMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgY291bnRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpIHByb2dyZXNzU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgYWNoaWV2ZW1lbnRJdGVtOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBjbGllbnQ6IENsaWVudCA9IG51bGw7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VCdG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25DbG9zZUJ0bkNsaWNrLCB0aGlzKTtcbiAgICAgICAgLy8gY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCgpO1xuICAgICAgICAvLyBjb25zdCBzY29yZVJlcyA9IGF3YWl0IGNsaWVudC5nZXRTY29yZSgndXNlcicpO1xuICAgICAgICAvLyB0aGlzLmluaXQoc2NvcmVSZXMuc3VjY2Vzcywgc2NvcmVSZXMudG90YWwpO1xuICAgICAgICB0aGlzLmluaXRTY29yZSgxMCwgMzApO1xuXG4gICAgICAgIGxldCB0b3RhbCA9IDIwO1xuICAgICAgICB2YXIgeSA9IC0xMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbCAvIDc7ICsraSkge1xuICAgICAgICAgICAgdmFyIHggPSAtMjQwO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbVVJID0gdGhpcy5jcmVhdGVJdGVtVUkobmV3IEFjaGlldmVtZW50SXRlbShpICogNyArIGopKTtcbiAgICAgICAgICAgICAgICBpdGVtVUkubm9kZS54ID0geDtcbiAgICAgICAgICAgICAgICBpdGVtVUkubm9kZS55ID0geTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoaXRlbVVJLm5vZGUpO1xuICAgICAgICAgICAgICAgIHggKz0gODA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5IC09IDg1O1xuICAgICAgICB9XG4gICAgfVxueFxuICAgIHByaXZhdGUgY3JlYXRlSXRlbVVJKGl0ZW06IEFjaGlldmVtZW50SXRlbSk6IEFjaGlldmVtZW50SXRlbVVJIHtcbiAgICAgICAgbGV0IGl0ZW1VaU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmFjaGlldmVtZW50SXRlbSk7XG4gICAgICAgIGxldCBpdGVtVUk6IEFjaGlldmVtZW50SXRlbVVJID0gaXRlbVVpTm9kZS5nZXRDb21wb25lbnQoQWNoaWV2ZW1lbnRJdGVtVUkpO1xuICAgICAgICBpdGVtVUkuaW5pdChpdGVtKTtcbiAgICAgICAgcmV0dXJuIGl0ZW1VSTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xvc2VCdG5DbGljaygpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNsaWNrTXVzaWMsIGZhbHNlKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtZW51Jyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0U2NvcmUoY291bnQ6IG51bWJlciwgdG90YWw6IG51bWJlcikge1xuICAgICAgICBsZXQgcGVyY2VudCA9IHRvdGFsID09IDAgPyAwIDogTWF0aC5mbG9vcihjb3VudCAqIDEwMCAvIHRvdGFsKVxuXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NMYWJlbC5zdHJpbmcgPSBgJHtwZXJjZW50fSVgXG4gICAgICAgIHRoaXMuY291bnRMYWJlbC5zdHJpbmcgPSBgJHtjb3VudH1gXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NTcHJpdGUuZmlsbFJhbmdlID0gcGVyY2VudCAvIDEwMC4wXG4gICAgfVxufVxuIl19