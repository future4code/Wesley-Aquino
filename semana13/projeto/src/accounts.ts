export type user = {
    nome: string,
    cpf: number,
    idade: number,
    nascimento: string,
    saldo: number,
}

export type account = {

}

export let users: user[] = [
    {nome: "Joaquim", cpf: 12345678912, idade: 25, nascimento: "02/11/1993", saldo: 5.000}, 
    {nome: "Joaquim", cpf: 98765432198, idade: 20, nascimento: "02/11/1993", saldo: 10.000}
]

