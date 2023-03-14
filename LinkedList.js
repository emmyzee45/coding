class Node {
  contructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head, lenght) {
    this.head = null;
    this.length = 0;
  }

  unShift(data) {
    const newHead = new Node(data, this.head);
    this.length++;
    this.head = newHead;
  }
  getHead() {
    this.head;
  }
  getLast() {
    const currentNode = this.head;

    while (currentNode && currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
  clear() {
    this.head = null;
    this.length = 0;
  }
  shift() {
    if (!this.head) {
      return;
    }

    const oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    return oldHead;
  }
  pop() {
    if (!this.head) {
      return;
    }

    if (this.length === 1) {
      return this.shift();
    }

    const last = this.getLast();
    let current = this.head;

    while (current !== last) {
      current = current.next;
    }
    current.next = null;
    this.length--;
    return last;
  }

  get(index) {
    if(index >= this.length || index < 0) {
      return null;
    }

    let count = 0; 
    let current =  this.head;
    while(count < index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, data) {
    if(!this.get(index)) {
      return false;
    }

    let node = this.get(index);
    node.data = data;
    return true;
  }

  remove(index){
    if(!this.get(index)) {
      return false;
    }

    if(index == 0) {
      return this.shift();
    }

    const prevNode = this.get(index - 1);
    const nodeToRemove = this.get(index);

    prevNode.next = prevNode.next.next;
    this.length--;
    return nodeToRemove;
  }

  insert(index, data) {
    if(index > this.length || index < 0) {
      return false;
    }

    if(index === 0) {
      this.unShift(index);
      return true;
    }

    const prevNode = this.get(index - 1);
    const nextNode = this.get(index);

    prevNode.next = new Node(data, nextNode);
    this.length++;
    return true;

  }
}
