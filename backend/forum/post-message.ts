import { KVStore } from '../storage/kv.ts';
import { sanitize } from '../security/xss.ts';

const forumStore = new KVStore("forum");

export async function postMessage(threadId: string, author: string, content: string) {
    const thread = await forumStore.get(threadId);
    if(!thread) throw new Error("Thread not found");

    const message = {
        id: crypto.randomUUID(),
        author,
        content: sanitize(content),
        createdAt: Date.now()
    };

    thread.posts.push(message);
    await forumStore.set(threadId, thread);

    return message;
}
