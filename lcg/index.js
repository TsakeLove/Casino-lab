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
var play_1 = require("./play");
var crack_1 = require("./crack");
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var myCasino, reg, arrayOfCasinoNumbers, _a, state, crack, total, lastResponse, nextVal;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                myCasino = new play_1.CasinoRoyale();
                return [4 /*yield*/, myCasino.registerUser("I want to win2")];
            case 1:
                reg = _b.sent();
                console.log(reg);
                return [4 /*yield*/, myCasino.makeBet("Lcg", 1, 1)];
            case 2:
                _a = [
                    (_b.sent())
                ];
                return [4 /*yield*/, myCasino.makeBet("Lcg", 1, 1)];
            case 3:
                _a = _a.concat([
                    (_b.sent())
                ]);
                return [4 /*yield*/, myCasino.makeBet("Lcg", 1, 1)];
            case 4:
                _a = _a.concat([
                    (_b.sent())
                ]);
                return [4 /*yield*/, myCasino.makeBet("Lcg", 1, 1)];
            case 5:
                _a = _a.concat([
                    (_b.sent())
                ]);
                return [4 /*yield*/, myCasino.makeBet("Lcg", 1, 1)];
            case 6:
                _a = _a.concat([
                    (_b.sent())
                ]);
                return [4 /*yield*/, myCasino.makeBet("Lcg", 1, 1)];
            case 7:
                arrayOfCasinoNumbers = _a.concat([
                    (_b.sent())
                ]);
                state = arrayOfCasinoNumbers.map(function (number) {
                    if (number instanceof Error) {
                        throw new Error();
                    }
                    else {
                        return BigInt(number.realNumber);
                    }
                });
                crack = new crack_1.CrackLCG(state, BigInt(Math.pow(2, 32)));
                crack.calcAandC();
                console.log("Multi:, Inc:", crack.getConstants());
                total = 0;
                lastResponse = arrayOfCasinoNumbers[2];
                _b.label = 8;
            case 8:
                if (!(total <= 1000000)) return [3 /*break*/, 10];
                nextVal = crack.getNextValue();
                return [4 /*yield*/, myCasino.makeBet("Lcg", 900, Number(nextVal) | 0)];
            case 9:
                lastResponse = _b.sent();
                if (!(lastResponse instanceof Error)) {
                    total = lastResponse.account.money;
                }
                return [3 /*break*/, 8];
            case 10:
                console.log("Total:", total);
                console.log(JSON.stringify(lastResponse.message));
                return [2 /*return*/];
        }
    });
}); })();
