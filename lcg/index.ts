import { CasinoRoyale } from "./play";
import { CrackLCG } from "./crack";
(async () => {
    const myCasino = new CasinoRoyale();
    const reg = await myCasino.registerUser("I want to win!!");
    console.log(reg);
    const arrayOfCasinoNumbers = [
        (await myCasino.makeBet("Lcg", 1, 1)),
        (await myCasino.makeBet("Lcg", 1, 1)),
        (await myCasino.makeBet("Lcg", 1, 1)),
        (await myCasino.makeBet("Lcg", 1, 1)),
        (await myCasino.makeBet("Lcg", 1, 1)),
        (await myCasino.makeBet("Lcg", 1, 1)),
    ];
    const state = arrayOfCasinoNumbers.map((number) => {
        if (number instanceof Error) {
            throw new Error();
        } else {
            return BigInt(number.realNumber);
        }
    }) as [...bigint[]]
    const crack = new CrackLCG(state, BigInt(Math.pow(2, 32)));
    crack.calcAandC();
    console.log("Multi:, Inc:", crack.getConstants());

    let total = 0;
    let lastResponse = arrayOfCasinoNumbers[2];
    while (total <= 1000000) {
        const nextVal = crack.getNextValue();
        lastResponse = await myCasino.makeBet("Lcg", 900, Number(nextVal) | 0);
        if (!(lastResponse instanceof Error)) {
            total = lastResponse.account.money;
        }

    }
    console.log("Total:",total);
    console.log(JSON.stringify(lastResponse.message));

})();

