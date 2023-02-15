const express = require("express");
const { getDados } = require("./controladores/getData");
const { registerUrl } = require("./controladores/registerUrl");
const { updateRegister } = require("./controladores/updateRegister");
const { deleteRegister } = require("./controladores/deleteRegister");
const { urlInvalid } = require("./middlewares/urlInvalid");
const rotas = express();

rotas.get("/home", getDados);

rotas.post("/cadastrar-url", urlInvalid, registerUrl);

rotas.put("/home/:id", urlInvalid, updateRegister);

rotas.delete("/home/:id", deleteRegister);

module.exports = rotas;
