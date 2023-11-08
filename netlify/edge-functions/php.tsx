import { renderToString } from "https://deno.land/x/jsx/mod.ts";
import { Home } from "./home.tsx";

export default async function handler(request: Request) {
  return new Response(
    await renderToString(
      await Home({
        request: request
      })
    ),
    {
      headers: {
        "content-type": "text/html; charset=UTF-8",
      },
    }
  );
}

export const config = {
  path: "/*",
  excluded_paths: "/public/*",
};

// Debug
Deno.serve(handler)