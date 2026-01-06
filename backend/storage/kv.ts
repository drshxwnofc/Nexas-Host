export class KVStore {
    private storageKey: string;

    constructor(key: string) {
        this.storageKey = key;
    }

    async get<T>(key: string): Promise<T | null> {
        const data = localStorage.getItem(this.storageKey) || "{}";
        const parsed = JSON.parse(data);
        return parsed[key] || null;
    }

    async set(key: string, value: any) {
        const data = localStorage.getItem(this.storageKey) || "{}";
        const parsed = JSON.parse(data);
        parsed[key] = value;
        localStorage.setItem(this.storageKey, JSON.stringify(parsed));
    }

    async delete(key: string) {
        const data = localStorage.getItem(this.storageKey) || "{}";
        const parsed = JSON.parse(data);
        delete parsed[key];
        localStorage.setItem(this.storageKey, JSON.stringify(parsed));
    }

    async getAll() {
        return JSON.parse(localStorage.getItem(this.storageKey) || "{}");
    }
}
