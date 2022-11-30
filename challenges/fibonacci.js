let readline = require("readline")
let rl = readline.createInterface({input: process.stdin, output: process.stdout})

let ask = async (q) => {
    return new Promise((resolve, reject) => {
        rl.question(q, resolve)
    })
}

function userDefinedFibArray(limit = 100, startingNumberOne = 0, startingNumberTwo = 1) {
    
    let series = [startingNumberOne, startingNumberTwo]
    
    while (series.length < limit) {
        let valueTwo = series.pop()
        let valueOne = series.pop()
        let valueThree = valueOne + valueTwo
        series.push(valueOne, valueTwo, valueThree)
    }
    
    console.log(series)
}
// userDefinedFibArray(500, 3, 5)

let result = async () => {
    let limit = parseInt(await ask("Limit?"), 10)
    let s1 = parseInt(await ask("First Number?"))
    let s2 = parseInt(await ask("Second Number?"))
    
    return userDefinedFibArray(limit, s1, s2)
}

result()