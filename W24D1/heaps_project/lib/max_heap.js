class MaxHeap {
    constructor(){
        this.array = [null];
    }
    getParent(idx) {
        return Math.floor(idx / 2);
    }
    getLeftChild(idx){
        return idx * 2
    }
    getRightChild(idx) {
        return idx * 2 + 1
    }
    insert(val) {
        this.array.push(val)
        this.siftUp(this.array.length - 1)
    }
    siftUp(idx){
        if(idx === 1) return;
        let parentIdx = this.getParent(idx);
        if(this.array[idx] > this.array[parentIdx]){
            [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];
            this.siftUp(parentIdx);
        }
    }
    deleteMax(){
        if(this.array.length === 1) return null
        if(this.array.length === 2) return this.array.pop();
        let max = this.array[1];
        this.array[1] = this.array.pop();
        this.siftDown(1);
        return max;
    }
    siftDown(idx){

        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        let myArr = this.array;
        let leftChild = myArr[leftIdx] || -Infinity;
        let rightChild = myArr[rightIdx] || -Infinity;
        let currVal = myArr[idx];
        if(currVal > leftChild && currVal > rightChild) return;
        if(leftChild > rightChild) {
            [myArr[idx], myArr[leftIdx]] = [myArr[leftIdx], myArr[idx]]
            this.siftDown(leftIdx);
        } else {
            [myArr[idx], myArr[rightIdx]] = [myArr[rightIdx], myArr[idx]]
            this.siftDown(rightIdx);
        }
    }

}

module.exports = {
    MaxHeap
};