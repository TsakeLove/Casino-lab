const play = require("./play");
const crack = require("../../../Documents/Casino-lab/crack");
(async () => {

    const reg = await play.registerUser("891124");
    console.log(reg);
    let arrayOfCasinoNumbers = new BigInt64Array([]);
    arrayOfCasinoNumbers = [
        (await play.makeBet("Lcg", 1, 1)).realNumber,
        (await play.makeBet("Lcg", 1, 1)).realNumber,
        (await play.makeBet("Lcg", 1, 1)).realNumber,
        (await play.makeBet("Lcg", 1, 1)).realNumber,
        (await play.makeBet("Lcg", 1, 1)).realNumber,
        (await play.makeBet("Lcg", 1, 1)).realNumber,
        (await play.makeBet("Lcg", 1, 1)).realNumber,
    ];
    console.log(arrayOfCasinoNumbers);
    console.log(`Multiplier: ${crack.multiplier(arrayOfCasinoNumbers)}`);
    let aaa = crack.multiplier(arrayOfCasinoNumbers);
    console.log('A = ' + aaa);
    let ccc = crack.constantC(arrayOfCasinoNumbers);
    console.log('C = ' + ccc);
    console.log(`C : ${crack.constantC(arrayOfCasinoNumbers)}`);

    console.log("SIZE = " + arrayOfCasinoNumbers.length);
    console.log("ELEM = " + arrayOfCasinoNumbers[6]);
    let a = crack.getNextValue(BigInt(arrayOfCasinoNumbers[6]),BigInt(aaa),BigInt(ccc),BigInt(Math.pow(2, 32)));
    console.log("A = " + a);
    console.log("WIN: " + (await play.makeBet("Lcg", 1, 1)).realNumber)
    console.log(`=============`);
})();
