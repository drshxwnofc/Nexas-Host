export class KVStore {
    constructor(key) {
        this.storageKey = key;
    }
    async get(key) {
        const data = localStorage.getItem(this.storageKey) || "{}";
        const parsed = JSON.parse(data);
        return parsed[key] || null;
    }
    async set(key, value) {
        const data = localStorage.getItem(this.storageKey) || "{}";
        const parsed = JSON.parse(data);
        parsed[key] = value;
        localStorage.setItem(this.storageKey, JSON.stringify(parsed));
    }
    async delete(key) {
        const data = localStorage.getItem(this.storageKey) || "{}";
        const parsed = JSON.parse(data);
        delete parsed[key];
        localStorage.setItem(this.storageKey, JSON.stringify(parsed));
    }
    async getAll() {
        return JSON.parse(localStorage.getItem(this.storageKey) || "{}");
    }
}
