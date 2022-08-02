
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
                            private_key: this.privkey,
                            payment: String(20)
                        })];
                    case 1:
                        response = _a.sent();
                        console.log(response);
                        if (response.status != 200) {
                            throw 'bad jsonrpc call';
                        }
                        return [2 /*return*/, response.data.result];
                }
            });
        });
    };
    // call while `claim` button clicked in achivement page
    Client.prototype.claim_nfts = function () {
        return __awaiter(this, void 0, Promise, function () {
            var global, claimable, _i, _a, lock_hash, v;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.fetch_global()];
                    case 1:
                        global = _b.sent();
                        claimable = false;
                        for (_i = 0, _a = Object.keys(global.users); _i < _a.length; _i++) {
                            lock_hash = _a[_i];
                            v = global.users[lock_hash];
                            claimable = v.nfts.length > 0;
                        }
                        if (!claimable) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.send_transaction('claim_nfts()')];
                    case 2: return [2 /*return*/, _b.sent()];
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
                        console.log(response);
                        if (response.status != 200) {
                            throw 'bad jsonrpc call';
                        }
                        return [2 /*return*/, JSON.parse(response.data.result)];
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
    Client.prototype.get_achievement = function () {
        return __awaiter(this, void 0, Promise, function () {
            var global, result, _i, _a, lock_hash;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.fetch_global()];
                    case 1:
                        global = _b.sent();
                        console.log('global =', global);
                        result = { win_count: 0, lose_count: 0, nfts: [] };
                        for (_i = 0, _a = Object.keys(global.users); _i < _a.length; _i++) {
                            lock_hash = _a[_i];
                            result = global.users[lock_hash];
                        }
                        return [2 /*return*/, result];
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
 *      '0x8d929e962f940f75aa32054f19a5ea2ce70ae30bfe4ff7cf2dbed70d556265df',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQXlCO0FBUXpCO0lBS0ksZ0JBQVksR0FBVyxFQUFFLE9BQWUsRUFBRSxPQUFlO1FBQ3JELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVhLHdCQUFPLEdBQXJCLFVBQXNCLE1BQWMsRUFBRSxLQUFVO3VDQUFHLE9BQU87Ozs0QkFDL0MscUJBQU0sZUFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFOzRCQUM5QixPQUFPLEVBQUUsS0FBSzs0QkFDZCxNQUFNLFFBQUE7NEJBQ04sTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDOzRCQUNmLEVBQUUsRUFBRSxDQUFDO3lCQUNSLEVBQUU7NEJBQ0MsT0FBTyxFQUFFO2dDQUNMLGNBQWMsRUFBRSxpQ0FBaUM7NkJBQ3BEO3lCQUNKLENBQUMsRUFBQTs0QkFURixzQkFBTyxTQVNMLEVBQUM7Ozs7S0FDTjtJQUVhLGlDQUFnQixHQUE5QixVQUErQixTQUFpQjt1Q0FBRyxPQUFPOzs7OzRCQUN2QyxxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFOzRCQUNyRCxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU87NEJBQ3BCLGFBQWEsRUFBRSxTQUFTOzRCQUN4QixXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU87NEJBQ3pCLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDO3lCQUN0QixDQUFDLEVBQUE7O3dCQUxFLFFBQVEsR0FBRyxTQUtiO3dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3RCLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7NEJBQ3hCLE1BQU0sa0JBQWtCLENBQUM7eUJBQzVCO3dCQUNELHNCQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDOzs7O0tBQy9CO0lBRUQsdURBQXVEO0lBQ3pDLDJCQUFVLEdBQXhCO3VDQUE0QixPQUFPOzs7OzRCQUNsQixxQkFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUE7O3dCQUFsQyxNQUFNLEdBQUcsU0FBeUI7d0JBQ2xDLFNBQVMsR0FBRyxLQUFLLENBQUM7d0JBQ3RCLFdBQStDLEVBQXpCLEtBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQXpCLGNBQXlCLEVBQXpCLElBQXlCLEVBQUU7NEJBQXhDLFNBQVM7NEJBQ1YsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7NEJBQ2hDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7eUJBQ2pDOzZCQUNHLFNBQVMsRUFBVCx3QkFBUzt3QkFDRixxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLEVBQUE7NEJBQWxELHNCQUFPLFNBQTJDLEVBQUM7NEJBRW5ELHNCQUFPLFNBQVMsRUFBQzs7OztLQUV4QjtJQUVELHlDQUF5QztJQUMzQiw2QkFBWSxHQUExQjt1Q0FBOEIsT0FBTzs7Ozs0QkFDbEIscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRTs0QkFDbkQsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO3lCQUN4QixDQUFDLEVBQUE7O3dCQUZFLFFBQVEsR0FBRyxTQUViO3dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3RCLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7NEJBQ3hCLE1BQU0sa0JBQWtCLENBQUM7eUJBQzVCO3dCQUNELHNCQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQzs7OztLQUMzQztJQUVELDJCQUEyQjtJQUNkLDJCQUFVLEdBQXZCO3VDQUEyQixPQUFPOzs7NEJBQ3ZCLHFCQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsRUFBQTs0QkFBbEQsc0JBQU8sU0FBMkMsRUFBQzs7OztLQUN0RDtJQUVELDRCQUE0QjtJQUNmLDRCQUFXLEdBQXhCO3VDQUE0QixPQUFPOzs7NEJBQ3hCLHFCQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsRUFBQTs0QkFBbkQsc0JBQU8sU0FBNEMsRUFBQzs7OztLQUN2RDtJQUVZLGdDQUFlLEdBQTVCO3VDQUFnQyxPQUFPOzs7OzRCQUN0QixxQkFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUE7O3dCQUFsQyxNQUFNLEdBQUcsU0FBeUI7d0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3dCQUM1QixNQUFNLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO3dCQUN2RCxXQUErQyxFQUF6QixLQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUF6QixjQUF5QixFQUF6QixJQUF5QixFQUFFOzRCQUF4QyxTQUFTOzRCQUNkLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3lCQUNwQzt3QkFDRCxzQkFBTyxNQUFNLEVBQUM7Ozs7S0FDakI7SUFhTCxhQUFDO0FBQUQsQ0FoR0EsQUFnR0MsSUFBQTs7QUFFRDs7Ozs7Ozs7O0dBU0ciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnXG5cbmludGVyZmFjZSBBY2hpZXZlbWVudCB7XG4gICAgd2luX2NvdW50OiBudW1iZXIsXG4gICAgbG9zZV9jb3VudDogbnVtYmVyLFxuICAgIG5mdHM6IEFycmF5PG51bWJlcj4sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudCB7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgcHJpdmtleTogc3RyaW5nO1xuICAgIGFkZHJlc3M6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nLCBwcml2a2V5OiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZykge1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5wcml2a2V5ID0gcHJpdmtleTtcbiAgICAgICAgdGhpcy5hZGRyZXNzID0gYWRkcmVzcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHJlcXVlc3QobWV0aG9kOiBzdHJpbmcsIHBhcmFtOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgQXhpb3MucG9zdCh0aGlzLnVybCwge1xuICAgICAgICAgICAganNvbnJwYzogXCIyLjBcIiwgXG4gICAgICAgICAgICBtZXRob2QsIFxuICAgICAgICAgICAgcGFyYW1zOiBbcGFyYW1dLFxuICAgICAgICAgICAgaWQ6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzZW5kX3RyYW5zYWN0aW9uKGNhbGxfZnVuYzogc3RyaW5nKTogUHJvbWlzZTxTdHJpbmc+IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdtYWtlX3JlcXVlc3RfZGlnZXN0Jywge1xuICAgICAgICAgICAgc2VuZGVyOiB0aGlzLmFkZHJlc3MsXG4gICAgICAgICAgICBjb250cmFjdF9jYWxsOiBjYWxsX2Z1bmMsXG4gICAgICAgICAgICBwcml2YXRlX2tleTogdGhpcy5wcml2a2V5LFxuICAgICAgICAgICAgcGF5bWVudDogU3RyaW5nKDIwKVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkge1xuICAgICAgICAgICAgdGhyb3cgJ2JhZCBqc29ucnBjIGNhbGwnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLnJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBjYWxsIHdoaWxlIGBjbGFpbWAgYnV0dG9uIGNsaWNrZWQgaW4gYWNoaXZlbWVudCBwYWdlXG4gICAgcHJpdmF0ZSBhc3luYyBjbGFpbV9uZnRzKCk6IFByb21pc2U8U3RyaW5nPiB7XG4gICAgICAgIGxldCBnbG9iYWwgPSBhd2FpdCB0aGlzLmZldGNoX2dsb2JhbCgpO1xuICAgICAgICBsZXQgY2xhaW1hYmxlID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGxvY2tfaGFzaCBvZiBPYmplY3Qua2V5cyhnbG9iYWwudXNlcnMpKSB7XG4gICAgICAgICAgICBsZXQgdiA9IGdsb2JhbC51c2Vyc1tsb2NrX2hhc2hdO1xuICAgICAgICAgICAgY2xhaW1hYmxlID0gdi5uZnRzLmxlbmd0aCA+IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsYWltYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZF90cmFuc2FjdGlvbignY2xhaW1fbmZ0cygpJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ25vdGhpbmcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2FsbCB0byBjaGVjayBidXR0b24gc3RhdHVzIG9mIGBjbGFpbWBcbiAgICBwcml2YXRlIGFzeW5jIGZldGNoX2dsb2JhbCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlcXVlc3QoJ2ZldGNoX2dsb2JhbF9kYXRhJywge1xuICAgICAgICAgICAgYWRkcmVzczogdGhpcy5hZGRyZXNzLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkge1xuICAgICAgICAgICAgdGhyb3cgJ2JhZCBqc29ucnBjIGNhbGwnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlc3BvbnNlLmRhdGEucmVzdWx0KTtcbiAgICB9XG5cbiAgICAvLyBjYWxsIHdoZW4gd2luIHRoZSBiYXR0bGVcbiAgICBwdWJsaWMgYXN5bmMgYmF0dGxlX3dpbigpOiBQcm9taXNlPFN0cmluZz4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kX3RyYW5zYWN0aW9uKCdiYXR0bGVfd2luKCknKTtcbiAgICB9XG5cbiAgICAvLyBjYWxsIHdoZW4gbG9zZSB0aGUgYmF0dGxlXG4gICAgcHVibGljIGFzeW5jIGJhdHRsZV9sb3NlKCk6IFByb21pc2U8U3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRfdHJhbnNhY3Rpb24oJ2JhdHRsZV9sb3NlKCknKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0X2FjaGlldmVtZW50KCk6IFByb21pc2U8QWNoaWV2ZW1lbnQ+IHtcbiAgICAgICAgbGV0IGdsb2JhbCA9IGF3YWl0IHRoaXMuZmV0Y2hfZ2xvYmFsKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWwgPScsIGdsb2JhbCk7XG4gICAgICAgIGxldCByZXN1bHQgPSB7IHdpbl9jb3VudDogMCwgbG9zZV9jb3VudDogMCwgbmZ0czogW10gfTtcbiAgICAgICAgZm9yIChsZXQgbG9ja19oYXNoIG9mIE9iamVjdC5rZXlzKGdsb2JhbC51c2VycykpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGdsb2JhbC51c2Vyc1tsb2NrX2hhc2hdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gY2FsbCB0byBmZXRjaCBuZnRzIG93bmVkIGJ5IHBsYXllclxuICAgIC8vIHB1YmxpYyBhc3luYyBmZXRjaF9uZnRzKCk6IFByb21pc2U8QXJyYXk8TkZUPj4ge1xuICAgIC8vICAgICBsZXQgaGFzaCA9IGF3YWl0IHRoaXMuY2xhaW1fbmZ0cygpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnY2xhaW1fbmZ0cyBoYXNoID0nLCBoYXNoKTtcbiAgICAvLyAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdmZXRjaF9wZXJzb25hbF9kYXRhJywgdGhpcy5hZGRyZXNzKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIC8vICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkge1xuICAgIC8vICAgICAgICAgdGhyb3cgJ2JhZCBqc29ucnBjIGNhbGwnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiByZXNwb25zZS5kYXRhLnJlc3VsdDtcbiAgICAvLyB9XG59XG5cbi8qKlxuICogRk9SIEVYQU1QTEVTXG4gKiBcbiAqICBsZXQgY2xpZW50ID0gbmV3IENsaWVudChcbiAqICAgICAgJ2h0dHA6Ly8xMjcuMC4wLjE6ODA5MCcsXG4gKiAgICAgICcweDhkOTI5ZTk2MmY5NDBmNzVhYTMyMDU0ZjE5YTVlYTJjZTcwYWUzMGJmZTRmZjdjZjJkYmVkNzBkNTU2MjY1ZGYnLFxuICogICAgICAnY2t0MXF5cTkzd3p1cjloOWw2cXd5azZkNGR2a3V1ZnA2Z3ZsMDhhc3p6NXN5bCdcbiAqICApO1xuICogIGxldCB0eF9oYXNoID0gYXdhaXQgY2xpZW50LmJhdHRsZV93aW4oKTtcbiAqL1xuIl19