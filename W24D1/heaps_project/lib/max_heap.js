class MaxHeap {
    constructor(){
        this.array = [null];
    }
    getParent(idx) {
        return Math.floor(idx / 2);
    }
    
}

module.exports = {
    MaxHeap
};