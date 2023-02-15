const express = require("express");
const { listaDados } = require("./controladores/buscarDados");
const { cadastrarUrl } = require("./controladores/cadastrarUrl");
const { editarDado } = require("./controladores/editarLink");
const { excluirDado } = require("./controladores/excluir link");
const { urlInvalid } = require("./middlewares/urlInvalid");
const rotas = express();

rotas.get("/home", listaDados);
rotas.post("/cadastrarUrl", urlInvalid, cadastrarUrl);
rotas.put("/home/:id", editarDado);
rotas.delete("/home/:id", excluirDado);

module.exports = rotas;
