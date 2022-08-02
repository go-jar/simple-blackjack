"use strict";
cc._RF.push(module, 'cc4d2PcxFRHJYHO3u2S4PAq', 'client');
// script/client.ts

"use strict";
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
var axios_1 = require("axios");
var Client = /** @class */ (function () {
    function Client(url, privkey, address) {
        this.url = url;
        this.privkey = privkey;
        this.address = address;
    }
    Client.prototype.request = function (method, param) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(this.url, {
                            jsonrpc: "2.0",
                            method: method,
                            params: [param],
                            id: 1
                        }, {
                            headers: {
                                'content-type': 'application/json; charset=utf-8'
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.send_transaction = function (call_func) {
        return __awaiter(this, void 0, Promise, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request('make_request_digest', {
                            sender: this.address,
                            contract_call: call_func,
                            private_key: this.privkey
                        })];
                    case 1:
                        response = _a.sent();
                        if (response.status != 200) {
                            throw 'bad jsonrpc call';
                        }
                        return [2 /*return*/, response.data.result.digest];
                }
            });
        });
    };
    // call while `claim` button clicked in achivement page
    Client.prototype.claim_nfts = function () {
        return __awaiter(this, void 0, Promise, function () {
            var global;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch_global()];
                    case 1:
                        global = _a.sent();
                        if (!(global.nfts.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.send_transaction('claim_nfts()')];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/, 'nothing'];
                }
            });
        });
    };
    // call to check button status of `claim`
    Client.prototype.fetch_global = function () {
        return __awaiter(this, void 0, Promise, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request('fetch_global_data', {
                            address: this.address,
                        })];
                    case 1:
                        response = _a.sent();
                        if (response.status != 200) {
                            throw 'bad jsonrpc call';
                        }
                        return [2 /*return*/, JSON.parse(response.data.result.data)];
                }
            });
        });
    };
    // call when win the battle
    Client.prototype.battle_win = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.send_transaction('battle_win()')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // call when lose the battle
    Client.prototype.battle_lose = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.send_transaction('battle_lose()')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.get_win_lose_count = function () {
        return __awaiter(this, void 0, Promise, function () {
            var global, result, _i, _a, v;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.fetch_global()];
                    case 1:
                        global = _b.sent();
                        result = { win_count: 0, lose_count: 0 };
                        for (_i = 0, _a = global.nfts; _i < _a.length; _i++) {
                            v = _a[_i];
                            result = {
                                win_count: v.win_count,
                                lose_count: v.lose_count
                            };
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    // call to fetch nfts owned by player
    Client.prototype.fetch_nfts = function () {
        return __awaiter(this, void 0, Promise, function () {
            var hash, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.claim_nfts()];
                    case 1:
                        hash = _a.sent();
                        console.log('claim_nfts hash =', hash);
                        return [4 /*yield*/, this.request('fetch_personal_data', {
                                address: this.address,
                            })];
                    case 2:
                        response = _a.sent();
                        if (response.status != 200) {
                            throw 'bad jsonrpc call';
                        }
                        return [2 /*return*/, JSON.parse(response.data.result.data)];
                }
            });
        });
    };
    return Client;
}());
exports.default = Client;
/**
 * FOR EXAMPLES
 *
 *  let client = new Client(
 *      'http://127.0.0.1:8090',
 *      '8d929e962f940f75aa32054f19a5ea2ce70ae30bfe4ff7cf2dbed70d556265df',
 *      'ckt1qyq93wzur9h9l6qwyk6d4dvkuufp6gvl08aszz5syl'
 *  );
 *  let tx_hash = await client.battle_win();
 */

cc._RF.pop();