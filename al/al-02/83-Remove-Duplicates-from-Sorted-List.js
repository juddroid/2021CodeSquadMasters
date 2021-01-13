// 83. Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
// Return the linked list sorted as well.

// Example 1:
// Input: head = [1,1,2]
// Output: [1,2]

// Example 2:
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

// Constraints:
// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const test = function () {
  const ex1_head = { val: 1, next: { val: 1, next: { val: 2, next: null } } };
  const ex2_head = {
    val: 1,
    next: {
      val: 1,
      next: { val: 2, next: { val: 2, next: { val: 3, next: null } } },
    },
  };

  const ex1_output = { val: 1, next: { val: 2, next: null } };
  const ex2_output = { val: 0, next: { val: 2, next: { val: 3, next: null } } };

  const result1 = deleteDuplicates(ex1_head);
  const result2 = deleteDuplicates(ex2_head);

  function checkObj(obj, expect) {
    let currentOb = obj;
    let currentEx = expect;
    let check = false;
    while (currentOb) {
      if (currentOb.val === currentEx.val) {
        check = true;
      } else {
        check = false;
        return check;
      }
      currentOb = currentOb.next;
      currentEx = currentEx.next;
    }
    return check;
  }

  console.log("------------------------------------------------------------");
  console.log("--------------------------- Test ---------------------------");
  console.log("------------------------------------------------------------");
  console.log(`          case1: ${checkObj(result1, ex1_output)}`);
  console.log("------------------------------------------------------------");
  console.log(`          case2: ${checkObj(result2, ex2_output)}`);
  console.log("------------------------------------------------------------");
};

const head = { val: 1, next: { val: 1, next: { val: 2, next: null } } };

var deleteDuplicates = function (head) {
  let current = head;
  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};

test();
