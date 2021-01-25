import knex from "knex";
import { connection } from "../index";

export const createUserData = async (
    id: string,
    name: string,
    email: string,
    password: string) => {

    await connection.insert({
        id,
        email,
        password
    })
    .into("User")
    }