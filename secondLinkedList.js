class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  contructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
}

const link = new LinkedList();
console.log(link.isEmpty());
console.log(link.getSize());
console.log(link.prepend(10));
console.log(link.getSize());
