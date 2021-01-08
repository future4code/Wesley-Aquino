const nameUser = process.argv[2]
const age = Number(process.argv[3])
const moreYears = age + 7

console.log(`Olá ${nameUser}, você tem ${age} anos! Em sete anos você terá ${moreYears} anos.`)