import { KVStore } from '../storage/kv.ts';
const forumStore = new KVStore("forum");
export async function getMessages(threadId, limit = 50) {
    const thread = await forumStore.get(threadId);
    if (!thread)
        throw new Error("Thread not found");
    return thread.posts.slice(-limit);
}
