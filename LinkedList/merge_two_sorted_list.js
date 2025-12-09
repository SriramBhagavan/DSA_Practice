var mergeTwoLists = function(l1, l2) {
    let start = new ListNode();
    let cur = start;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }

    if (!l1) cur.next = l2;
    if (!l2) cur.next = l1;

    return start.next;
};
