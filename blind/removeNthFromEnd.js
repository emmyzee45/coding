var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let left = dummy;
    let right = head;

    while(right && n> 0) {
        right = right.next;
        n -= 1;
    }

    while(right) {
        right = right.next;
        left = left.next;
    }

    left.next = left.next.next;
    return dummy.next;
}