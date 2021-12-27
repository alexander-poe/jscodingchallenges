
function sub() {
    count = 0
    for (let i = 0; i < arguments.length; i++) {
        count = count - arguments[i]
    }
    return count 
}

module.exports = sub