import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono"
import { handle } from "hono/vercel"
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";


export const runtime = "edge";

const app = new Hono().basePath('/api')

app.get('/hello',(c) => {
    return c.json('Hello, World!');
});

export const GET = handle(app);
export const POST = handle(app);