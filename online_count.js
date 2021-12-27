// write a function that finds the number of people online 
// and returns and online count
// { alcia : online, dave: offline, paul: online} should return 2.

const onlineCount = (peoples) => {
    count = 0
    try {
        for (const person in peoples) {
            if (peoples[person] == 'online') {
                count += 1
            }
        }
    } catch(err) {
        console.log(err, "error")
    }
    return count
}

onlineCount("dave, steve,stee")
module.exports = onlineCount