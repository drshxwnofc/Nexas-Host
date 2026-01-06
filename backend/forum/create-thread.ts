import { KVStore } from '../storage/kv.ts';
const forumStore = new KVStore("forum");

export async function createThread(author: string, title: string, content: string) {
    const thread = {
        id: crypto.randomUUID(),
        author,
        title,
        content,
        posts: [],
        createdAt: Date.now()
    };
    await forumStore.set(thread.id, thread);
    return thread;
}
