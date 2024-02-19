class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        return this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items.toString())
    }
}

const stack = new Stack();

console.log(stack.isEmpty())
stack.push(4);
stack.push(3);
stack.push(1);
console.log(stack.peek())
stack.pop(3)
stack.print()