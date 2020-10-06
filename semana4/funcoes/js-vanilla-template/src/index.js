// EXERCÍCIO 1

// a. Será impresso o número do parametro multiplicado por 5. Primeiro parametro retotona 10 e segundo parametro retorna 50
 
// b. Não apareceria nada porque o resultado não foi armazenado em uma variável para ser imprimido

// EXERCICIO 2

// a. A primeira saida será pelo console.log que imprimirá os nomes Darvas[0], Caio[1].
// b. Será impresso Amanda[0] e Caio[1]

// EXERCÍCIO 3

// a. Cria um array vazio para que seja preenchido com números pares multiplicado por ele mesmo. Nome: dobradorDePares

//  EXERCÍCIO 4

/*  a. 

let faleSobreMim = () => {
	return "Eu sou o Wesley, tenho 26 anos, moro em São Paulo e sou estudante"
}
const frase = faleSobreMim()
console.log(frase)    */

/* b. SOLUÇÃO 1

function faleSobreMim(nome, idade, cidade, estuda) {
	if (estuda) {
		console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e estudo programação`)
	} else {
		console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e não estudo programação`)
	}
}
faleSobreMim("Wesley", 20, "São Paulo", true)
faleSobreMim("João", 30, "Santos", false)     */

/* SOLUÇÃO 2

function faleSobreMim(nome, idade, cidade, estuda) {
	console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e estudo programação`)
}
faleSobreMim("Wesley", 20, "São Paulo", true)    */

// EXERCICIO 5

/* a. 

let soma = (a, b) => {
	let resultadoDaFuncao = a + b
	return resultadoDaFuncao
}
const a = Number(prompt("Digite um número: "))
const b = Number(prompt("Digite outro número: "))
const resultado = soma(a, b)
console.log(resultado)     */

/* b. 

let soma = (a, b) => {
	let resultadoDaFuncao = a >= b
	return resultadoDaFuncao
}

const a = Number(prompt("Digite um número: "))
const b = Number(prompt("Digite outro número: "))
const resultado = a >= b
console.log(resultado)     */

/* c. 
contador = 0

function escreverUmTexto (texto) {
	while(contador < 10) {

	console.log(texto)

	contador++
}
}
escreverUmTexto(prompt("Digite uma mensagem: "))     */

// EXERCICIO 6

/* a. 

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function devolverQuantidadeArray (array) {
	let resultadoDaFuncao = array.length	
	return resultadoDaFuncao	

	
}
console.log(devolverQuantidadeArray(array))     */
    

/* b.

let numeroPar = (numeroUsuario) => {
	let resultadoDaFuncao
	if (numeroUsuario % 2 === 0){
		resultadoDaFuncao = true	
	} else {
		resultadoDaFuncao = false
	}
	return resultadoDaFuncao
}
let numeroUsuario = Number(prompt("Digite um número para saber se é par: "))
let resultadoSePar = numeroPar(numeroUsuario)
console.log(resultadoSePar)        */

/* c.

const arrayDeNumeros = [2, 10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let = novoArray = []
i = 0

function saberSeEPar (array) {
	for(let i of arrayDeNumeros){
	
	if(i % 2 === 0){
		novoArray.push(i)	
	}
}
console.log(`Este array tem ${novoArray.length} números pares.`)
}
saberSeEPar(arrayDeNumeros)    */

/* d. 

const arrayDeNumeros = [2, 10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let = novoArray = []
i = 0

function saberSeEPar (array) {
	for(let i of arrayDeNumeros){

	if(i % 2 === 0){
		console.log(true)
	}
	}
}
saberSeEPar(arrayDeNumeros)     */

// DESAFIO 1

// 1.

let chamaOutrafuncao = (argumento) => {
	return argumento
}
console.log(chamaOutrafuncao(100))   

// 2. incompleto

const chamaOutrafuncao2 = (a, b) => {	
	return a+b
}
const resultado = chamaOutraFuncao2(200, 300)   

