// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function addTwoHugeNumbers(a, b) {
  let aNum = toFullNum(a);
  let bNum = toFullNum(b);

  let sumNum = parseInt(aNum) + parseInt(bNum);
  console.log(ListNode(1));

  return convertToList(sumNum);
}

function toFullNum(list) {
  let fullNum = "";
  while (list) {
    let stringValue = list.value.toString();
    let prependZeroCount = 4 - stringValue.length;
    while (prependZeroCount > 0) {
      fullNum += "0";
      prependZeroCount--;
    }
    for (const num of stringValue) {
      fullNum += num;
    }
    list = list.next;
  }
  return fullNum;
}

function convertToList(num) {
  let stringNum = num.toString();
  let initBreak = stringNum.length % 4;
  let arrNum = stringNum.split("");
  let nodeNum = "";

  while (initBreak > 0) {
    nodeNum += arrNum.shift();
    initBreak--;
  }

  let answerArr = [];
  if (nodeNum !== "") {
    answerArr.push(parseInt(nodeNum));
  }
  // console.log(nodeHead.value)
  // let node = nodeHead
  console.log(arrNum);

  while (arrNum.length > 0) {
    nodeNum = "";
    for (let i = 0; i < 4; i++) {
      nodeNum += arrNum.shift();
    }
    answerArr.push(parseInt(nodeNum));
  }
  return answerArr;
}
