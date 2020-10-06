function criaTarefa(){
    
    const input = document.getElementById("input")
    const diaDaSemana = document.getElementById("dias-semana")
    const listaDeTarefas = document.getElementById(diaDaSemana.value)

    if(input.value === ""){
        alert ("Digite uma tarefa!")
        return
    }
    listaDeTarefas.innerHTML += `<li onclick="riscaTarefas(this)" id="elemento">${input.value}</li>`
    input.value = ""
}
function riscaTarefas(id){
    id.style.textDecoration = "line-through";
    
    //const elementoNovo = document.getElementById("elemento").style.textDecoration ="line-through"
    //console.log(elementoNovo.value)
}