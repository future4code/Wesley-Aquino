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

alert("Bem vindo ao jogo de Blackjack!")  // Inicio do Jogo. Pergunta se o usuario que iniciar. Se responder não o jogo encerra
if(confirm("Quer iniciar uma nova rodada?")){
   alert("Vamos começar a jogar!")
} else {
   alert("O jogo acabou!")
}

const usuarioCarta1 = comprarCarta(); // declaração de variaveis das cartas do usuário
const usuarioCarta2 = comprarCarta();

let pontuacaoUsuario = usuarioCarta1.valor + usuarioCarta2.valor  // soma os valores das cartas gerando a pontuação

console.log("Cartas do usuário: ", usuarioCarta1.texto + usuarioCarta2.texto,"Pontuação: ", pontuacaoUsuario)

const computadorCarta1 = comprarCarta(); //declaração de cariaveis das cartas do computador
const computadorCarta2 = comprarCarta();

let pontuacaoComputador = computadorCarta1.valor + computadorCarta2.valor // soma os valores das cartas gerando a pontuação

console.log("Cartas do computador: ", computadorCarta1.texto + computadorCarta2.texto, "Pontuação: ", pontuacaoComputador) 

if(pontuacaoComputador > pontuacaoUsuario){   // if para testar os valores e dizer o vencedor ou empate.
   console.log("O Computador ganhou!")
} else if(pontuacaoComputador < pontuacaoUsuario){
   console.log("O Usuário ganhou!") 
} else {
   console.log("Empate!")
}
