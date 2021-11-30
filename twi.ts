export class MTSimulate {
    private w = BigInt(32);
    private n = BigInt(624);
    private m = BigInt(397);
    private r = BigInt(31);
    private a = BigInt(0x9908B0DF);

    private u = BigInt(11);
    private d = BigInt(0xFFFFFFFF);
    private s = BigInt(7);
    private b = BigInt(0x9D2C5680);
    private t = BigInt(15);
    private c = BigInt(0xEFC60000);

    private l = BigInt(18);
    private f = BigInt(1812433253);

    private lowerMask = (1n << 31n) - 1n;
    private upperMask = 1n << 31n

    private array: bigint[];
    private index: bigint;

    constructor( seed: number) {
        // Initialization inside the constructor
        this.array = [];
        this.MersenneTwisterRandomizer(seed);
    }

    public get getArray(): bigint[] {
        return this.array;
    }

    private seed: number;


    // public MersenneTwisterRandomizer(array: number[]) {
    //     //  this.index = 0;
    //     this.array = [...array].map(BigInt);
    //     this.twist();
    // }

    public getRandomNumber() {
        if (this.index >= this.n) {
            if (this.index > this.n) {
                throw new Error("Generator was never seeded");
            }
            this.twist();
        }
        let result = this.array[Number(this.index)];
        result = result ^ ((result >> this.u) & (this.d));
        result = result ^ ((result << this.s) & (this.b));
        result = result ^ ((result << this.t) & (this.c));
        result = result ^ (result >> this.l);

        this.index++;
        return result & ((BigInt(1) << this.w) - BigInt(1));
    }

    private MersenneTwisterRandomizer(seed: number) {
        // this.index = this.n + BigInt(1);
        // this.array = [];
        this.array[0] = BigInt(seed);
        for (let i = 1; i < this.n; i++) {
            this.array[i] = (this.f *
                (this.array[i - 1] ^
                    (this.array[i - 1] >> (this.w - BigInt(2)))) +
                BigInt(i)) &
                ((BigInt(1) << this.w) - BigInt(1));}
    }

    private twist() {
        for (let i = 0; i < this.n; i++) {

            let x =
                (this.array[i] & this.upperMask) +
                (this.array[Number(BigInt(i + 1) % this.n)] & this.lowerMask);
            let xA = x >> BigInt(1);
            if ((x % BigInt(2)) !== BigInt(0)) {
                xA = xA ^ this.a;
            }
            this.array[i] =
                this.array[Number((BigInt(i) + this.m) % this.n)] ^ xA;
        }
        this.index = BigInt(0);
    }
    public setStateWithIndex(array: number[], i: number) {
        this.array = [...array].map(BigInt);
        this.index = BigInt(i);
    }
}
