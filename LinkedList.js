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
}
