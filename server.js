const http = require("http");
require("dotenv").config();

const app = require("./app");
const server = http.createServer(app);

const PORT = process.env.PORT || 4000;

function startServer() {
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}

startServer();
