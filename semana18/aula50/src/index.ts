import knex from "knex";
import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { generate } from "./services/generateId";

console.log(generate())

dotenv.config();

const app = express();
app.use(express.json());

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});



const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});