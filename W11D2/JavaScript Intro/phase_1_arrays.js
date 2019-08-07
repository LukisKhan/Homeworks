
Array.prototype.uniq = function (element) {
    const array2 = [];
    this.forEach(element => {
        if (array2.includes(element)) {
            
        }
        else {
            array2.push(element);
        }
    });
    console.log(array2);
    return array2;
}


// let array = [1,1,2,3,3,4];
// console.log(array);
// array.uniq();
// console.log(array);


Array.prototype.twoSum = function () {
    let array2 = [];
    for( let i = 0; i < this.length; i++ ) {
        for (let j = i+1; j < this.length; j++) {
            if ( this[i] + this[j] === 0 ){
                array2.push([i,j]);
            }
        }
    }
    return array2;
}

// let array2 = [ 1, -1, 5, -5, -1 ];
// console.log(array2);
// console.log(array2.twoSum());
// console.log(array2);


let arrayTranspose = [  
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


Array.prototype.transpose = function () {
    let array2 = [[],[],[]];
    for ( let i = 0; i < this.length; i++ ) {
        for ( let j = 0; j < this.length; j ++ ) {
            array2[j][i] = this[i][j];
        }
    }
    return array2;
}


// console.log(arrayTranspose);
// console.log(arrayTranspose.transpose());
// console.log(arrayTranspose);

