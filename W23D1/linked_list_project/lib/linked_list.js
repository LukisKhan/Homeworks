// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        let tailNode = this.tail;
        if (this.length > 1) {
            let newTail = this.get(this.length - 2);
            newTail.next = null;
            this.tail = newTail;
        } else if (this.length === 1) {
            this.tail = null, this.head = null
        } else {
            return undefined
        }

        this.length--;
        return tailNode
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newHead = new Node(val);
        if(this.head) {
            newHead.next = this.head;
        } else {
            this.tail = newHead
        }
        this.head = newHead;
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        let oldHead = this.head;
        if(this.length === 1) {
            this.head = null, this.tail = null;
        } else if (this.head) {
            this.head = oldHead.next
        } else {
            return undefined
        }
        this.length--;
        return oldHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let pointerNode = this.head;
        for (let i = 0; i < this.length; i++) {
            if (pointerNode.value === target) return true;
            pointerNode = pointerNode.next
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if(index > this.length - 1) return null
        let pointerNode = this.head;
        for(let i = 0; i < index; i++){
            pointerNode = pointerNode.next
        }
        return pointerNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (index > this.length - 1) return false
        this.get(index).value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index > this.length - 1) return false
        let newNode = new Node(val);
        newNode.next = this.get(index);
        this.get(index - 1).next = newNode; 
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index > this.length - 1) return undefined
        let removedNode = this.get(index);
        this.get(index - 1).next = this.get(index + 1)
        this.length--;
        return removedNode;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
