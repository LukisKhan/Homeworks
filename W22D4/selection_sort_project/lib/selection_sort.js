function swap(arr, index1, index2) {
    return [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length ; i++) {
        minIdx = i;
        for(let j = minIdx; j < arr.length; j++) {
            if(arr[minIdx] > arr[j]) {
                minIdx = j;
            }
        }
        swap(arr, minIdx, i)
    }
    return arr
}

module.exports = {
    selectionSort,
    swap
};