function breadthFirstArray(root) {
    let queue = [root]
    let valArr = []
    while(queue.length) {
        let node = queue.shift();
        valArr.push(node.val)
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
    return valArr;
}

module.exports = {
    breadthFirstArray
};