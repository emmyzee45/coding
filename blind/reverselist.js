var reverseList = function(head) {
    let prev = null;

    while(head) {
        let nextNode = head.next;
        head.next = prev;
        prev = head;
        head = nextNode;
    }
    return prev
}