class MersenneTwisterRandomizerReverse {

    private w = 32;
    private n = 624;
    private m = 397;
    private r = 31;

    private a = "9908B0DF";

    private u = 11;
    private d = "FFFFFFFF";
    private s = 7;
    private b = "9D2C5680";
    private t = 15;
    private c = "EFC60000";

    private l = 18;
    private f = 1812433253;

    private lowerMask = "7FFFFFFF";
    private upperMask = "80000000";

    private SIZE = 624;
    private array: number[];

    public MersenneTwisterRandomizerReverse() {
        this.array = [this.SIZE];
    }

    public put(index: number, value: number) {
        this.array[index] = this.reverse(value);
    }

    private reverse(value: number) {
        let x = value;
        x = this.reverseRight(x, this.l, ((1 << this.w) - 1));
//        System.out.println((((long) 1 << w) - 1));
//        System.out.println("1: " + x);
        x = this.reverseLeft(x, this.t, parseFloat(this.c));
//        System.out.println("2: " + x);
        x = this.reverseLeft(x, this.s, parseFloat(this.b));
//        System.out.println("3: " + x);
        x = this.reverseRight(x, this.u, parseFloat(this.d));
//        System.out.println("4: " + x);

        return x;
    }

    private reverseRight(y: number, a: number, b: number) {
        let x = 0;
        for (let i = 0; i < this.w; i++) {
            if (i < a) {
                x = x | this.getBit(y, i);
            } else {
                x = x | (this.getBit(y, i) ^ ((this.getBit(x, i - a) >> a) & this.getBit(b, i)));
            }
        }
        return x;
    }

    public getArray() {
        return this.array;
    }

    private getBit(x: number, i: number) {
        return (x & (1 << (this.w - i - 1)));
    }

    private reverseLeft(y: number, a: number, b: number) {
        return this.reverseBits(this.reverseRight(this.reverseBits(y), a, this.reverseBits(b)));
    }

    private reverseBits(x: number) {
        let rev = 0;
        for (let i = 0; i < this.w; i++) {
            rev = rev << 1;
            if (x > 0) {
                if ((x & 1) == 1) {
                    rev = rev ^ 1;
                }
                x = x >> 1;
            }
        }
        return rev;
    }


}
