export class MersenneTwisterRandomizer {
    private w = 32;
    private n = Number(624);
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

    private array: number[];
    private index: number;

    constructor(private makeService: any) {
        // Initialization inside the constructor
        this.array = [];
        this.seed = 0;
        this.index = 0;
    }

    private seed: number;


    public MersenneTwisterRandomizer(array: number[]) {
        //  this.index = 0;
        this.array = array;
        this.twist();
    }

    public getRandomNumber() {
        if (this.index >= this.n) {
            this.twist();
            this.index = 0;
        }

        let result = this.array[this.index];
        result = result ^ ((result >> this.u) & parseFloat(this.d));
        result = result ^ ((result << this.s) & parseFloat(this.b));
        result = result ^ ((result << this.t) & parseFloat(this.c));
        result = result ^ (result >> this.l);

        this.index++;
        return result;
    }

    public MersenneTwisterRandomizer2(seed: number) {
        this.seed = seed;

        this.index = this.n + 1;
        this.array = [];
        this.array[0] = seed;
        for (let i = 1; i < this.n; i++) {
            this.array[i] = (this.f * (this.array[i - 1] ^ (this.array[i - 1] >> (this.w - 2))) + i) & parseFloat("ffffffff");
        }
    }

    private twist() {
        for (let i = 0; i < this.n; i++) {

            let x: number = (this.array[i] & parseFloat(this.upperMask)) + ((this.array)[(i + 1) % this.n] & parseFloat(this.lowerMask));
            let xA: number = x >> 1;
            if ((x % 2) != 0) {
                xA = xA ^ parseFloat(this.a);
            }
            this.array[i] = this.array[(i + this.m) % this.n] ^ xA;
        }
    }
}
