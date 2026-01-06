import { KVStore } from '../storage/kv.ts';
const usersStore = new KVStore("users");
const ledgerStore = new KVStore("ledger");
export async function getAdminStats() {
    const users = await usersStore.getAll();
    const ledger = await ledgerStore.getAll();
    return { totalUsers: Object.keys(users).length, totalTransactions: Object.keys(ledger).length };
}
