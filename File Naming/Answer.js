function fileNaming(names) {
let files = {}
    for (let i = 0; i< names.length; i++) {
        if (files[names[i]] !== undefined) {
            files[names[i]] += 1
            while (files[names[i] + '(' + files[names[i]] + ')'] !== undefined) {
                files[names[i]] += 1
            }
            names[i] += '(' + files[names[i]] + ')'
            files[names[i]] = 0
        } else {
            files[names[i]] = 0
        }
    }
    return names
}
