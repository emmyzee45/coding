class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    append(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }else {
            this.tail.next = node;
        }
        this.tail = node;
        this.size++;
    }
  
    mergeTwoList(nums1, nums2) {
        // console.log(nums1, nums2)
        let p1 = nums1;
        let p2 = nums2;
        
        while(p1 !== null && p2 !== null) {
            if(p1.value < p2.value) {
                this.append(p1.value);
                p1 = p1.next;
            } else {
                this.append(p2.value);
                p2 = p2.next;
            }
            this.size++;
        }

        while(p1 !== null) {
            this.append(p1.value);
            p1 = p1.next;
            this.size++;
        }

        while(p2 !== null) {
            this.append(p2.value);
            p2 = p2.next;
            this.size++;
        }

    }

    addTwoNumbers(l1, l2) {
        let p1 = l1;
        let p2 = l2;
        let solution = new Node(0);
        let current = solution;
        let carry = 0;

        while(p1 || p2) {
            let num1 = p1 ? p1.value : 0;
            let num2 = p2 ? p2.value : 0;

            if(num1 + num2 + carry > 9) {
                current.next = new Node(num1 + num2 + carry - 10);
                current = current.next;
                carry = 1;
            } else {
                current.next = new Node(num1 + num2 + carry);
                current = current.next;
                carry = 0;
            }

            if(p1) p1 = p1.next;
            if(p2) p2 = p2.next;
        }
        if(carry) current.next = new Node(carry);
        return solution.next;
    }

    removeElement(root, index) {
        if(index < 0 || index > this.size) return;

        let prev = root;
        for(let i = 0; i < this.size - index - 1; i++) {
            prev = prev.next;
        }
        prev.next = prev.next.next;
    }

    print() {
        let cur = this.head;
        let val = ''

        while(cur) {
            val +=  ` ${cur.value}`;
            // console.log(cur.value)
            cur = cur.next
        }

        console.log(val)
    }
}

const list = new LinkedList();
const list1 = new LinkedList();
const list2 = new LinkedList();
list.append(2);
list.append(4);
list.append(3);
list.append(5);
list.append(6);
list.append(4);
// console.log(list.addTwoNumbers(list1.head, list2.head));

// list.reverse()
list.print()
list.removeElement(list.head, 2)
list.print()
// list2.print()