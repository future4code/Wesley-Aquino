import { Request, Response } from "express";
import { generateId } from "../services/idGenerator"
import signupData from "../data/signupData"
import { generateToken } from "../services/authenticator";


export default async function signup(req: Request, res: Response): Promise<void> {
    
    try {

        if(!req.body.name){
            throw new Error ("Please fill name input correctly!")
        }
        if(!req.body.email){
            throw new Error ("Please fill email input correctly!")
        }
        if(!req.body.password || req.body.password.length < 6){
            throw new Error ("Please fill password input correctly!")
        }

        const id = generateId()

        await signupData(
            id,
            req.body.name,
            req.body.email,
            req.body.password
        )

        const token = generateToken(id)

        res.status(200).send({token})


    } catch(error) {
        res.status(400).send(error.message || error.sqlMessage);
        
     

    }
}