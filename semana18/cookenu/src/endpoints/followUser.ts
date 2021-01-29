import { Request, Response } from "express";
import followUserData from "../data/createRecipeData";
import { AuthenticationData, getTokenData } from "../services/authenticator";


export default async function followUser(req: Request, res: Response): Promise<void> {

    try {
    
        const token: string = req.headers.authorization!;
        const verifiedToken: AuthenticationData = getTokenData(token)
        if(!verifiedToken){
            throw new Error ("Não autorizado!")
        }


        await followUserData(
            verifiedToken.id,
            req.body.following_id,
        )

        res.status(200).send("Seguindo")

    }catch(error) {

        res.status(400).send(error.message)

    }
}