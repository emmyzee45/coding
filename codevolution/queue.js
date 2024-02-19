class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        return this.items.push(element);
    }
    dequeue() {
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    peek() {
        if(!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items.toString())
    }
}

const queue = new Queue();

queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.print()
console.log(queue.peek())