const CLIENT_ID = Deno.env.get("GITHUB_CLIENT_ID")!;
const CLIENT_SECRET = Deno.env.get("GITHUB_CLIENT_SECRET")!;

export async function githubLogin(code: string) {
    // Exchange code for access token
    const res = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code })
    });
    const data = await res.json();
    const token = data.access_token;

    // Get user info
    const userRes = await fetch('https://api.github.com/user', {
        headers: { 'Authorization': `token ${token}` }
    });
    const user = await userRes.json();
    return { token, user };
}
