import { Request, Response } from "express";
import { createUserData } from "../data/createUserData"
import { generate } from "../services/generateId"

export default async function createUser(req: Request, res: Response){

    try {

        if(!req.body.name || !req.body.email || !req.body.password){
            throw new Error("Preencha os campos corretamente!")
        }

        const id: string = generate()

        await createUserData(
            id,
            req.body.name,
            req.body.email,
            req.body.password
        )

    }catch(error) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}