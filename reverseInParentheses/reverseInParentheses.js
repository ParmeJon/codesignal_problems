function reverseInParentheses(s) {
//     while there are still parentheses continue this.
    while (s.indexOf(")") !== -1) {
//         identify the closing index that matches with an opening index.
        let closing = s.indexOf(")");
//         you want to grab the corresponding '(' which has to be in front of the identified ')'
//         can also be done with substring s.substring(0, closing).lastIndexOf("(")
        let opening = s.lastIndexOf("(", closing);
//             can also be done with s.slice(0, opening)
        let start = s.substring(0, opening);
//         reverse the letters in the found closing and opening parentheses
        let middle = s.substring(opening + 1, closing).split("").reverse().join("");
        let end = s.substring(closing + 1, s.length);
        console.log(start, middle, end)
        s = start + middle + end;
    }
    return s;
}
