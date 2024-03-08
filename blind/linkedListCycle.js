const hasCycle = (head) => {
    if(!head) return false;

    let slow = head;
    let fast = head;
    
    while(fast) {
        if(!fast.next) {
            return false;
        } else {
            slow = slow.next;
            fast = fast.next.next;
        }

        if(slow === fast) return true;
    }

    return false;
}