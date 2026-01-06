import { create, verify } from "https://cdn.skypack.dev/djwt@2.8.0";
const key = crypto.subtle.importKey("raw", new TextEncoder().encode(Deno.env.get("JWT_SECRET") || "supersecret"), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
export async function generateJWT(payload, exp = 3600) {
    const jwt = await create({ alg: "HS256", typ: "JWT", exp: Date.now() / 1000 + exp }, payload, key);
    return jwt;
}
export async function verifyJWT(token) {
    try {
        return await verify(token, key);
    }
    catch {
        return null;
    }
}
