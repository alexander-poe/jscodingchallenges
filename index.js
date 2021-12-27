function add() {
    count = 0
    for (var i = 0; i < arguments.length; i++) {
        if (typeof(arguments[i]) == 'number') {
            count += arguments[i]
        } else {
            throw new TypeError('add() expects only numbers.')
        }
    }
    return count
}

module.exports = add