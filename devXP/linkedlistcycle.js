// Linked List Cycle

// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by 
// continuously following the next pointer. Internally, pos is used to denote the index of the node that 
// tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.
 
// Example 1:
// Input: head = [1,2], 
// pos = 0 
// Output: true 

// Explanation: 
// There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 2:
// Input: head = [1], 
// pos = -1 
// Output: false 
// Explanation: 
// There is no cycle in the linked list. 
 
// Constraints:

// The number of the nodes in the list is in the range [0, 104].

// -105 <= Node.val <= 105

// pos is -1 or a valid index in the linked-list.

 
// Follow up: Can you solve it using O(1) (i.e. constant) memory?

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var hasCycle = function(head) {
    if (!head || !head.next) {
        return false; // No cycle if there's no head or only one node
    }
    
    let slow = head;
    let fast = head.next;
    
    while (slow !== fast) {
        if (!fast || !fast.next) {
            return false; // Reached end of list, no cycle
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return true; // If slow and fast pointers meet, there's a cycle
};

// Example usage:
// Example 1:
let head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = head1; // Creating a cycle where the last node points back to the first node
console.log(hasCycle(head1)); // Output: true

// Example 2:
let head2 = new ListNode(1);
console.log(hasCycle(head2)); // Output: false
