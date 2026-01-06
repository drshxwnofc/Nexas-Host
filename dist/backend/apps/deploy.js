import { KVStore } from '../storage/kv.ts';
const appsStore = new KVStore("apps");
export async function deployApp(type, repoUrl, env) {
    const id = crypto.randomUUID();
    const app = { id, type, repoUrl, env, status: 'deployed', logs: [] };
    await appsStore.set(id, app);
    return { message: "App deployed", app };
}
export async function restartApp(appId) {
    const apps = await appsStore.getAll();
    if (!apps[appId])
        throw new Error("App not found");
    apps[appId].status = 'restarting';
    await appsStore.set(appId, apps[appId]);
    return { message: "App restarting" };
}
