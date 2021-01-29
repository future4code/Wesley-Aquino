import { Request, Response } from "express";
import createRecipeData from "../data/createRecipeData";
import { AuthenticationData, getTokenData } from "../services/authenticator";
import { generateId } from "../services/idGenerator"


export default async function createRecipe(req: Request, res: Response): Promise<void> {

    try {
    
        const token: string = req.headers.authorization!;
        const verifiedToken: AuthenticationData = getTokenData(token)
        if(!verifiedToken){
            throw new Error ("Não autorizado!")
        }

        const today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        
        const data = dd + '/' + mm + '/' + yyyy;

        const id = generateId()


        const result = await createRecipeData(
            id,
            req.body.title,
            req.body.description,
            data,
            verifiedToken.id
        )

        res.status(200).send(result)

    }catch(error) {

        res.status(400).send(error.message)

    }
}