import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

import { user } from "./types/users"

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

// endpoints aqui

/****************************************************************************/
   


app.put("/user", async (req: Request, res: Response) => {

   let errorCode: number = 400;

   try{
      let result: user = {
         id: Date.now(),
         name: req.body.name,
         nickname: req.body.nickname,
         email: req.body.email
      }

      if(!result.name || !result.nickname || !result.email){
         errorCode = 422;
         throw new Error("Algo de errado não está certo! Tente Novamente!")
      } 
      await createNewUser(result)
      res.status(200).send("Usuário cadastrado com sucesso!")

   } catch (error){
      res.status(400).send(error.message)

   }
});



/****************************************************************************/
async function createNewUser(user: user): Promise<void> {
   try {

      await connection.raw(`
         INSERT INTO TodoListUser (id, name, nickname, email)
         VALUES(
            ${user.id},
            "${user.name}",
            "${user.nickname}",
            "${user.email}"
         )
      `)

   }catch (error) {

      console.log(error.sqlMessage || error.message)

   }
}



/****************************************************************************/

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
