/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  let node = new ListNode(0);
  let head = node;

  const list = [];

  while (l1 !== null || l2 !== null) {
    if (l1 !== null) {
      list.push(l1.val);
      l1 = l1.next;
    }
    if (l2 !== null) {
      list.push(l2.val);
      l2 = l2.next;
    }
  }
  list.sort((a, b) => a - b);
  for (let i = 0; i < list.length; i++) {
    node.next = new ListNode(list[i]);
    node = node.next;
  }

  return head.next;
};
const l1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
const l2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };

mergeTwoLists(l1, l2);
