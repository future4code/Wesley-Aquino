// EXERCICIO 1

// Está fazendo um loop de repetição enquanto o valor for menor que 5 ele continua rodando, quando atingir 5 pára a executção do código. (obs.: o incremento no valor é de 1 em 1 devido ao valor i++)
// Oconsole irá imprimir: 1 2 3 4 5, uma abaixo do outro.

//EXERCÍCIO 2

// a. Irá mostrar os números que são maiores que 18.
// b. Não é possível porque o for of é utilizado para percorrer um array inteiro e não pegar um elemento específico.


// EXERCÍCIO 3 

/* a.

let arrayOriginal = [10, 20, 30, 40, 50]

for (let numeros of arrayOriginal) {
    console.log(numeros)

    arrayOriginal++
}    */

/* b. 

let arrayOriginal = [10, 20, 30, 40, 50]

for (let numeros of arrayOriginal) {
    console.log(numeros / 10)
}   */

/* c.

let arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let novoArray = []

for (let numeros of arrayOriginal){
    if (numeros % 2 === 0)
    novoArray.push(numeros)    
}   

console.log(novoArray)        */

/* d. 

let arrayOriginal = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

for (let i = 0; i < arrayOriginal.length; i++){
    let elemento = arrayOriginal[i]
    console.log("O elemento do index", i, "é", elemento)
}   */
    

/* e. 

const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let maiorNumero = 0
let menorNumero = 10

for(let i = 0; i < arrayOriginal.length; i = i + 1){
    let elemento = arrayOriginal[i]
    if (maiorNumero < elemento) {
        maiorNumero = elemento
    }
    if (menorNumero > elemento) {
        menorNumero = elemento
    }

}
console.log(maiorNumero)
console.log(menorNumero)     */

//-------------DESAFIOS----------------

//1. Cria um triangulo retangulo de zeros

