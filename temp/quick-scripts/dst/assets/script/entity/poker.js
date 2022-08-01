
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/entity/poker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03aedWfAz5BiKZennPDsaMt', 'poker');
// script/entity/poker.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokerStatus = exports.Poker = void 0;
var Poker = /** @class */ (function () {
    function Poker(point, status) {
        this.point = -1;
        this.status = PokerStatus.CLOSE;
        this.point = point;
        this.status = status;
    }
    return Poker;
}());
exports.Poker = Poker;
;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZW50aXR5L3Bva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBSUksZUFBWSxLQUFhLEVBQUUsTUFBbUI7UUFIdkMsVUFBSyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ25CLFdBQU0sR0FBZ0IsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUczQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBQ0wsWUFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksc0JBQUs7QUFRakIsQ0FBQztBQUVGLElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNuQiwrQ0FBUyxDQUFBO0lBQ1QsNkNBQVEsQ0FBQTtBQUNaLENBQUMsRUFIVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUd0QjtBQUFBLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUG9rZXIge1xuICAgIHB1YmxpYyBwb2ludDogbnVtYmVyID0gLTE7XG4gICAgcHVibGljIHN0YXR1czogUG9rZXJTdGF0dXMgPSBQb2tlclN0YXR1cy5DTE9TRTtcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50OiBudW1iZXIsIHN0YXR1czogUG9rZXJTdGF0dXMpIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB9XG59O1xuXG5leHBvcnQgZW51bSBQb2tlclN0YXR1cyB7XG4gICAgQ0xPU0UgPSAwLFxuICAgIE9QRU4gPSAxLFxufTtcbiJdfQ==