export class CrackLCG {
    private state: [...bigint[]];
    private last: bigint;
    public a = BigInt(0);
    public c = BigInt(0);
    private m: bigint;
    constructor(state: [...bigint[]], m: bigint) {
        this.state = state;
        this.m = m;
        this.last = state[state.length-1];
    }
    public calcAandC() {
        this.a = this.crack_multiplier();
        this.c = this.crack_increment();
    }
    public getConstants(): [bigint, bigint] {
        return [this.a, this.c];
    }
    private crack_increment(): bigint {
        return (this.state[1] - this.state[0] * this.a) % this.m;
    }
    private crack_multiplier() {
        const tmp = this.modinv(
            Number(this.state[1] - this.state[0]),
            Number(this.m)
        );
        const a = ((this.state[2] - this.state[1]) * tmp) % this.m;
        return a;
    }
    public getNextValue() {
        this.last = (this.a * this.last + this.c) % this.m; // m is 2^32
        return this.last;
    }
    private modinv(a: number, m: number): bigint {
        [a, m] = [Number(a), Number(m)];
        if (Number.isNaN(a) || Number.isNaN(m)) {
            throw new Error("Invalid number");
        }
        a = ((a % m) + m) % m;
        if (!a || m < 2) {
            throw new Error("invalid input");
        }
        const s = [];
        let b = m;
        while (b) {
            [a, b] = [b, a % b];
            s.push({ a, b });
        }
        if (a !== 1) {
            throw new Error(" inverse does not exists");
        }
        let x = 1;
        let y = 0;
        for (let i = s.length - 2; i >= 0; --i) {
            [x, y] = [y, x - y * Math.floor(s[i].a / s[i].b)];
        }
        return BigInt(((y % m) + m) % m);
    }

}

