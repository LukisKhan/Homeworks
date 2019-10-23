// Write a function, lucasNumberMemo(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively with memoization.
//
// Examples:
//
// lucasNumberMemo(0)   // => 2
// lucasNumberMemo(1)   // => 1
// lucasNumberMemo(40)  // => 228826127
// lucasNumberMemo(41)  // => 370248451
// lucasNumberMemo(42)  // => 599074578
function lucasNumberMemo(n, memo = {}) {
    if (n in memo) return memo[n]
    if (n < 2) return 2 - n;
    memo[n] = lucasNumberMemo(n - 1, memo) + lucasNumberMemo(n - 2, memo);
    return memo[n];
}


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// After you pass the first 3 examples, you'll likely need to memoize your code 
// in order to pass the 4th example in a decent runtime.
//
// Examples:
//  
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount, memo = {}) {
    // console.log(memo);
    // if (amount === 0) return Object.keys(memo).length;
    // if (amount in memo) return Object.keys(memo).length;
    // // if (coins.indexOf(amount) !== -1) return 1 + Object.keys(memo).length;
    // let remainder = amount - coins[coins.length - 1]
    // memo[amount - remainder] = coins[coins.length - 1];
    // console.log(memo);
    // console.log(1 + Object.keys(memo).length);
    
    // return minChange(coins, amount - remainder, memo)


    // if(amount === 0) return memo.length;
    // if(amount < 0) return null;
    // let remainder;
    // console.log(memo)
    // for(let i = 0; i < coins.length; i++){
    //     remainder = amount - coins[i];
    //     memo.push(coins[i])
    //     if(minChange(coins, remainder, memo)) return memo.length
    // };

    // return 1 + minChange(coins, remainder);

    if (amount === 0) return 0;

    if (amount in memo) return memo[amount];
    let numCoins = [];
    coins.forEach(coin => {
        if (coin <= amount) numCoins.push(minChange(coins, amount - coin, memo) + 1);
    });
    memo[amount] =  Math.min(...numCoins);
    return memo[amount];
}

module.exports = {
    lucasNumberMemo,
    minChange
};