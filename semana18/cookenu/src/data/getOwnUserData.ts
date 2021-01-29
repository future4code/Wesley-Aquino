import { connection } from "../index";

export async function getOwnUserData(id: string) {

    const result = await connection.select("name", "email").from("cookenu_users").where({id})

    return result[0]
}