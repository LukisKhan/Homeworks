// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {
  if(!nums.length) return null;
  let midIdx = Math.floor(nums.length/2);
  let rootNode = new TreeNode(nums[midIdx]);
  let leftSortedArr = nums.slice(0, midIdx);
  let rightSortedArr = nums.slice(midIdx + 1);
  rootNode.left = sortedArrayToBST(leftSortedArr);
  rootNode.right = sortedArrayToBST(rightSortedArr);
  return rootNode;
}