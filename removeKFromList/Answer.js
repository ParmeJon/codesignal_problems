// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {

    // console.log(l)
    let topNode = l
    let currentNode = l

    if (currentNode === null) {
        return []
    }

    while (currentNode !== null && currentNode.value === k) {
        topNode = currentNode.next
        currentNode = currentNode.next
    }


    while (currentNode !== null && currentNode.next !== null) {
        if (currentNode.next.value === k) {
            currentNode.next = currentNode.next.next
        } else {
        currentNode = currentNode.next
        }
    }

    return topNode
}
