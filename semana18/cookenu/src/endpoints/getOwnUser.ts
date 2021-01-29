import { Request, Response } from "express";
import { getOwnUserData } from "../data/getOwnUserData";
import { AuthenticationData, getTokenData } from "../services/authenticator";


export default async function getOwnUser(req: Request, res: Response): Promise<any> {

    try {
    
        const token: string = req.headers.authorization!;
        const verifiedToken: AuthenticationData = getTokenData(token)
        if(!verifiedToken){
            throw new Error ("Não autorizado!")
        }


        const result = await getOwnUserData(
            verifiedToken.id,
        )

        res.status(200).send(result)

    }catch(error) {

        res.status(400).send(error.message)

    }
}