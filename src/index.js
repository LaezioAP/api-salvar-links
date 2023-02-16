require("dotenv").config();
let express = require("express");
let cors = require("cors");
let routes = require("./routes");
let app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT);
