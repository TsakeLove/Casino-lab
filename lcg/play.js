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
exports.__esModule = true;
exports.CasinoRoyale = void 0;
var fetch = require("node-fetch");
var CasinoRoyale = /** @class */ (function () {
    function CasinoRoyale() {
        this.host = "http://95.217.177.249/casino/";
        this.id = "";
    }
    CasinoRoyale.prototype.registerUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.id = id;
                        return [4 /*yield*/, this.sendRequest("".concat(this.host, "createacc?id=").concat(id))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CasinoRoyale.prototype.makeBet = function (gameMode, bet, number) {
        if (bet === void 0) { bet = 1; }
        if (number === void 0) { number = 0; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendRequest("".concat(this.host, "play").concat(gameMode, "?id=").concat(this.id, "&bet=").concat(bet, "&number=").concat(number))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CasinoRoyale.prototype.play = function (gameMode, betAmount, betNumber) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendRequest("".concat(this.host, "play").concat(gameMode, "?id=").concat(this.id, "&bet=").concat(betAmount, "&number=").concat(betNumber))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CasinoRoyale.prototype.sendRequest = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(url)];
                    case 1: return [4 /*yield*/, (_a.sent()).json()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_1 = _a.sent();
                        //<eat error>
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return CasinoRoyale;
}());
exports.CasinoRoyale = CasinoRoyale;
// const fetch = require("node-fetch");
//
// export interface userRegisteredResponse {
//     id: string;
//     money: number;
//     deletionTime: string;
// }
// export interface Account {
//     id: string;
//     money: number;
//     deletionTime: Date;
// }
// export interface BetResponse {
//     message: string;
//     account: Account;
//     realNumber: number;
// }
// export class CasinoRoyale {
//     private host = "http://95.217.177.249/casino/";
//     private id = "";
//     public async registerUser(id: string) {
//         const res = await this.makeRequest<userRegisteredResponse>(
//             `${this.host}createacc?id=${id}`
//         );
//         this.id = id;
//         return res;
//     }
//
//     public async makeBet(
//         gameMode: "LCG" | "MT" | "BetterMT",
//         bet = 1,
//         number = 0
//     ) {
//         switch (gameMode) {
//             case "LCG":
//                 return await this.makeRequest<BetResponse>(
//                     `${this.host}playLcg?id=${this.id}&bet=${bet}&number=${number}`
//                 );
//             case "MT":
//                 return await this.makeRequest<BetResponse>(
//                     `${this.host}playMt?id=${this.id}&bet=${bet}&number=${number}`
//                 );
//             case "BetterMT":
//                 return await this.makeRequest<BetResponse>(
//                     `${this.host}playBetterMt?id=${this.id}&bet=${bet}&number=${number}`
//                 );
//             default:
//                 return new Error("sorry buddy(");
//         }
//     }
//
//     private async makeRequest<RType>(url: string): Promise<RType | Error> {
//         try {
//             const res = await fetch(url);
//             const json = await res.json();
//             return json as RType;
//         } catch (error: any) {
//             console.log(error);
//             return await Promise.resolve(error as Error);
//         }
//     }
// }
