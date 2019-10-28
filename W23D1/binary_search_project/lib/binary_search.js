function binarySearch(array, target) {
    if (!array.length) return false 
    let midIdx = Math.floor(array.length/2)
    if(target > array[midIdx]) {
        return binarySearch(array.slice(midIdx + 1), target)
    } else if(target < array[midIdx]) {
        return binarySearch(array.slice(0, midIdx), target)
    } else {
        return true
    }

}

function binarySearchIndex(array, target) {
    if (!array.length) return -1
    let midIdx = Math.floor(array.length / 2)
    if (target > array[midIdx]) {
        // return binarySearchIndex(array.slice(midIdx + 1), target) === -1 ? -1 : binarySearchIndex(array.slice(midIdx + 1), target) + midIdx + 1
        let result = binarySearchIndex(array.slice(midIdx + 1), target)
        if(result === -1) 
            return -1
        else
            return result + midIdx + 1;
    } else if (target < array[midIdx]) {
        return binarySearchIndex(array.slice(0, midIdx), target)
    } else {
        return midIdx
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};