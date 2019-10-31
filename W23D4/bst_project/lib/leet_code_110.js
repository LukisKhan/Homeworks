// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
  if(!root) return true;
  let noHeightDiff = Math.abs(getHeight(root.left)) - Math.abs(getHeight(root.right)) <= 1;
  return noHeightDiff && isBalanced(root.left) && isBalanced(root.right);
}
function getHeight(root){
  if (!root) return -1;
  return 1 + Math.max(getHeight(root.left), getHeight(root.right))
}