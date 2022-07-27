"use strict";
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