import * as jwt from "jsonwebtoken";

const expiresIn = "2min";
const generateToken(input: AuthenticationData): string