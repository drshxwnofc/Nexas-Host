import { KVStore } from '../storage/kv.ts';
import { addTransaction } from './ledger.ts';

const usersStore = new KVStore("users");

export async function dailyLogin(username: string) {
    const user = await usersStore.get(username);
    if(!user) throw new Error("User not found");

    const lastLogin = user.lastLogin || 0;
    const now = Date.now();
    if(now - lastLogin < 24*3600*1000) return { message: "Already claimed today" };

    user.coins += 10; // Daily reward
    user.lastLogin = now;

    await usersStore.set(username, user);
    await addTransaction({
        from: "system",
        to: username,
        amount: 10,
        reason: "daily login",
        timestamp: now
    });

    return { message: "Daily coins granted", coins: user.coins };
}
