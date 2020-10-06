/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


alert("Bem vindo ao jogo de Blackjack!")
if(confirm("Quer iniciar uma nova rodada?")){
   alert("Vamos começar a jogar!")
} else {
   alert("O jogo acabou!")
}

let usuarioCarta1 = comprarCarta();
let usuarioCarta2 = comprarCarta();
let usuarioCarta3 = comprarCarta();

let pontuacaoUsuario = usuarioCarta1.valor + usuarioCarta2.valor

console.log("Cartas do usuário: ", usuarioCarta1.texto + usuarioCarta2.texto,"Pontuação: ", pontuacaoUsuario)

let computadorCarta1 = comprarCarta();
let computadorCarta2 = comprarCarta();
let computadorCarta3 = comprarCarta();

let pontuacaoComputador = computadorCarta1.valor + computadorCarta2.valor

console.log("Cartas do computador: ", computadorCarta1.texto, "Pontuação: ", pontuacaoComputador) //Removido a segunda carta do computador

// 8.

if(usuarioCarta1 === "A" && usuarioCarta2 === "A"){
   console.log(usuarioCarta1.texto + usuarioCarta2.texto)
} else if(computadorCarta1 === "A" && computadorCarta2 === "A"){
   console.log(computadorCarta1.texto + computadorCarta2.texto)
} else {

}

// 9.

if(confirm("Suas cartas são " + usuarioCarta1.texto + usuarioCarta2.texto + ". A carta revelada do computador é " + computadorCarta1.texto + ". Deseja comprar mais uma carta?")){
   console.log(usuarioCarta1.texto, usuarioCarta2.texto, usuarioCarta3.texto, pontuacaoUsuario + usuarioCarta3.valor)
   console.log(computadorCarta1.texto, computadorCarta2.texto, pontuacaoComputador)
}

if(pontuacaoComputador > Usuario ){
   console.log("O Computador ganhou!")
} else if(pontuacaoComputador < pontuacaoUsuario){
   console.log("O Usuário ganhou!")
} else {
   console.log("Empate!")
}   

