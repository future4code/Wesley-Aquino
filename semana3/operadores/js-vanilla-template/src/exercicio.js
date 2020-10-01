// 1. 

// a. false
// b. false
// c. true
// e. boolean

// 2.

// a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 6

// Escrita de Código

/*1.

let propriaIdade = prompt("Qual é a sua idade?")
let amigoIdade = prompt("Qual a idade do seu melhor amigo?")

Number(propriaIdade, amigoIdade)

let resultado = propriaIdade > amigoIdade

console.log("Sua idade é maior do que a do seu melhor amigo?")
console.log(resultado)

let diferenca = propriaIdade - amigoIdade
console.log(diferenca)    */

/* 2

let numeroPar = prompt("Digite um número par: ")
Number(numeroPar)
console.log(numeroPar)
let restoDivisao = numeroPar%2
console.log(restoDivisao)

// Qualquer número par terá o resto da divisão 0
// Um numero impar sempre terá o resto da divisão 1   */

/* 3.

const listaDeTarefas = []
let tarefa1 = prompt("Digite sua principal tarefa do dia: ")
let tarefa2 = prompt("Digite sua tarefa secundária do dia: ")
let tarefa3 = prompt("Digite sua última tarefa do dia: ")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas) 

let indice = prompt("Digite o número da tafera que já realizou: ")
console.log(indice)
listaDeTarefas.splice(indice -1, 1)
console.log(listaDeTarefas)    */


/* 4.

let nome = prompt("Qual é o seu nome?")
let email = prompt("Qual é o seu E-mail?")
console.log("O email", email, "foi cadastrado com sucesso. Seja Bem vind@", nome, "!")   */

// DESAFIOS EXTRAS

/* 1.

a.

const fahrenheit = 77
const kelvin = (fahrenheit - 32) * 5/9 + 273.15
console.log("Fahrenheit: ", fahrenheit)
console.log("Kelvin: ", kelvin)   */

/* b.


const celsius = 80
const fahrenheit = celsius * 9/5 + 32
console.log("Celsius: ", celsius)
console.log("Fahrenheit: ", fahrenheit)  */

/* c.

const celsius = 30
const fahrenheit = celsius * 9/5 + 32
const kelvin = celsius + 273
console.log("Fahrenheit: ", fahrenheit)
console.log("Kelvin: ", kelvin) */

/* d.

let celsius = prompt("Digite a temperatura em Celsius para converter para Fahrenheit e Kelvin: ")
let kelvin = Number(celsius) + 273.15
let fahrenheit = (Number(celsius) * 9/5) + 32
console.log("Celsius: ", Number(celsius))
console.log("Fahrenheit: ", fahrenheit)
console.log("Kelvin: ", kelvin)   */

// 2.

/* a.

const quilowattHora = 0.05
let consumo = 280

let valortotal = quilowattHora * consumo
console.log(valortotal)  */

/* b. 

const quilowattHora = 0.05
let consumo = prompt("Digite a quantidade de quilowatt-hora gasto")

let valortotal = quilowattHora * consumo
console.log(valortotal)    */

/* 3.

a.

let libra = 20
quilograma = libra / 2,2046
console.log(libra + " libras equivale a " + quilograma + "Kg") 

b.

let onca = 10.5
quilograma = onca / 35.274
console.log(onca + " onças equilavalem a " + quilograma + "Kg") 

c.

let milha = 100
metro = milha / 0.00062137
console.log(milha + " milhas equivalem a " + metro + " metros")  

d.

let pes = 50
metro = pes / 3.2808
console.log(pes + " pés equivalem a " + metro + " metros.")   

e.

let galao = 103.56
litro = galao / 0.26417
console.log(galao + " galão equivalem a " + litro + " litros")

f.

let xicara = 450 
litro = xicara * 0.24
console.log(xicara + " xic equivale a " + litro + " litros") 

g.

let milha = prompt("Digite o valor em milha para converter para metro: ")
metro = milha / 0.00062137
console.log(milha + " milhas equivalem a " + metro + " metros")    */



