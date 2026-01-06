import { addTransaction } from './ledger.ts';
export async function sendCoins(from, to, amount) {
    if (from === to)
        throw new Error("Cannot send coins to yourself");
    if (amount <= 0)
        throw new Error("Amount must be positive");
    // Here: validate balances (mock)
    const tx = { from, to, amount, reason: "transfer", timestamp: Date.now() };
    await addTransaction(tx);
    return tx;
}
