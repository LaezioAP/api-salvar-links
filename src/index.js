require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();

app.use(
  cors({
    origin: "https://salve-seu-link.netlify.app/",
  })
);
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT);
