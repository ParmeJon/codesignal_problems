// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

// outputted ARRAY because codesignal platform wasn't accepting linkedLists.

function addTwoHugeNumbers(a, b) {
  let stackA = createStack(a);
  let stackB = createStack(b);
  let sumStack = [];
  let carry = 0;
  while (stackA.length !== 0 || stackB.length !== 0 || carry === 1) {
    let newNum = (stackA.pop() || 0) + (stackB.pop() || 0) + carry;
    carry = 0;
    if (newNum > 9999) {
      carry = 1;
      newNum -= 10000;
    }
    sumStack.unshift(newNum);
  }
  return sumStack;
}

function createStack(list) {
  let stack = [];
  while (list) {
    stack.push(list.value);
    list = list.next;
  }
  return stack;
}
