const signal = process.argv[2]
const number1 = Number(process.argv[3])
const number2 = Number(process.argv[4])

if (signal === "add") {
    const result = number1 + number2
    console.log(result)
} else if (signal === "sub") {
    const result = number1 - number2
    console.log(result)
} else if (signal === "mult") {
    const result = number1 * number2
    console.log(result)
} else if (signal === "div") {
    const result = number1 / number2
    console.log(result)
} else {
    console.log("Operação inexistente!")
}