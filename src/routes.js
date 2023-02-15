const express = require("express");
const { getDados } = require("./controladores/getData");
const { registerUrl } = require("./controladores/registerUrl");
const { updateRegister } = require("./controladores/updateRegister");
const { deleteRegister } = require("./controladores/deleteRegister");
const { urlInvalid } = require("./middlewares/urlInvalid");
const { loginValidation } = require("./middlewares/validationLogin");
const { registerUser } = require("./controladores/registerUser");
const { loginUser } = require("./controladores/userLogin");
const rotas = express();

rotas.post("/cadastrar-usuario", registerUser);
rotas.post("/login", loginUser);

rotas.use(loginValidation);

rotas.get("/home", getDados);

rotas.post("/adicionar-url", urlInvalid, registerUrl);

rotas.put("/home/:id", urlInvalid, updateRegister);

rotas.delete("/home/:id", deleteRegister);

module.exports = rotas;
