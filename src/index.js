require("dotenv").config();
const { join } = require("path");
let express = require("express");
let cors = require("cors");
let routes = require("./routes");
let app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT);

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the cache location for Puppeteer.
  cacheDirectory: join(__dirname, ".cache", "puppeteer"),
};
