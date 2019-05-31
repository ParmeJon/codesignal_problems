function longestWord(text) {
let wordArray = []
let word = ''
let longest = ''
    for (let i = 0; i < text.length; i++) {
        if (text[i].toUpperCase() != text[i].toLowerCase()) {
            word += text[i]
        }
        if (text[i].toUpperCase() == text[i].toLowerCase() || i === text.length -1) {
            wordArray.push(word)
            word = ''
        }
    }

    if (wordArray.length === 0) {
        return word
    } else {
       return wordArray.reduce(function (a, b) { return a.length > b.length ? a : b; })
    }
}
