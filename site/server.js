/* Production server: Next standalone-style start via next start equivalent.
   Kept as plain node entry for the factory stack (Node 20 run). */
const { createServer } = require("http");
const next = require("next");

const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || "0.0.0.0";

const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, hostname, () => {
    console.log(`TMG site ready on http://${hostname}:${port}`);
  });
});
