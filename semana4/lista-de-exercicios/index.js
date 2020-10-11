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

// 5. 
/*

function qualNumeroEMaior(a, b){
    let diferenca = a - b
    if(a > b){
        let maior = a
        console.log("O é maior é ", a)
    } else {
        console.log("O maior é ", b)
    }

    if(a % b === 0){
        console.log(a, " não é divisivel por", b)
    } else {
        console.log("")
    }
    console.log("a diferença entre ele é ", diferenca)
}
qualNumeroEMaior(15, 30)    */

// EXERCICIOS DE FUNÇÃO

/*1.

let maiorNumero = 0
let menorNumero = Infinity

let array = [1, 5, 15, 55, 20, 10, 17, 39, 50]

function classificaNumeros(array){

}
classificaNumeros(array)    */

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
    console.log(lado1, lado2, perimetro, area)
}
criaRetangulo(5, 10)   */
