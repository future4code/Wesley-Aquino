import { connection } from "../index";

export default async function followUserData(follower_id: string, following_id: string) {
    
    await connection.raw(`
    INSERT INTO following
    VALUES("${follower_id}", "${following_id}")
    `)
}