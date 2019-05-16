function variableName(name) {
    if (!isNaN(name[0])) {
        return false
    }
    for ( let i = 0; i < name.length; i++) {
        if (name[i] !== '_' && !name[i].match(/^[0-9a-zA-Z]+$/)) {
            return false
            }
    }
    return true
}
