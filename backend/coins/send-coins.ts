import { KVStore } from '../storage/kv.ts';
import { addTransaction } from './ledger.ts';

const usersStore = new KVStore("users");

export async function sendCoins(sender: string, receiver: string, amount: number) {
    if(sender === receiver) throw new Error("Cannot send coins to yourself");
    if(amount <= 0) throw new Error("Amount must be positive");

    const from = await usersStore.get(sender);
    const to = await usersStore.get(receiver);

    if(!from || !to) throw new Error("Invalid users");
    if(from.coins < amount) throw new Error("Insufficient balance");

    from.coins -= amount;
    to.coins += amount;

    await usersStore.set(sender, from);
    await usersStore.set(receiver, to);

    await addTransaction({
        from: sender,
        to: receiver,
        amount,
        reason: "transfer",
        timestamp: Date.now()
    });

    return { message: "Transfer successful", senderCoins: from.coins, receiverCoins: to.coins };
}
