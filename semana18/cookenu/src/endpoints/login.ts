import { Request, Response } from "express";
import { getUserByEmail } from "../data/getUserByEmail";
import { generateToken } from "../services/authenticator";

export default async function login (req: Request, res: Response){
    try{
        const input: loginInput = {
            email: req.body.email,
            password: req.body.password
        }
        if(!input.email || !input.password) {
            throw new Error ("Confira os campos email e senha!")
        }

        const user = await getUserByEmail(input.email)
        if(!user){
            throw new Error("Usuário não encontrado!");            
        }

        if(user.password !== input.password){
            throw new Error ("Senha incorreta!")
        }

        const token = generateToken(user.id)

        res.status(200).send({token})


    }catch(error){
        res.status(400).send(error.message)
    }
}


export type loginInput = {
    email: string,
    password: string
}