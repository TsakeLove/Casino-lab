"use strict";
exports.__esModule = true;
exports.CrackLCG = void 0;
var CrackLCG = /** @class */ (function () {
    function CrackLCG(state, m) {
        this.a = BigInt(0);
        this.c = BigInt(0);
        this.state = state;
        this.m = m;
        this.last = state[state.length - 1];
    }
    CrackLCG.prototype.calcAandC = function () {
        this.a = this.crack_multiplier();
        this.c = this.crack_increment();
    };
    CrackLCG.prototype.getConstants = function () {
        return [this.a, this.c];
    };
    CrackLCG.prototype.crack_increment = function () {
        return (this.state[1] - this.state[0] * this.a) % this.m;
    };
    CrackLCG.prototype.crack_multiplier = function () {
        var tmp = this.modinv(Number(this.state[1] - this.state[0]), Number(this.m));
        var a = ((this.state[2] - this.state[1]) * tmp) % this.m;
        return a;
    };
    CrackLCG.prototype.getNextValue = function () {
        this.last = (this.a * this.last + this.c) % this.m; // m is 2^32
        return this.last;
    };
    CrackLCG.prototype.modinv = function (a, m) {
        var _a, _b, _c;
        _a = [Number(a), Number(m)], a = _a[0], m = _a[1];
        if (Number.isNaN(a) || Number.isNaN(m)) {
            throw new Error("Invalid number");
        }
        a = ((a % m) + m) % m;
        if (!a || m < 2) {
            throw new Error("invalid input");
        }
        var s = [];
        var b = m;
        while (b) {
            _b = [b, a % b], a = _b[0], b = _b[1];
            s.push({ a: a, b: b });
        }
        if (a !== 1) {
            throw new Error(" inverse does not exists");
        }
        var x = 1;
        var y = 0;
        for (var i = s.length - 2; i >= 0; --i) {
            _c = [y, x - y * Math.floor(s[i].a / s[i].b)], x = _c[0], y = _c[1];
        }
        return BigInt(((y % m) + m) % m);
    };
    return CrackLCG;
}());
exports.CrackLCG = CrackLCG;
