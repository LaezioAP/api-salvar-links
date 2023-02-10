const express = require("express");
const app = express();
const rotas = require("./rotas");
const PORTA = 3000;

app.use(express.json());
app.use(rotas);

app.listen(PORTA);
