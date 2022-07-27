
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