import { deployApp } from "../../backend/apps/deploy.ts";

export async function handler(req: Request) {
  const { repoUrl, env } = await req.json();
  const result = await deployApp("node", repoUrl, env);
  return new Response(JSON.stringify(result), { status: 200 });
}
