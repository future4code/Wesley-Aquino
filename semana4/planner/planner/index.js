function criaTarefa(){
    
    const input = document.getElementById("input")
    const diaDaSemana = document.getElementById("dias-semana")
    const listaDeTarefas = document.getElementById(diaDaSemana.value)

    if(input.value === ""){
        alert ("Digite uma tarefa!")
        return
    }
    listaDeTarefas.innerHTML += `<li>${input.value}</li>`
    input.value = ""
///}
//function riscaTarefas(){
//
//}