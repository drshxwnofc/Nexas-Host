interface Transaction {
  from: string;
  to: string;
  amount: number;
  timestamp: number;
  reason: string;
}

export class Ledger {
  private storageKey = "ledger";
  
  async addTransaction(tx: Transaction) {
    const ledger = JSON.parse(localStorage.getItem(this.storageKey) || "[]");
    ledger.push(tx);
    localStorage.setItem(this.storageKey, JSON.stringify(ledger));
  }

  async getTransactions(user?: string) {
    const ledger = JSON.parse(localStorage.getItem(this.storageKey) || "[]");
    return user ? ledger.filter((t: Transaction) => t.from === user || t.to === user) : ledger;
  }
}
