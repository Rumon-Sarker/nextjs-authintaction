import { CreateToken } from "./JWTHelper";

export async function TokenCookie(email) {
    let token = await CreateToken(email)
    return { 'Set-Cookie': `token=${token}; MAx-Age=7200; Secure; HttpOnly; Path=/; SameSite=Strict` }
}