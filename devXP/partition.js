// Partition

// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
// You should preserve the original relative order of the nodes in each of the two partitions.

// Example 1: 
// Input: head = [1,4,3,2,5,2], 
// x = 3
// Output: [1,2,2,4,3,5] 

// Example 2:
// Input: head = [2,1], 
// x = 2 
// Output: [1,2] 
 

// Constraints:
// The number of nodes in the list is in the range [0, 200].

// -100 <= Node.val <= 100

// -200 <= x <= 200
function partition(list, target) {
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
    return s1.next;
}

