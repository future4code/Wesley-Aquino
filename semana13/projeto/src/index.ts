import express, { Request, Response} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users, user } from "./accounts";

const app = express()
app.use(express.json())
app.use(cors())


app.get("/users", (req: Request, res: Response) => {
    res.send(users)
})

app.post("/client", (req: Request, res: Response) => {

    let reqBody: user = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        idade: req.body.idade,
        nascimento: req.body.nascimento,
        saldo: req.body.saldo,
    }

    users.push(reqBody)
    res.status(200).send()
    console.log(users)
})



const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})