function buildPalindrome(st) {
let reverseArray = st.split('').reverse()
let stArray = st.split('')
let counter = 0
    while (reverseArray.join('').split('').reverse().join('') !== reverseArray.join('')) {
         reverseArray.splice(counter, 0, stArray.shift())
        counter += 1

    }
    return reverseArray.join('')
}
