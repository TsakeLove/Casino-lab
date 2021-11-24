const fetch = require("node-fetch");
const HOST = "http://95.217.177.249/casino/";
let userId;

module.exports.registerUser = async function(id) {
    userId = id;
    return await sendRequest(
        `${HOST}createacc?id=${id}`
    );
}

module.exports.makeBet = async function (gameMode) {
    const bet = 1;
    const number = 0;
    return await play(gameMode, bet, number);
}
 async function play(gameMode, amount, number) {
    return await sendRequest(
        `${HOST}play${gameMode}?id=${userId}&bet=${amount}&number=${number}`
    );
}
 async function sendRequest(url) {
    try {
        return await (await fetch(url)).json();
    } catch (error) {
        //<eat error>
        console.log(error);

    }
}
