// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGOS

// 1. O código faz uma operação de resto da divisão, utilizando o valor 0 pra saber se o número é par. Se o resultado não for 0 o número é impar. O número só passa no teste se for par.

// 2. 

// a. O código serve como um catálogo de preços de produtos, se o porduto for o referido na condição ele recebe seu devido preço, se não, recebe o preço default de R$ 5.
// b. O preço da fruta Maçã é 2.25
// c. "O preço da fruta Pêra é R$ 5.5" porém o código rodaria desnecessariamente até a próxima ou proximas estapas de verificação.

//3. 

// a. Recebendo um número do usuário em string pelo prompt e transformando em number
// b. Se fosse 10 passaria no teste porque é maior que 0, se fosse -10 seria reprovado porque é menor que 0
// c. Não haverá erro, porem a variável mensagem não será imporessa para o usuário devido a identação.

/* 4.

const idade = Number(prompt("Digite sua idade: "))
console.log("Sua idade é: ", idade)

if(idade < 18) {
    console.log("Você não pode dirigir porque é menor de idade!")
} else {
    console.log("Você já tem idade para dirigir!")
} */

/* 5.

const turno = prompt("Em qual turno você estuda? [M=matutino/V=vespertino/N=Noturno]").toLocaleLowerCase()

if(turno === "m"){
    console.log("Bom dia!")
} else if(turno === "v"){
    console.log("Boa tarde!")
} else if(turno === "n"){
    console.log("Boa noite!")
} else {
    console.log("Este turno não existe!")
}    */


/* 6.


const turno = prompt("Em qual turno você estuda? [M=matutino/V=vespertino/N=Noturno]").toLowerCase()
switch (turno){
    case 'm':
        console.log("Bom dia!")
        break
    case 'v':
        console.log("Boa tarde!")
        break
    case 'n':
        console.log("Boa noite!")
        break
    default:
        console.log('Esse turno não existe!')    
} */

/* 7

const genero = prompt("Qual gênero de filme você vai assistir?").toLocaleLowerCase()
const valorIngresso = prompt("Qual o valor do ingresso?").toLocaleLowerCase()
if(genero === "fantasia" && valorIngresso < 15){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}  */

/* DESAFIO 1

const genero = prompt("Qual gênero de filme você vai assistir?").toLocaleLowerCase()
const valorIngresso = prompt("Qual o valor do ingresso?").toLocaleLowerCase()
if(genero === "fantasia" && valorIngresso < 15){
    const snack = console.log("Qual snack você gostaria de comprar?")
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}     */

/* DESAFIO 2 a. (Foi feito em duas etapas)


const nome = prompt("Digite seu nome completo: ").toUpperCase()
const tipoJogo = prompt("Digite o tipo de jogo: [IN = Internacional / DO = Doméstico]").toUpperCase()
const etapaJogo = prompt("Digite a etapa do jogo [SF = Semi-final / DT = Terceiro Lugar / FI = Final]").toUpperCase()
const categoria = Number(prompt("Digite a categoria desejada: [1, 2, 3, 4]"))
const quantidadeIngresso = Number(prompt("Digite a quantidade de ingressos desejada: "))


if((tipoJogo === "DO") && (etapaJogo === "SF") && (categoria === 1)){
    valorIngressoNacional = 1320      
} else if(tipoJogo === "DO" && etapaJogo === "SF" && categoria === 2){
    valorIngressoNacional = 880
} else if(tipoJogo === "DO" && etapaJogo === "SF" && categoria === 3){
    valorIngressoNacional = 550
} else if(tipoJogo === "DO" && etapaJogo === "SF" && categoria === 4){
    valorIngressoNacional = 220
} else if(tipoJogo === "DO" && etapaJogo === "DT" && categoria === 1){
    valorIngressoNacional = 660
} else if(tipoJogo === "DO" && etapaJogo === "DT" && categoria === 2){
    valorIngressoNacional = 440
} else if(tipoJogo === "DO" && etapaJogo === "DT" && categoria === 3){
    valorIngressoNacional = 330        
} else if(tipoJogo === "DO" && etapaJogo === "DT" && categoria === 4){
    valorIngressoNacional = 170
} else if(tipoJogo === "DO" && etapaJogo === "FI" && categoria === 1){
    valorIngressoNacional = 1980
} else if(tipoJogo === "DO" && etapaJogo === "FI" && categoria === 2){
    valorIngressoNacional = 1320
} else if(tipoJogo === "DO" && etapaJogo === "FI" && categoria === 3){
    valorIngressoNacional = 880        
} else if(tipoJogo === "DO" && etapaJogo === "FI" && categoria === 4){
    valorIngressoNacional = 330
}

let total = valorIngressoNacional * quantidadeIngresso

console.log("---Dados da compra---")
console.log("Nome: ", nome)
console.log("Tipo de jogo: ", tipoJogo)
console.log("Etapa do jogo: ", etapaJogo)
console.log("Categoria: ", categoria)
console.log("Quantidade de ingressos: ", quantidadeIngresso)
console.log("---Valores---")
console.log("Valor do ingresso: R$ ", valorIngressoNacional)
console.log("Valor total R$: ", total)  */


/* DESAFIO 2 b.

const nome = prompt("Digite seu nome completo: ").toUpperCase()
const tipoJogo = prompt("Digite o tipo de jogo: [IN = Internacional / DO = Doméstico]").toUpperCase()
const etapaJogo = prompt("Digite a etapa do jogo [SF = Semi-final / DT = Terceiro Lugar / FI = Final]").toUpperCase()
const categoria = Number(prompt("Digite a categoria desejada: [1, 2, 3, 4]"))
const quantidadeIngresso = Number(prompt("Digite a quantidade de ingressos desejada: "))

if((tipoJogo === "DO") && (etapaJogo === "SF") && (categoria === 1)){
    valorIngressoInternacional = 1320      
} else if(tipoJogo === "IN" && etapaJogo === "SF" && categoria === 2){
    valorIngressoInternacional = 880
} else if(tipoJogo === "IN" && etapaJogo === "SF" && categoria === 3){
    valorIngressoInternacional = 550
} else if(tipoJogo === "IN" && etapaJogo === "SF" && categoria === 4){
    valorIngressoInternacional = 220
} else if(tipoJogo === "IN" && etapaJogo === "DT" && categoria === 1){
    valorIngressoInternacional = 660
} else if(tipoJogo === "IN" && etapaJogo === "DT" && categoria === 2){
    valorIngressoInternacional = 440
} else if(tipoJogo === "IN" && etapaJogo === "DT" && categoria === 3){
    valorIngressoInternacional = 330        
} else if(tipoJogo === "IN" && etapaJogo === "DT" && categoria === 4){
    valorIngressoInternacional = 170
} else if(tipoJogo === "IN" && etapaJogo === "FI" && categoria === 1){
    valorIngressoInternacional = 1980
} else if(tipoJogo === "IN" && etapaJogo === "FI" && categoria === 2){
    valorIngressoInternacional = 1320
} else if(tipoJogo === "IN" && etapaJogo === "FI" && categoria === 3){
    valorIngressoInternacional = 880        
} else if(tipoJogo === "IN" && etapaJogo === "FI" && categoria === 4){
    valorIngressoInternacional = 330
}

let ingresso = valorIngressoInternacional / 4.10
let total = valorIngressoInternacional * quantidadeIngresso / 4.10

console.log("---Dados da compra---")
console.log("Nome: ", nome)
console.log("Tipo de jogo: ", tipoJogo)
console.log("Etapa do jogo: ", etapaJogo)
console.log("Categoria: ", categoria)
console.log("Quantidade de ingressos: ", quantidadeIngresso)
console.log("---Valores---")
console.log("Valor do ingresso: R$ ", ingresso)
console.log("Valor total R$: ", total)  */
