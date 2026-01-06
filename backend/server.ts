import { serve } from "https://deno.land/std@0.201.0/http/server.ts";
import { DashboardPage } from "../frontend/pages/dashboard.ts";

serve(async (req: Request) => {
    const url = new URL(req.url);

    if(url.pathname.startsWith("/api/deploy")) {
        // Example: handle deploy
        return new Response(JSON.stringify({ message: "Deploy API called" }), {status: 200});
    }

    if(url.pathname === "/dashboard") {
        const root = document.createElement('div');
        DashboardPage();
        return new Response('<!DOCTYPE html><html><body>' + root.outerHTML + '</body></html>', {status: 200, headers: {'content-type':'text/html'}});
    }

    return new Response("Nexus API & Web", {status:200});
});
