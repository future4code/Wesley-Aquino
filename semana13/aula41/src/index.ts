// 1) 
// a) Ele não aceita porque deve se atribuir um valor de acordo com a declaração
// b) Usando union type e declarar number | string
// c) Tipando as variáveis como no exempo abaixo:

// const person: {name: string, age: number, favoriteColor: string} = {
//     name: "wesley",
//     age: 25,
//     favoriteColor: "azul"
// }

// d)

// type person = {
//     name: string,
//     age: number,
//     favoriteColor: string
// }

// const wesley: person = {name: "Wesley" , age: 25, favoriteColor: "azul"} 
// const joao: person = {name: "João", age: 20, favoriteColor: "amarelo"}
// const carlos: person = {name: "Calor", age: 30, favoriteColor: "laranja"}
// const joaquim: person = {name: "Joaquim", age: 50, favoriteColor: "preto"}

// d)

// enum Colors {
//     RED = "red",
//     ORANGE = "orange",
//     YELLOW = "yellow",
//     GREEN = "green",
//     BLUE = "blue",
//     BLACK = "black",
//     VIOLET = "violet"
// }

// type person = {
//     name: string,
//     age: number,
//     class: Colors
// }

// const wesley: person = {name: "Wesley" , age: 25, class: Colors.BLACK} 
// const joao: person = {name: "João", age: 20, class: Colors.BLUE}
// const carlos: person = {name: "Calor", age: 30, class: Colors.YELLOW}
// const joaquim: person = {name: "Joaquim", age: 50, class: Colors.RED}


