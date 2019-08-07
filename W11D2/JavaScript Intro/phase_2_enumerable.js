
Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

// Array.prototype.myMap = function (callback) {
//     let arrayResult = []
//     for (let i = 0; i < this.length; i++) {
//         arrayResult[i] = callback(this[i]);
//     }
//     return arrayResult;
// }

Array.prototype.myMap = function (callback) {
    let arrayResult = [];
    // arrayResult[i] = callback(this[i]);
    // this.myEach(element => arrayResult.push(callback(element)) );
    this.myEach(function (element) {
        arrayResult.push(callback(element));
    });
    return arrayResult;
}


let array = [1, 2, 3];
function addTwo(n) {
    return n + 2;
}
let arrayMapped = [7, 8, 9];

// console.log(array);
// console.log(array.myEach(addTwo));
// console.log(array);

// console.log(arrayMapped);
// console.log(arrayMapped.myMap(addTwo));
// console.log(arrayMapped);

Array.prototype.myReduce = function (callback, initialVal) {
    initialVal ||= this[0];
    this.myEach(function (element) {
        initialVal = callback(element)
    });
    return initialVal;

}

