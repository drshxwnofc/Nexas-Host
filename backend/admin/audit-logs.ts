import { KVStore } from '../storage/kv.ts';
const ledgerStore = new KVStore("ledger");

export async function getAuditLogs() {
    return await ledgerStore.getAll();
}
