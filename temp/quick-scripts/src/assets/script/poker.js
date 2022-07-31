"use strict";
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