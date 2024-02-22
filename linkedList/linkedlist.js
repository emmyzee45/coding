class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    prepend(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        // this.head = node;
        this.size++;
    }
    append(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }
    insert(value, index) {
        if(index < 0 || index > this.size) {
            return
        }
        if(index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for(let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }
    removeFrom(index) {
        if(index < 0 || index > this.size) {
            return
        }
        let removedNode;
        if(index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for(let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value
    }
    removeValue(value) {
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value) {
            this.head = this.head.next;
            this.size--;
        } else {
            let prev = this.head;
            let removedNode;
            while(prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if(prev.next) {
                removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return value;
            }
            return null
        }
    }
    search(value) {
        if(this.isEmpty()) {
            return -1;
        }
        let curr = this.head;
        let i = 0;
        while(curr) {
            if(curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }
    reverse() {
        let prev = null;
        let curr = this.head;
        while(curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    reOrderList(head) {

        // find md
    
        let slow = head;
        let fast = head;
    
        while(fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        // break linked list
        let curr = slow.next;
        slow.next = null;
        // console.log(curr)
    
        //reverse second linked list
        let prev = null;
    
        while(curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        console.log(prev)
        // combine lists
    
        let h1 = head;
        let h2 = prev;
    
        while(h2) {
            let temp = h1.next;
            h1.next = h2;
            h1 = h2;
            h2 = temp;
        }
    }

    print(head) {
        if(this.isEmpty()) {
            console.log("list is empty")
        } else {
            let curr = head;
            let listValues = '';
            while(curr){
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues)
        }
    }
    partition(list, target) {
        let curr = list;
        let s1 = new Node(0);
        let s2 = new Node(0);
        let p1 = s1;
        let p2 = s2;

        while(curr) {
            if(curr.value < target) {
                p1.next = new Node(curr.value);
                p1 = p1.next;
            } else {
                p2.next = new Node(curr.value);
                p2 = p2.next;
            }
            curr = curr.next
        }
        p1.next = s2.next;
        // this.print(s1.next)
        return s1.next;
    }
    removeNthFromEnd(head, n) {
     
        let dummy = head;
        let first = dummy;
        let second = dummy;

        for(let i = 0; i < n + 1; i++) {
            first = first.next;
        }

        while(first) {
            first = first.next;
            second = second.next;
        }

        second.next = second.next.next;
        return head;
    }

}

const list = new LinkedList();
// console.log(list.isEmpty());
// console.log(list.getSize());
// list.print()
list.append(2)
list.append(1)
list.append(3)
list.append(4)
list.append(5)
list.print(list.head)
list.removeNthFromEnd(list.head, 2)
// list.insert(3, 2)
list.print(list.head)
// list.partition(list.head, 2)
// list.reOrderList(list.head)
// list.reverse()
// list.print(list.partition(list.head, 2))