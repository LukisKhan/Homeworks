// Write a function that takes an array 
// and returns all of its subsets/combination.
// How many sets will it return?
function subsets(arr){
  if(arr.length === 0) return [[]]
  let first = arr[0];
  let innerSubSet = subsets(arr.slice(1));
  let curSubSet = innerSubSet.map(el => [first].concat(el))
  return curSubSet.concat(innerSubSet)
}
//subset(['c'])
//innerSubSet = subset([]) => [[]]
//nextSet = ['c'].concat([]) => ['c']
//return value of ['c'].concat[[]] => [[], ['c']]

//subset(['b', 'c'])
//innerSubSet = subset(['c']) => [[], ['c']]
//nextSet = ['b'].concat([[]]) => ['b']
//nextSet = ['b'].concat([['c']]) => ['b','c']
//nextSet = [['b'],['b','c']]
//return value of [['b'],['b','c']].concat[[], ['c']] 
//                  => [[], ['c'], ['b'], ['b','c']]
// console.log(subsets(['a', 'b', 'c']));
// subsets(['a', 'b', 'c'])


// Write a function that will take a string and return the 
// indices of the start / end of the longest palindrome it contains.
// longest_palindrome('acapella') => [0, 2]
function longest_palindrome(str){
  let substrs = [];
  for(let i = 0; i < str.length; i++){
    for(let j = i + 1; j <= str.length; j++){
      substrs.push(str.slice(i,j))
    }
  }
  let max = '';
  substrs.forEach(el => {
    let reverse = ''
    for(let k = el.length - 1; k >= 0; k--){
      reverse += el[k]
    }
    if(el === reverse && reverse.length > max.length) max = reverse
  })
  return [str.indexOf(max), str.indexOf(max)+ (max.length - 1)];
}
console.log(longest_palindrome("wabcddcbaz"))


// Given arr1 and arr2, find the common elements in both arr. 
function fast_intersection(arr1, arr2){
  let set1 = new Set() 
  for(let i = 0; i < arr1.length; i ++){
    set1.add(arr1[i])
  }
  let intersection = []
  for(let j = 0; j < arr2.length; j++){
    if(set1.has(arr2[j])) intersection.push(arr2[j])
  }
  return intersection
}
console.log(fast_intersection([3,4,5,6,7,8], [1,2,3,4,5]))

// Write a function that takes two arrays(arr1 and arr2) of 
// integers and returns an array with all the subsets commmon to both.
function common_subsets(arr1, arr2){
  let intersection = fast_intersection(arr1, arr2)
  return subsets(intersection)
}
console.log(common_subsets([3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5]))
// Given an array and index, find if it's possible to reach the value 0 
// by starting at the given index and repeatedly moving left/right by the
//  distance found at array[index].
// can_win ? ([1, 0, 1], 0) => true
// can_win ? ([1, 2, 0], 0) => false
function can_win(arr, i = 0, seen = {}){
  // seen[i] = arr[i];
  // let currentNum = arr[i];
  // let rightIdx = currentNum + i;
  // let leftIdx = i - currentNum;
  // if(rightIdx < arr.length){
  //   if(arr[rightIdx] === 0) return true;
  //   seen[rightIdx] = arr[rightIdx]
  //   return can_win(arr, rightIdx, seen)
  // }
  // if(leftIdx > 0){
  //   if (arr[leftIdx] === 0) return true;
  //   seen[leftIdx] = arr[leftIdx]
  //   return can_win(arr, leftIdx, seen)
  // }
  // return false
  
  if(i < 0 || i > arr.length || seen[i]) return false;
  if(arr[i] === 0) return true;
  seen[i] = true;
  return can_win(arr, i + arr[i], seen) || can_win(arr, i - arr[i], seen)
}

console.log(can_win([1, 0, 1], 0));
console.log(can_win([1, 2, 0, 3, 4, 6, 7, 5], 0));
console.log(can_win([1, 2, 0, 4, 3, 6, 7, 5], 0));