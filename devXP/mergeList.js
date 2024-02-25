// Merge K Sorted Lists

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.
//  
// Example 1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]] 

// Output: [1,1,2,3,4,4,5,6]

// Explanation: The linked-lists are: [ 1->4->5, 1->3->4, 2->6 ]

// merging them into one sorted list: 1->1->2->3->4->4->5->6 


// Example 2:
// Input: lists = [] 
// Output: [] 


// Example 3:
// Input: lists = [[]] 
// Output: [] 
//  
// Constraints:

// k == lists.length

// 0 <= k <= 104

// 0 <= lists[i].length <= 500

// -104 <= lists[i][j] <= 104

// lists[i] is sorted in ascending order.

// The sum of lists[i].length will not exceed 104.

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    if (lists.length === 0) return null;
    
    const mergeTwoLists = (l1, l2) => {
        const dummy = new ListNode();
        let current = dummy;
        
        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        
        if (l1 !== null) current.next = l1;
        if (l2 !== null) current.next = l2;
        
        return dummy.next;
    };
    
    const merge = (lists, left, right) => {
        if (left === right) return lists[left];
        
        const mid = Math.floor((left + right) / 2);
        const l1 = merge(lists, left, mid);
        const l2 = merge(lists, mid + 1, right);
        
        return mergeTwoLists(l1, l2);
    };
    
    return merge(lists, 0, lists.length - 1);
}

// Example usage:
const lists = [
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(2, new ListNode(6))
];

const mergedList = mergeKLists(lists);
let result = [];
let current = mergedList;
while (current !== null) {
    result.push(current.val);
    current = current.next;
}
console.log(result); // Output: [1, 1, 2, 3, 4, 4, 5, 6]
