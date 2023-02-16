require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();

app.use(
  cors({
    origin:
      "https://63ee90ea2b0627107431cb83--endearing-kelpie-15fa89.netlify.app",
  })
);
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT);
