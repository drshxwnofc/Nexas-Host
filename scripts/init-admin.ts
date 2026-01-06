import { KVStore } from "../backend/storage/kv.ts";
import { generateJWT } from "../backend/auth/jwt.ts";
import { hash } from "https://deno.land/x/bcrypt@0.4.1/mod.ts";

const usersStore = new KVStore("users");

async function initAdmin() {
    const username = "admin";
    const password = crypto.getRandomValues(new Uint8Array(16)).join('');
    const hashed = await hash(password);

    const admin = {
        username,
        password: hashed,
        coins: Infinity,
        role: "admin",
        createdAt: Date.now(),
        referrals: []
    };

    await usersStore.set(username, admin);
    const token = await generateJWT({ username, role: "admin" }, 0); // No expiry

    console.log("Admin account created:");
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`JWT Token: ${token}`);
}

initAdmin();
