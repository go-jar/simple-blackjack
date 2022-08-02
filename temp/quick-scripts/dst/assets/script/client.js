
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/client.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQXlCO0FBeUJ6QjtJQUtJLGdCQUFZLEdBQVcsRUFBRSxPQUFlLEVBQUUsT0FBZTtRQUNyRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFYSx3QkFBTyxHQUFyQixVQUFzQixNQUFjLEVBQUUsS0FBVTt1Q0FBRyxPQUFPOzs7NEJBQy9DLHFCQUFNLGVBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTs0QkFDOUIsT0FBTyxFQUFFLEtBQUs7NEJBQ2QsTUFBTSxRQUFBOzRCQUNOLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQzs0QkFDZixFQUFFLEVBQUUsQ0FBQzt5QkFDUixFQUFFOzRCQUNDLE9BQU8sRUFBRTtnQ0FDTCxjQUFjLEVBQUUsaUNBQWlDOzZCQUNwRDt5QkFDSixDQUFDLEVBQUE7NEJBVEYsc0JBQU8sU0FTTCxFQUFDOzs7O0tBQ047SUFFYSxpQ0FBZ0IsR0FBOUIsVUFBK0IsU0FBaUI7dUNBQUcsT0FBTzs7Ozs0QkFDdkMscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRTs0QkFDckQsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPOzRCQUNwQixhQUFhLEVBQUUsU0FBUzs0QkFDeEIsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPO3lCQUM1QixDQUFDLEVBQUE7O3dCQUpFLFFBQVEsR0FBRyxTQUliO3dCQUNGLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7NEJBQ3hCLE1BQU0sa0JBQWtCLENBQUM7eUJBQzVCO3dCQUNELHNCQUFPLFFBQVEs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b3MgZnJvbSAnYXhpb3MnXG5cbmludGVyZmFjZSBXaW5Mb3NlQ291bnQge1xuICAgIHdpbl9jb3VudDogbnVtYmVyLFxuICAgIGxvc2VfY291bnQ6IG51bWJlcixcbn1cblxuaW50ZXJmYWNlIFRyYW5zYWN0aW9uSGFzaCB7XG4gICAgZGlnZXN0OiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIE91dHBvaW50IHtcbiAgICB0eF9oYXNoOiBzdHJpbmcsXG4gICAgaW5kZXg6IG51bWJlcixcbn1cblxuaW50ZXJmYWNlIE5GVCB7XG4gICAgbmZ0czogQXJyYXk8bnVtYmVyPixcbiAgICBvdXRwb2ludDogT3V0cG9pbnQsIC8vIOi/meS4quS4jeeUqOS9v+eUqFxufVxuXG5pbnRlcmZhY2UgTkZUcyB7XG4gICAgZGF0YTogQXJyYXk8TkZUPlxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnQge1xuICAgIHVybDogc3RyaW5nO1xuICAgIHByaXZrZXk6IHN0cmluZztcbiAgICBhZGRyZXNzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZywgcHJpdmtleTogc3RyaW5nLCBhZGRyZXNzOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMucHJpdmtleSA9IHByaXZrZXk7XG4gICAgICAgIHRoaXMuYWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyByZXF1ZXN0KG1ldGhvZDogc3RyaW5nLCBwYXJhbTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IEF4aW9zLnBvc3QodGhpcy51cmwsIHtcbiAgICAgICAgICAgIGpzb25ycGM6IFwiMi4wXCIsIFxuICAgICAgICAgICAgbWV0aG9kLCBcbiAgICAgICAgICAgIHBhcmFtczogW3BhcmFtXSxcbiAgICAgICAgICAgIGlkOiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc2VuZF90cmFuc2FjdGlvbihjYWxsX2Z1bmM6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMucmVxdWVzdCgnbWFrZV9yZXF1ZXN0X2RpZ2VzdCcsIHtcbiAgICAgICAgICAgIHNlbmRlcjogdGhpcy5hZGRyZXNzLFxuICAgICAgICAgICAgY29udHJhY3RfY2FsbDogY2FsbF9mdW5jLFxuICAgICAgICAgICAgcHJpdmF0ZV9rZXk6IHRoaXMucHJpdmtleVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApIHtcbiAgICAgICAgICAgIHRocm93ICdiYWQganNvbnJwYyBjYWxsJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5yZXN1bHQuZGlnZXN0O1xuICAgIH1cblxuICAgIC8vIGNhbGwgd2hpbGUgYGNsYWltYCBidXR0b24gY2xpY2tlZCBpbiBhY2hpdmVtZW50IHBhZ2VcbiAgICBwcml2YXRlIGFzeW5jIGNsYWltX25mdHMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgbGV0IGdsb2JhbCA9IGF3YWl0IHRoaXMuZmV0Y2hfZ2xvYmFsKCk7XG4gICAgICAgIGlmIChnbG9iYWwubmZ0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kX3RyYW5zYWN0aW9uKCdjbGFpbV9uZnRzKCknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnbm90aGluZyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjYWxsIHRvIGNoZWNrIGJ1dHRvbiBzdGF0dXMgb2YgYGNsYWltYFxuICAgIHByaXZhdGUgYXN5bmMgZmV0Y2hfZ2xvYmFsKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMucmVxdWVzdCgnZmV0Y2hfZ2xvYmFsX2RhdGEnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiB0aGlzLmFkZHJlc3MsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkge1xuICAgICAgICAgICAgdGhyb3cgJ2JhZCBqc29ucnBjIGNhbGwnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlc3BvbnNlLmRhdGEucmVzdWx0LmRhdGEpO1xuICAgIH1cblxuICAgIC8vIGNhbGwgd2hlbiB3aW4gdGhlIGJhdHRsZVxuICAgIHB1YmxpYyBhc3luYyBiYXR0bGVfd2luKCk6IFByb21pc2U8VHJhbnNhY3Rpb25IYXNoPiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRfdHJhbnNhY3Rpb24oJ2JhdHRsZV93aW4oKScpO1xuICAgIH1cblxuICAgIC8vIGNhbGwgd2hlbiBsb3NlIHRoZSBiYXR0bGVcbiAgICBwdWJsaWMgYXN5bmMgYmF0dGxlX2xvc2UoKTogUHJvbWlzZTxUcmFuc2FjdGlvbkhhc2g+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZF90cmFuc2FjdGlvbignYmF0dGxlX2xvc2UoKScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRfd2luX2xvc2VfY291bnQoKTogUHJvbWlzZTxXaW5Mb3NlQ291bnQ+IHtcbiAgICAgICAgbGV0IGdsb2JhbCA9IGF3YWl0IHRoaXMuZmV0Y2hfZ2xvYmFsKCk7XG4gICAgICAgIGxldCByZXN1bHQgPSB7IHdpbl9jb3VudDogMCwgbG9zZV9jb3VudDogMCB9O1xuICAgICAgICBmb3IgKGxldCB2IG9mIGdsb2JhbC5uZnRzKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgd2luX2NvdW50OiB2Lndpbl9jb3VudCxcbiAgICAgICAgICAgICAgICBsb3NlX2NvdW50OiB2Lmxvc2VfY291bnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBjYWxsIHRvIGZldGNoIG5mdHMgb3duZWQgYnkgcGxheWVyXG4gICAgcHVibGljIGFzeW5jIGZldGNoX25mdHMoKTogUHJvbWlzZTxORlRzPiB7XG4gICAgICAgIGxldCBoYXNoID0gYXdhaXQgdGhpcy5jbGFpbV9uZnRzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGFpbV9uZnRzIGhhc2ggPScsIGhhc2gpO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2ZldGNoX3BlcnNvbmFsX2RhdGEnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiB0aGlzLmFkZHJlc3MsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkge1xuICAgICAgICAgICAgdGhyb3cgJ2JhZCBqc29ucnBjIGNhbGwnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlc3BvbnNlLmRhdGEucmVzdWx0LmRhdGEpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBGT1IgRVhBTVBMRVNcbiAqIFxuICogIGxldCBjbGllbnQgPSBuZXcgQ2xpZW50KFxuICogICAgICAnaHR0cDovLzEyNy4wLjAuMTo4MDkwJyxcbiAqICAgICAgJzhkOTI5ZTk2MmY5NDBmNzVhYTMyMDU0ZjE5YTVlYTJjZTcwYWUzMGJmZTRmZjdjZjJkYmVkNzBkNTU2MjY1ZGYnLFxuICogICAgICAnY2t0MXF5cTkzd3p1cjloOWw2cXd5azZkNGR2a3V1ZnA2Z3ZsMDhhc3p6NXN5bCdcbiAqICApO1xuICogIGxldCB0eF9oYXNoID0gYXdhaXQgY2xpZW50LmJhdHRsZV93aW4oKTtcbiAqL1xuIl19