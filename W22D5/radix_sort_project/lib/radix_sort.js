function radixSort(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let negatives = arr.filter(el => el < 0);
    let negSorted = [];

    if (negatives.length > 0) {
        negSorted = radixSort(negatives.map(el => Math.abs(el)))
        .reverse()
        .map(el => -el)
    }
    let pos = arr.filter(el => el >= 0);
    let maxDigits = getMaxDigits(pos);

    for (let k = 0; k < maxDigits; k++) {
        let buckets = Array.from({length: 10}, () => []);
        // let buckets = Array(10).fill([]);
        
        for (let i = 0; i < pos.length; i++) {
            let digit = getDigitFrom(pos[i], k);
            buckets[digit].push (pos[i]);
        }
        pos = [].concat(...buckets);

    }
    return negSorted.concat(pos);
}

const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

function getMaxDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
    }
    return maxDigits;
}

module.exports = {
    radixSort
};