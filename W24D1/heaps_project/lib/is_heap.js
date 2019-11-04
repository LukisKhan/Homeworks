// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    if (array[idx] === undefined) return true;
    let leftIdx = idx * 2;
    let rightIdx = idx * 2 + 1;
    let leftVal = array[leftIdx] === undefined ? -Infinity : array[leftIdx];
    let rightVal = array[rightIdx] === undefined ? -Infinity : array[rightIdx];
    console.log("array", array)
    console.log("idx", idx)
    console.log("current", array[idx])
    console.log("leftChild", leftVal)
    console.log("rightChild", rightVal)
    return array[idx] > leftVal && array[idx] > rightVal
        && isMaxHeap(array, leftIdx)
        && isMaxHeap(array, rightIdx);



    // console.log(array)
    // if (siftDown(array, idx) === false) return false;
    // return true;
}

function getParent(idx) {
    return Math.floor(idx / 2);
}
function getLeftChild(idx){
    return idx * 2
}
function getRightChild(idx) {
    return idx * 2 + 1
}
function siftDown(array, idx){

    let leftIdx = getLeftChild(idx);
    let rightIdx = getRightChild(idx);
    let myArr = array;
    let leftChild = myArr[leftIdx] || -Infinity;
    let rightChild = myArr[rightIdx] || -Infinity;
    let currVal = myArr[idx];
    console.log("idx",idx)
    console.log("current",currVal)
    console.log("leftChild",leftChild)
    console.log("rightChild",rightChild)
    if (currVal) {
        return currVal > leftChild && currVal > rightChild
            && siftDown(array, leftIdx)
            && siftDown(array, rightIdx)  
    }
}


module.exports = {
    isMaxHeap
};