var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let saved = 0;

    while (l1 !== null || l2 !== null || saved !== 0) {
        let v1 = l1 !== null ? l1.val : 0;
        let v2 = l2 !== null ? l2.val : 0;

        let sum = v1 + v2 + saved;
        saved = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);

        current = current.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return dummy.next;
}