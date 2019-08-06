function fizzBuzz (array) {
    let fizzBuzzArray = []
    array.forEach( el => {
        if ((el % 3 === 0) ^ (el % 5 === 0)) {
            fizzBuzzArray.push(el);
        }
    });
    return fizzBuzzArray;
}

function isPrime (n) {
    if (n < 2) { return false; }
    for(let i = 2;, i < n;, i++ ) {
        if ( n % i === 0 ) { 
            return false; }
    }
    return true;
}

function sumOfNPrimes (n) {
    let countPrimes = 0;
    let i = 2;
    let sum = 0;
    while ( countPrimes < n ) {
        if ( isPrime(i) ) {
            countPrimes++;
            sum += i;
        }
        i++;
    }
    return sum;
}