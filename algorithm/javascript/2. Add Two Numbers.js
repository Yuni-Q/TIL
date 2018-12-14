// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 function addTwoNumbers(l1, l2, carry) {
    // Break case (end of lists)
    if (!l1 && !l2 && !carry) {
        return null;
    }
    

    // This allows us to carry numbers over
    carry = carry || 0;
    
    // Add values (either node could not exist (or both if carry))
    let valRes = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    
    // The carry for the next call
    let nextCarry = 0;
    
    // Only single digits are allowed
    if (valRes >= 10) {
        nextCarry = ~~(valRes / 10);
        valRes = valRes % 10;
    }
    
    // Create the new node
    let l3 = new ListNode(valRes);
    
    // Set the new nodes next node
    l3.next = addTwoNumbers((l1 ? l1.next : null), (l2 ? l2.next : null), nextCarry);
    
    return l3;
};