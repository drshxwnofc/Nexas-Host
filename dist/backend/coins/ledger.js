export class Ledger {
    constructor() {
        this.storageKey = "ledger";
    }
    async addTransaction(tx) {
        const ledger = JSON.parse(localStorage.getItem(this.storageKey) || "[]");
        ledger.push(tx);
        localStorage.setItem(this.storageKey, JSON.stringify(ledger));
    }
    async getTransactions(user) {
        const ledger = JSON.parse(localStorage.getItem(this.storageKey) || "[]");
        return user ? ledger.filter((t) => t.from === user || t.to === user) : ledger;
    }
}
