class Stack {
  constructor() {
    this.item = [];
  }

  push(data) {
    return this.item.push(data);
  }

  pop() {
    return this.item.pop();
  }

  isEmpty() {
    return this.item.length == 0;
  }

  peek() {
    return this.items[this.item.length - 1];
  }

  size() {
    return this.item.length;
  }

  print() {
    console.log(this.item.toString());
  }
}

const stack = new Stack();

console.log(stack.isEmpty());
console.log(stack.push(40));
console.log(stack.push(3));
console.log(stack.push(5));
console.log(stack.size());
console.log(stack.pop());
console.log(stack.print());
