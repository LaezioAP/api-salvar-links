const express = require("express");
const { getDados } = require("./controladores/getData");
const { registerUrl } = require("./controladores/registerUrl");
const { updateRegister } = require("./controladores/updateRegister");
const { deleteRegister } = require("./controladores/deleteRegister");
const { urlInvalid } = require("./middlewares/urlInvalid");
const { loginValidation } = require("./middlewares/validationLogin");
const { registerUser } = require("./controladores/registerUser");
const { loginUser } = require("./controladores/userLogin");
const routes = express();

routes.post("/cadastrar-usuario", registerUser);
routes.post("/login", loginUser);

routes.use(loginValidation);

routes.get("/home", getDados);

routes.post("/adicionar-url", urlInvalid, registerUrl);

routes.put("/home/:id", urlInvalid, updateRegister);

routes.delete("/home/:id", deleteRegister);

module.exports = routes;
