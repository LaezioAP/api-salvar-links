const knex = require("../../config/knex");

const excluirDado = async (req, res) => {
  const { id } = req.params;
  try {
    await knex("links_salvos").del().where("id", id);
    return res.status(204).json("Registro excluido com sucesso!");
  } catch (error) {
    return res.status(500).json("Erro interno no servidor");
  }
};

module.exports = { excluirDado };
