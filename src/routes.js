const express = require("express");
const { getDados } = require("./controllers/getData");
const { registerUrl } = require("./controllers/registerUrl");
const { updateRegister } = require("./controllers/updateRegister");
const { deleteRegister } = require("./controllers/deleteRegister");
const { urlInvalid } = require("./middlewares/urlInvalid");
const { loginValidation } = require("./middlewares/validationLogin");
const { registerUser } = require("./controllers/registerUser");
const { loginUser } = require("./controllers/userLogin");
const routes = express();

routes.post("/cadastrar-usuario", registerUser);
routes.post("/login", loginUser);

routes.use(loginValidation);

routes.get("/dashboard", getDados);
routes.post("/adicionar-url", urlInvalid, registerUrl);
routes.put("/dashboard/:id", urlInvalid, updateRegister);
routes.delete("/dashboard/:id", deleteRegister);

module.exports = routes;
