import { KVStore } from "../../backend/storage/kv.ts";
const appsStore = new KVStore("apps");

export async function cleanupOldApps() {
    const apps = await appsStore.getAll();
    const now = Date.now();

    for (const appId in apps) {
        const app = apps[appId];
        if (app.status === "sleeping" && (now - app.lastActive) > 7*24*3600*1000) {
            // Delete inactive apps older than 7 days
            await appsStore.delete(appId);
            console.log(`Deleted inactive app ${appId}`);
        }
    }
}
