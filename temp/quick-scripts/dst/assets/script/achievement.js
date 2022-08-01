
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.progressLabel = null;
        _this.countLabel = null;
        _this.progressSprite = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.closeBtn.on(cc.Node.EventType.TOUCH_START, this.onCloseBtnClick, this);
                // const client = new Client();
                // const scoreRes = await client.getScore('user');
                // this.init(scoreRes.success, scoreRes.total);
                this.init(10, 30);
                return [2 /*return*/];
            });
        });
    };
    NewClass.prototype.onCloseBtnClick = function () {
        cc.director.loadScene('menu');
    };
    NewClass.prototype.init = function (count, total) {
        var percent = total == 0 ? 0 : Math.floor(count * 100 / total);
        this.progressLabel.string = percent + "%";
        this.countLabel.string = "" + count;
        this.progressSprite.fillRange = percent / 100.0;
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "closeBtn", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "progressLabel", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "countLabel", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "progressSprite", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYWNoaWV2ZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFJMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE0QkM7UUExQnNCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFeEIsbUJBQWEsR0FBYSxJQUFJLENBQUE7UUFDOUIsZ0JBQVUsR0FBYSxJQUFJLENBQUE7UUFDMUIsb0JBQWMsR0FBYyxJQUFJLENBQUE7O0lBc0J6RCxDQUFDO0lBcEJTLHdCQUFLLEdBQVg7OztnQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFNUUsK0JBQStCO2dCQUMvQixrREFBa0Q7Z0JBQ2xELCtDQUErQztnQkFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Ozs7S0FDckI7SUFFTyxrQ0FBZSxHQUF2QjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTyx1QkFBSSxHQUFaLFVBQWEsS0FBYSxFQUFFLEtBQWE7UUFDckMsSUFBSSxPQUFPLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUE7UUFFOUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQU0sT0FBTyxNQUFHLENBQUE7UUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBRyxLQUFPLENBQUE7UUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxHQUFHLEtBQUssQ0FBQTtJQUNuRCxDQUFDO0lBekJrQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FBMEI7SUFFeEI7UUFBbkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQStCO0lBQzlCO1FBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUE0QjtJQUMxQjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFBaUM7SUFOcEMsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTRCNUI7SUFBRCxlQUFDO0NBNUJELEFBNEJDLENBNUJxQyxFQUFFLENBQUMsU0FBUyxHQTRCakQ7a0JBNUJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IENsaWVudCBmcm9tICcuL2NsaWVudCdcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBjbG9zZUJ0bjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIHByb2dyZXNzTGFiZWw6IGNjLkxhYmVsID0gbnVsbCBcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIGNvdW50TGFiZWw6IGNjLkxhYmVsID0gbnVsbCBcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKSBwcm9ncmVzc1Nwcml0ZTogY2MuU3ByaXRlID0gbnVsbFxuXG4gICAgYXN5bmMgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmNsb3NlQnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uQ2xvc2VCdG5DbGljaywgdGhpcyk7XG5cbiAgICAgICAgLy8gY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCgpO1xuICAgICAgICAvLyBjb25zdCBzY29yZVJlcyA9IGF3YWl0IGNsaWVudC5nZXRTY29yZSgndXNlcicpO1xuICAgICAgICAvLyB0aGlzLmluaXQoc2NvcmVSZXMuc3VjY2Vzcywgc2NvcmVSZXMudG90YWwpO1xuICAgICAgICB0aGlzLmluaXQoMTAsIDMwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xvc2VCdG5DbGljaygpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtZW51Jyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KGNvdW50OiBudW1iZXIsIHRvdGFsOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHBlcmNlbnQgPSB0b3RhbCA9PSAwID8gMCA6IE1hdGguZmxvb3IoY291bnQgKiAxMDAgLyB0b3RhbClcblxuICAgICAgICB0aGlzLnByb2dyZXNzTGFiZWwuc3RyaW5nID0gYCR7cGVyY2VudH0lYFxuICAgICAgICB0aGlzLmNvdW50TGFiZWwuc3RyaW5nID0gYCR7Y291bnR9YFxuICAgICAgICB0aGlzLnByb2dyZXNzU3ByaXRlLmZpbGxSYW5nZSA9IHBlcmNlbnQgLyAxMDAuMFxuICAgIH1cbn1cbiJdfQ==