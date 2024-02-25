// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Examples
// Input: head = [1,2,3,4,5],
// n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1],
// n = 1
// Output: [] 

// Example 3:
// Input: head = [1,2], 
// n = 1 
// Output: [1] 
//  
// Constraints:
//  The number of nodes in the list is sz.

//  1 <= sz <= 30

//  0 <= Node.val <= 100

//  1 <= n <= sz

function removeNthFromEnd(head, n) {
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