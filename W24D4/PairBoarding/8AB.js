// scrambled list of n unique integers between 0 and n.
// Tell me what number is missing.
function missingNum(arr){
  let expectedSum = arr.length;
  let actualSum = 0;
  for(let i = 0; i < arr.length; i++){
    expectedSum += i;
    actualSum += arr[i];
  }
  return expectedSum - actualSum;
}
let arr1 = [1,2,3,4,5,7,8,9,0];
console.log(missingNum(arr1))

// Earth is at(0, 0, 0)
// How would you compute the k stars which are closest to Earth ?
function k_closest_stars(sequence, k){

}

// Implement a stack with a method max that returns the maximum value 
// of the stack.max should run in O(1) time
class Stack {
  constructor(){

  }

  max(){

  }
}

/////////////B
// Implement a queue using stacks.That is, write enqueue and dequeue using 
// only push and pop operations.
// In terms of performance, enqueue should be O(1), but dequeue may be
// worst -case O(n).In terms of ammortized time, dequeue should be O(1).
// Prove that your solution accomplishes this.


// Given an array, and a window size w, find the maximum max - min 
// within a range of w elements.
// windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8