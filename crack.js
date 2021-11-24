let constants = {
    a: 0n,
    m:  BigInt(Math.pow(2, 32)),
    c: 0n
}
let _last;
let state;
function setState(state){
    statte = state;
}
function getA() {

}
 function modinv(a, m) {
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
Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};

module.exports.getNextValue = function (_last, a, c,m) {
    _last  = BigInt(BigInt(_last) * BigInt(a) + BigInt(c)) % BigInt(m);
     return _last;
}

module.exports.multiplier =  function (states) {
    state = states;
    let p1 = modinv(Number(states[1] - states[0]), Number(constants.m));
    console.log(`P1: ${p1}`);
    let p2 = BigInt(BigInt(states[1])*BigInt(p1));
    console.log(`P2: ${p2}`);
    let p3 = BigInt(BigInt(states[2]) - p2);
    console.log(`P3: ${p3}`);
    let p4 = BigInt((p3 % constants.m));
    console.log(`P4: ${p4}`);
    let s1 = BigInt( BigInt(states[2] - states[1]) * BigInt(modinv(states[1] - states[0], Number(constants.m))));
    constants.a = BigInt((s1 % constants.m));
    return constants.a
}
module.exports.constantC = function (states) {
    constants.c = (BigInt(states[1]) - (BigInt(states[0]) * BigInt(constants.a))) % BigInt(constants.m);
    return  constants.c;
}
