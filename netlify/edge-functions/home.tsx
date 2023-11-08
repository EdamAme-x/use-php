/** @jsx h */
/** @jsxFrag Fragment */
import { h } from "https://deno.land/x/jsx/mod.ts";
import { usePHP } from "../../lib/usephp.tsx";

export async function Home({ request }: { request: Request }) {
  const php = await usePHP(request, h);

  return (
    <html>
      <head>
        <title>Use PHP</title>
        <meta
          name="description"
          content="usePHP is one of React's custom hooks, It allows you to run php on top of jsx."
        />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/default.min.css"
          async
        />
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js"></script>
        <script defer>hljs.initHighlightingOnLoad();</script>
      </head>
      <body>
        <div style={"text-align: center"}>
          {await php`
            Hello
            <?php
              echo "React programmer & PHPer!";
              print("<h1>UsePHP</h1>");
              $description = "usePHP is one of React's custom hooks, It allows you to run php on top of jsx.";
              print("<h2>".$description."</h2>")
            ?>
            `}
        </div>
        <div style={"text-align: center"}>
          <h3>Example (Deno)</h3>
          <pre style={"text-align: left"}>
            <code class="javascript">
                {
`
/** @jsx h */
import { usePHP } from "https://deno.land/x/use_php/mod.ts";
import { h, renderToString } from "https://deno.land/x/jsx/mod.ts";

const handler = async (request: Request) => {

  const php = await usePHP(request, h);
  return new Response(
    await renderToString(
      <html>
        <head>
          <title>Use PHP</title>
        </head>
        <body>
          {await php\`
              <?php phpinfo(); ?>
          \`}
        </body>
      </html>
    )
  );
});

Deno.serve(handler);
`.trim()
                }
            </code>
          </pre>
        </div>
        {await php`
            <div>
              <?php phpinfo(); ?>
            </div>
          `}
      </body>
    </html>
  );
}
