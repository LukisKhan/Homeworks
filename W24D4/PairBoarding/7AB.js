//Given array of length n, sort numbers from 1 to n
function sort1(arr){
  
}

//Given array of length n, sort numbers from 1 to an given upper range.
function sort2(arr, max_val){
  let counts = Array(max_val + 1);
  counts.fill(0)
  arr.forEach(el => {
    counts[el]++
  })
  let res = []
  for(let i = 0; i < max_val + 1; i++){
    while(counts[i]) {
      res.push(i)
      counts[i]--
    }
  }
  return res
}
arr1 = [5,5,1,2,3,4,3,1]
console.log(sort2(arr1, 5));

// Part 3: Say I give you an array of n strings, each of length k.I claim that, 
// using merge sort, you can sort this in O(knlog(n)), since comparing a pair 
// of strings takes O(k) time.
// .Sort the strings in O(kn)
// You may assume all strings contain only lowercase letters a..z without whitespace
//  or punctuation.
function sort3(strings, length){

}


// For the array[4, 6, 8], index 0 should be returned with 4 in 18 odds, 
// index 1 should be returned with 6 in 18 odds, and index 2 should be 
// return with 8 in 18 odds.Implement this in O(n) time.
function weighted_random_index(arr){
  let sum = 0;
  arr.forEach(el => sum+= el)
  let rand = Math.random();
  let val = 0
  for(let i = 0; i < arr.length; i++){
    val += arr[i] / sum
    if(rand < val) return i;

  }
}
arr1 = [4, 60, 8]
console.log(weighted_random_index(arr1))


//B 
// Given an array, move all zeros to the end. The order of non-zero elements 
// does not matter.
// Algorithm should be O(n); use O(1) extra space.
function move_zeros(array){
  let endIdx = array.length - 1;
  for(let i = 0; i < endIdx; i++) {
    if(array[i] === 0) {
      while(array[endIdx] === 0) {
        endIdx--;
      }
      [array[i], array[endIdx]] = [array[endIdx], array[i]]
      endIdx--;
      console.log(i, endIdx)
    }
  }
  return array
}
arr1 = [0,0,0,4,3,1,2, 0]
console.log(move_zeros(arr1))

// look_and_say([1, 2, 1, 1]) == [[1, 1], [1, 2], [2, 1]]
function look_and_say(arr){
  
}