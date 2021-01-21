import { Request, Response } from "express";
import selectAllUsers from "../data/selectAllUsers";
import { getUserByName } from "../data/selectAllUsers";
import { searchUser } from "../types/type";


export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 /**********************************************************************/

 export const getUserName = async(req: Request,res: Response): Promise<void> =>{
    try {
       const {name} = req.query as searchUser
       const users = await getUserByName(`${name}`)

 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }