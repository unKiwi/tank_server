let isPrime = (n) => {
    for (let i = 2; i <= n / 2; i++) {
        if (!(n % i)) {
            return 0;
        }
    }
    return 1;
}

let iter = () => {
    console.log("start");
    let numPrimes = 0;
    for (let i = 2; i < 250001; i++) {
        numPrimes += isPrime(i);
    }
    console.log("end");
    setTimeout(iter, 1)
}

iter();