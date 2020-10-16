/* INTEPRETAÇÃO DE CÓDIGO

1. Este código converte o valor de dolar para reais. Através da função conversorDeMoeda que recebe um valor pelo prompt, retorna o valor em reais atraves da operação do return. Armazena o valor gerado na variavel meuDinheiro chamando a funçao com o valor 100. O console imprime o valor de entrada 100 multiplicado pelo valor que o usuario digitar.

2. Função que escolhe um tipo de investimento e calcula o valor que o investidor terá após o investimento. Função recebe como entrada dois parametros (tipoDeInvestimento, valor), na sequencia avalia qual caso de investimento que pe através do switch case. Variável novoMontante que chama a função de investimento em ações e valor 150 e outra que chama a mesma função com tipo de investimento tesouro direto e valor 200. Primeiro console.log imprime o valor de 165 e o segundo console.log imprime TIPO DE INVESTIMENTO INFORMADO INCORRETO.

3. Código percorre o array numeros com o for of e se o numero for avaliado como par (atraves do resto da divisão 0) ele coloca esse numero no array1, caso nao se enquadrar nesse ele joga o numero no array2 (numeros ímpares). Primeiro console.log imprime 'Quantidade total de numero 14'. Segundo console.log imprime '6'. Terceiro console.log imprime 8.

4. Primeiro if: funcionalidade usando for of passa pelo array e verifica se o numero é menor que infinito, automaticamente irá parar no ultimo numero do array e armazenar ele na variavel numero1. Segundo if: Se o número for maior que zero(positivo) a variavel numero2 recebe o ultimo numero do positivo do array. console.log mostra 1590 e 1590

*/

// LÓGICA DE PROGRAMAÇÃO

/* 1. Pode se percorrer com while, for, for of

lista = [1, 2, 3, 4, 5]
let i = 0

// com while

while ( i < lista.length){ 

    i++
}
console.log(lista) */

/*
// com for

lista = [10, 20, 30, 40, 50]

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}   

*/

//com for of
/*
lista = [100, 200, 300, 400, 500]

for (let numero of lista ){
    console.log(numero)
}   */

/* 2.

a) false
b) false
c) true
d) true 
e) true   */

/* 3.
const quantidadeDeNumerosPares = function(numero) {
let i = 0
while(i <= numero) { 
    
    console.log(i)
    
    i += 2
}  
}

const resultado = quantidadeDeNumerosPares(29) */


/* 4. 

function descobreTipoDoTriangulo(a, b, c){
    if (a === b && b === c) {
        console.log("Triangulo Equilátero!")        
    } else if (a !== b && b !== c && c !== a){
        console.log("Triangulo Escaleno!")
    } else if (a === b && b !== c || a === c && c !== b || b === c && c !== a){
        console.log("Triangulo Isósceles!")
    }
}
descobreTipoDoTriangulo(20, 20, 20)    */

/* 5. 

function numeros(a, b){
    if(a > b) {
        console.log(`O maior é ${a}`)
    } else {
        console.log(`O maior é ${b}`)
    }

    if(a % b === 0){
        console.log(`${a} é divisível por ${b}`)
    } else {
        console.log(`${a} não é divisível por ${b}`)
    }

    if(b % a === 0){
        console.log(`${b} é divisível por ${a}` )
    } else {
        console.log(`${b} não é divisível por ${a}`)
    }

    if(a > b){
        let maior = a - b
        console.log(`A diferença entre eles é ${maior}`)
    } else {
        let menor = b - a
        console.log(`A diferença entre eles é ${menor}`)
    }
}
numeros(30, 20)      */

// EXERCICIOS DE FUNÇÃO

//1. Criei a solução porém tive dificuldade para criar a função do exercício acima 

/*
const numeros = [1, 2, 15, 55, 20, 10, 17, 39, 50, 100, 99]


let maiorNumero = 0
let menorNumero = Infinity
let segundoMaior = 0
let segundoMenor = Infinity


for (let i = 0; i < numeros.length; i++){
    let elemento = numeros[i]

    if (maiorNumero < elemento){
        maiorNumero = elemento
    }

    if (segundoMaior < elemento && elemento !== maiorNumero){
        segundoMaior = elemento
    }

    if (menorNumero > elemento){
        menorNumero = elemento
    }
    if (segundoMenor > elemento && elemento !== menorNumero){
        segundoMenor = elemento
    }
}

console.log(segundoMaior)
console.log(segundoMenor)    */



//function classificaNumeros(array){

//}
//classificaNumeros(numeros)        

// 2.
/*
let sayHello = function(parametro) {
    alert ("Hello Labenu!")
}
const frase = sayHello("Hello Labenu!")   */

// EXERCICIOS DE OBJETOS

// 1. array de objetos é uma lista que contém objetos (um objetos guarda uma serie de informações sobre algo). Se aproxima mais da vida real: exemplo: uma pessoa tem nome, idade, cpf, rg, gostos, podemos guardar todas essas informações sobre ela em um unico objeto. Arrays de objetos podem ser utilizados para armazenar todas as informações sobre algo numa lista, a exemplo um site que cadastra o nome da pessoa, a cidade, o email, cria um objetos com isso e joga esse objeto no array de objetos de cadastro do site.

/* 2. 

function criaRetangulo(lado1, lado2){
    let perimetro = (lado1 + lado2) * 2
    let area = (lado1 * lado2)
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: perimetro,
        area: area
    }
    console.log(retangulo)
}
criaRetangulo(5, 10)   */

/* 3.

const filme = {
    titulo: "Um tira muito suspeito",
    ano: 1999,
    diretor: "Les Mayfield",
    atores: ["Martin Lawrence", "Peter Greene", "David Chappelle","Luke Wilson"]
}
console.log(`Venha assistir ao filme ${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`)    */

/* 4.


const fulano = {
    nome: "Fulano",
    idade: 99,
    email: "fulanodetal@gmail.com",
    endereco: "Rua dos bobos 0" 
}
const anonimizarPessoa = function(nome){
    const anonimo = {
        ...fulano,
        nome: nome
    }   
    return anonimo
}
const novoObjeto = anonimizarPessoa("Anônimo")

console.log(fulano)
console.log(novoObjeto)    */

// EXERCÍCIOS FUNÇÕES DE ARRAY

/* 1.
// a.

const pessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]
const soAdultos = pessoas.filter ((pessoa, index, pessoas) => {
     return pessoa.idade >= 20    
        
})
console.log(soAdultos)  

// b.

const soCriancasAdolescentes = pessoas.filter ((pessoa, index, pessoas) => {
     return pessoa.idade < 20    
        
})
console.log(soCriancasAdolescentes)      */

/* 2.

// a.
const array = [1, 2, 3, 4, 5, 6]

const dobraValor = array.map((numero, index, array) => {
    return numero * 2
})
console.log(dobraValor)

// b.
const transformaEmString = array.map((numero, index, array) => {
    return String(numero * 3)
})
console.log(transformaEmString)

// c.
const parOuImpar = array.map((numero, index, array) => {
    if(numero % 2 === 0){
        return `${numero} é par`
    }
    if (numero % 2 !== 0)
    return `${numero} é impar`
})
console.log(parOuImpar)   */

/* 3.

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},  
	{ nome: "Pedro", idade: 15, altura: 1.9}, 
	{ nome: "Luciano", idade: 22, altura: 1.8}, 
	{ nome: "Artur", idade: 10, altura: 1.2}, 
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const pessoasQuePodemAcessar = pessoas.filter ((pessoa, index, pessoas) => {
    if(pessoa.idade >= 14 && pessoa.idade < 60 && pessoa.altura >= 1.5){
        return pessoa
    
    }
})

const pessoasQueNaoPodemAcessar = pessoas.filter ((pessoa, index, pessoas) => {
    if(pessoa.idade < 14 || pessoa.idade > 60 || pessoa.altura < 1.5){
        return pessoa
    }
})

console.log(pessoasQuePodemAcessar)
console.log(pessoasQueNaoPodemAcessar)     */

/* 4.

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

let senhor = "Sr."
let senhora = "Sra."
let lembraLo = "lembrá-lo"
let lembraLa = "lembrá-la"

const consultasCanceladas = consultas.map((consulta, index, consultas)=> {
    if(consulta.cancelada === false && consulta.genero === "masculino"){
        return (`Olá, ${senhor} ${consulta.nome}. Estamos enviando esta mensagem para
        ${lembraLo} da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse
        o recebimento deste e-mail.`)
    } else if (consulta.cancelada === false && consulta.genero === "feminino") {
        return (`Olá, ${senhora} ${consulta.nome}. Estamos enviando esta mensagem para
        ${lembraLa} da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse
        o recebimento deste e-mail.`)
    } else if (consulta.cancelada === true && consulta.genero === "masculino"){
        return (`Olá, ${senhor} ${consulta.nome}. Infelizmente, sua consulta marcada
        para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
        contato conosco para remarcá-la`)
    } else if(consulta.cancelada === true && consulta.genero === "feminino"){
        return (`Olá, ${senhora} ${consulta.nome}. Infelizmente, sua consulta marcada
        para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
        contato conosco para remarcá-la`)
    }
    
})
console.log(consultasCanceladas)      */

/* 5.

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [200] }
]


contas.forEach((conta, index, contas) => {
    let soma = 0
    for(let valorCompra of conta.compras) {
    soma += valorCompra
    }
    conta.saldoTotal -= soma 
    
})
console.log(contas)     */