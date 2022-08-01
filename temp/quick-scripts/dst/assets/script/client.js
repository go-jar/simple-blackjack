
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
var json_rpc_2_0_1 = require("json-rpc-2.0");
var URL = 'http://aaa';
var Client = /** @class */ (function () {
    function Client() {
        var _this = this;
        this.client = new json_rpc_2_0_1.JSONRPCClient(function (jsonRPCRequest) {
            return fetch(URL, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(jsonRPCRequest),
            }).then(function (response) {
                if (response.status === 200) {
                    // Use client.receive when you received a JSON-RPC response.
                    return response.json().then(function (jsonRPCResponse) { return _this.client.receive(jsonRPCResponse); });
                }
                else if (jsonRPCRequest.id !== undefined) {
                    return Promise.reject(new Error(response.statusText));
                }
                else {
                    return Promise.reject(new Error('request id undefined'));
                }
            });
        });
    }
    Client.prototype.getScore = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var param;
            return __generator(this, function (_a) {
                param = { userId: userId };
                return [2 /*return*/, this.client.request('getScore', param)];
            });
        });
    };
    return Client;
}());
exports.default = Client;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTZEO0FBQzdELElBQU0sR0FBRyxHQUFHLFlBQVksQ0FBQztBQUV6QjtJQUdJO1FBQUEsaUJBbUJDO1FBbEJHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSw0QkFBYSxDQUFDLFVBQUMsY0FBOEI7WUFDM0QsT0FBQSxLQUFLLENBQUMsR0FBRyxFQUFFO2dCQUNQLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRTtvQkFDTCxjQUFjLEVBQUUsa0JBQWtCO2lCQUNyQztnQkFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7YUFDdkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7Z0JBQ2IsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtvQkFDekIsNERBQTREO29CQUM1RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxlQUFlLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBcEMsQ0FBb0MsQ0FBQyxDQUFDO2lCQUMxRjtxQkFBTSxJQUFJLGNBQWMsQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFO29CQUN4QyxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7aUJBQ3pEO3FCQUFNO29CQUNILE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7aUJBQzVEO1lBQ0wsQ0FBQyxDQUFDO1FBZkYsQ0FlRSxDQUNMLENBQUM7SUFDTixDQUFDO0lBRVkseUJBQVEsR0FBckIsVUFBc0IsTUFBYzs7OztnQkFDNUIsS0FBSyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUMvQixzQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUM7OztLQUNqRDtJQUNMLGFBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSlNPTlJQQ0NsaWVudCwgSlNPTlJQQ1JlcXVlc3QgfSBmcm9tIFwianNvbi1ycGMtMi4wXCI7XG5jb25zdCBVUkwgPSAnaHR0cDovL2FhYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudCB7XG4gICAgY2xpZW50OiBKU09OUlBDQ2xpZW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2xpZW50ID0gbmV3IEpTT05SUENDbGllbnQoKGpzb25SUENSZXF1ZXN0OiBKU09OUlBDUmVxdWVzdCkgPT5cbiAgICAgICAgICAgIGZldGNoKFVSTCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGpzb25SUENSZXF1ZXN0KSxcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSBjbGllbnQucmVjZWl2ZSB3aGVuIHlvdSByZWNlaXZlZCBhIEpTT04tUlBDIHJlc3BvbnNlLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oKGpzb25SUENSZXNwb25zZSkgPT4gdGhpcy5jbGllbnQucmVjZWl2ZShqc29uUlBDUmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGpzb25SUENSZXF1ZXN0LmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcigncmVxdWVzdCBpZCB1bmRlZmluZWQnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldFNjb3JlKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBwYXJhbSA9IHsgdXNlcklkOiB1c2VySWQgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3QoJ2dldFNjb3JlJywgcGFyYW0pO1xuICAgIH1cbn1cbiJdfQ==