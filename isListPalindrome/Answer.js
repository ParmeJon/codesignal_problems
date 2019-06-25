// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
    let arr = []
    while (l !== null) {
        arr.push(l.value)
        l = l.next
    }

    return arr.join('') === arr.reverse().join('')
}

// not really O(n)
