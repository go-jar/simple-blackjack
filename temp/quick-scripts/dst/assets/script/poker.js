
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcG9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFJSSxlQUFZLEtBQWEsRUFBRSxNQUFtQjtRQUh2QyxVQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbkIsV0FBTSxHQUFnQixXQUFXLENBQUMsS0FBSyxDQUFDO1FBRzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSxzQkFBSztBQVFqQixDQUFDO0FBRUYsSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ25CLCtDQUFTLENBQUE7SUFDVCw2Q0FBUSxDQUFBO0FBQ1osQ0FBQyxFQUhXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBR3RCO0FBQUEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQb2tlciB7XG4gICAgcHVibGljIHBvaW50OiBudW1iZXIgPSAtMTtcbiAgICBwdWJsaWMgc3RhdHVzOiBQb2tlclN0YXR1cyA9IFBva2VyU3RhdHVzLkNMT1NFO1xuXG4gICAgY29uc3RydWN0b3IocG9pbnQ6IG51bWJlciwgc3RhdHVzOiBQb2tlclN0YXR1cykge1xuICAgICAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIH1cbn07XG5cbmV4cG9ydCBlbnVtIFBva2VyU3RhdHVzIHtcbiAgICBDTE9TRSA9IDAsXG4gICAgT1BFTiA9IDEsXG59O1xuIl19