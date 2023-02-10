const express = require("express");
const { listaDados } = require("./controladores/buscarDados");
const { editarDado } = require("./controladores/editarLink");
const { excluirDado } = require("./controladores/excluir link");
const rotas = express();

rotas.get("/home", listaDados);
rotas.put("/home/:id", editarDado);
rotas.delete("/home/:id", excluirDado);
