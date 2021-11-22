function zip1 (arr) {
    let newArr = [];
    for (let i =1; i<arr.length;i++)
    {
        newArr.push(arr[i]-arr[i-1]);
    }
    return newArr;
}

function zip2 (arr) {
    let newArr1 = [];
    for (let i =2; i<arr.length;i++)
    {
        newArr1.push((BigInt(arr[i])*BigInt(arr[i-2])) - (BigInt(arr[i-1])*BigInt(arr[i-1])));
    }
    return newArr1;
}
function gcd( a,  b)
{
    if (a == 0)
        return b;
    return gcd(b % a, a);
}

function findGCD( arr, n)
{
    let result = arr[0];
    for (let i = 1; i < n; i++)
    {
        result = gcd(arr[i], result);

        if(result == 1)
        {
            return 1;
        }
    }
    return result;
}
function egcd(a, b) {
    if (a === 0) return [b, 0,1];
    else{
        let retur = egcd(b % a, a);
        let g = retur[0];
        let x = retur[1];
        let y = retur[2];
        return [g, y - Math.floor(b/a)*x,x]
    }
}

function modinv(b, n) {
    let retur = egcd(b, n);
    let g = retur[0];
    let x = retur[1];
    if (g === 1) return BigInt(x) % BigInt(n)
}

function crack_unknown_multiplier(states, modulus) {
    let s1 = BigInt( BigInt(states[2] - states[1]) * BigInt(modinv(states[1] - states[0], modulus)));
    let multiplier = mod(s1,BigInt(modulus))
    return multiplier
}
function mod(n, m) {
    return ((n % m) + m) % m;
}
function crack_unknown_increment(states, modulus, multiplier){
    let step1 = ((states[1] - states[0] * multiplier));
    let step2 = (mod(step1,modulus));
    return step2;
}

function lcg (seed,a,c,m) {
    seed  = BigInt(BigInt(seed) * BigInt(a) + BigInt(c)) % BigInt(m);
    return seed;
}


let testArr = [1458504481,
    3284208098,
    2567520111,
    1143032408,
    2312690669,
    1104281918
];
let firstZip = zip1(testArr);
let secondZip = zip2(firstZip);
let gcdParam = findGCD(secondZip,secondZip.length);
let modulus = Math.abs(Number(gcdParam));
let multiplier = Number(crack_unknown_multiplier(testArr,modulus));
let increment = crack_unknown_increment(testArr,modulus,multiplier);
console.log(`Modulus: ${modulus}`);
console.log(`Multi: ${multiplier}`);
console.log(`Incr:${increment}`);



let lcg1 = lcg(testArr[testArr.length-1],multiplier, increment, modulus);
console.log(Number(lcg1));
lcg1 = lcg(lcg1,multiplier, increment, modulus);
console.log(Number(lcg1));
lcg1 = lcg(lcg1,multiplier, increment, modulus);
console.log(Number(lcg1));
lcg1 = lcg(lcg1,multiplier, increment, modulus);
console.log(Number(lcg1));
lcg1 = lcg(lcg1,multiplier, increment, modulus);
console.log(Number(lcg1));
lcg1 = lcg(lcg1,multiplier, increment, modulus);
console.log(Number(lcg1));


