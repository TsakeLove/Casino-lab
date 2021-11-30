import { CasinoRoyale } from "./lcg/play";
import { MTSimulate } from "./twi";
import { MTCrack } from "./MTSolver";
(async () => {
    const myCasino = new CasinoRoyale();
    const reg = await myCasino.registerUser("I v%!@!ry want to win");
    console.debug("User was registered");
    console.debug("Send request: ");
    const arrayOfCasinoNumbers = [];
    for (let i = 0; i < 624; i++) {
        arrayOfCasinoNumbers.push(await myCasino.makeBet("MT", 1, 5));
        process.stdout.write("\r" + i);
    }
    const betNums: number[] = [];
    let myAmount = 0;
    arrayOfCasinoNumbers.forEach((el) => {
        if (!(el instanceof Error)) {
            betNums.push(el.realNumber);
            myAmount = el.account.money;
        }
    });
    const crack = new MTCrack(betNums);
    const solverMt = new MTSimulate(0);
    solverMt.setStateWithIndex(crack.array, 624);
    let lastRes;
    console.debug();
    while (myAmount <= 1000000) {
        lastRes = await myCasino.makeBet("MT", 100, Number(solverMt.getRandomNumber()));
        if (!(lastRes instanceof Error)) {
            myAmount = lastRes.account.money;
        }
         console.log("Кря");
    }
    console.log(lastRes);

})();

