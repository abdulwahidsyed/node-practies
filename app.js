const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const api = require("./src/routes/api");

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(api);
app.use("/*", path.join(__dirname, "public", "index.html"));

module.exports = app;
