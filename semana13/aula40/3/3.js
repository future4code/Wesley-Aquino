const tasks = ["Beber"]

const newTask = process.argv[2]
tasks.push(newTask)

console.log("Tarefa adicionada com sucesso!")
console.log(tasks)