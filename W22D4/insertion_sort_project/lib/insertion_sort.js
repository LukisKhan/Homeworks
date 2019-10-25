function insertionSort(arr) {
    // for(let i = 1; i < arr.length; i++) {
    //     let unSortedEle = arr[i]
    //     let sortedIdx = i - 1;
    //     for (sortedIdx; sortedIdx >= 0 && unSortedEle < arr[sortedIdx]; sortedIdx-- ) {
    //         let swapIdx = sortedIdx + 1;
    //         arr[swapIdx] = arr[sortedIdx]
    //     }
    //     arr[sortedIdx+1] = unSortedEle;
    // }

    for (let i = 1; i < arr.length; i++) {
        let curEle = arr[i]
        let swapIdx = i - 1;
        while(swapIdx >= 0 && curEle < arr[swapIdx] ) {
            arr[swapIdx+1] = arr[swapIdx--]
        }
        arr[swapIdx+1] = curEle;
    }
}

module.exports = {
    insertionSort
};