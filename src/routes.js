const express = require("express");
const { getDados } = require("./controladores/getData");
const { registerUrl } = require("./controladores/registerUrl");
const { updateRegister } = require("./controladores/updateRegister");
const { deleteRegister } = require("./controladores/deleteRegister");
const { urlInvalid } = require("./middlewares/urlInvalid");
const { registerUser } = require("./controladores/registerUser");
const rotas = express();

rotas.post("/cadastrar-usuario", registerUser);

rotas.get("/home", getDados);

rotas.post("/cadastrar-url", urlInvalid, registerUrl);

rotas.put("/home/:id", urlInvalid, updateRegister);

rotas.delete("/home/:id", deleteRegister);

module.exports = rotas;
