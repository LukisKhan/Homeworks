function inOrderArray(root) {
    if (!root) return [];
    // return [
    //     ...inOrderArray(root.left),
    //     root.val,
    //     ...inOrderArray(root.right)
    // ];
    return [].concat(inOrderArray(root.left))
              .concat(root.val)
              .concat(inOrderArray(root.right))
}



function postOrderArray(root) {
  if (!root) return [];
  return [
    ...postOrderArray(root.left),
    ...postOrderArray(root.right),
    root.val
  ];
}


module.exports = {
    inOrderArray,
    postOrderArray
};