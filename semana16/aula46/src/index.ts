import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

app.get('/actor', testEndpoint)

async function testEndpoint(req:Request, res:Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}  

/*************************Letra B********************************/

const getActorByName = async (name: string): Promise<any> => {
  
  try { const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)
  console.log(result[0])

  return result[0]


  } catch (error) {
      console.log(error.sqlMessage || error.message)

    }
  }  

  /**********************Letra C**********************************/

  const getActorByGender = async (gender: string): Promise<any> => {
  
    try { const result = await connection.raw(`
      SELECT COUNT('${gender}') FROM Actor WHERE gender = '${gender}'
    `)
    console.log(result[0])
  
    return result[0]
  
  
    } catch (error) {
        console.log(error.sqlMessage || error.message)
  
      }
    }

    //Exercicio 2
    /************************Letra A***********************************/

    const updateActor = async (
      id: string,
      salary: number
    ): Promise<void> => {
      await connection("Actor").update({
        salary: salary
      })
      .where("id", id)
    }
    

    /********************Letra B**************************************/

    const deleteActor = async (
      id: string
    ): Promise<void> => {
      await connection("Actor").delete()
      .where("id", id)
    }
    

    /*********************Letra C**************************************/

    const calcAverage = async (gender: string): Promise<any> => {
      const result = await connection("Actor").avg("salary as salary")
      .where({gender})

      console.log(result[0])

      return result[0]
    }
  

    //Exercicio 3

    /********************Letra A**************************************/

    const getActorById = async (id: string): Promise<any> => {
      const result = await connection.raw(`SELECT * FROM Actor WHERE id = '${id}'`)

      return result[0]
    }

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id)

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({message: err.message})
  }
})

/*************************Letra B************************************/

const countActors = async (gender: string): Promise<any> => {
  const result: any = await connection.raw(`SELECT COUNT(gender) FROM Actor WHERE gender = '${gender}'`)

  console.log(result[0])
  return result[0]

}

app.get("/actor", async (req: Request, res: Response) => {
  try {
    const gender: string = req.query.gender as string
    const count = await countActors(gender)
    console.log(gender)
    console.log(count)
    res.status(200).send(count)
  } catch (err) {
    res.status(400).send(err.message)
  }
})





    