class Node {
  contructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head, lenght) {
    this.head = null;
    this.lenght = 0;
  }

  unShift(data) {
    const newHead = new Node(data, this.head);
    this.lenght++;
    this.head = newHead;
  }
  getHead() {
    this.head;
  }
  getlast() {
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
}
