import { KVStore } from '../storage/kv.ts';
import { addTransaction } from './ledger.ts';

const usersStore = new KVStore("users");

export async function referUser(referrer: string, referee: string) {
    if(referrer === referee) throw new Error("Cannot refer yourself");

    const refUser = await usersStore.get(referrer);
    const newUser = await usersStore.get(referee);

    if(!refUser || !newUser) throw new Error("Invalid users");

    // Prevent multiple referral coins
    if(refUser.referrals?.includes(referee)) throw new Error("Referral already counted");

    refUser.coins += 50;
    refUser.referrals.push(referee);
    await usersStore.set(referrer, refUser);

    await addTransaction({
        from: "system",
        to: referrer,
        amount: 50,
        reason: `Referral of ${referee}`,
        timestamp: Date.now()
    });

    return { message: "Referral bonus granted", coins: refUser.coins };
}
