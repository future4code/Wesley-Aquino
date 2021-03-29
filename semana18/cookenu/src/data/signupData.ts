import { connection } from "../index";

export default async function signupData(id: string, name: string, email: string, password: string) {
    
    await connection.raw(`
    INSERT INTO cookenu_users
    VALUES("${id}", "${name}", "${email}", "${password}")
    `)
}