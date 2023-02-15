const knex = require("../../config/knex");

const deleteRegister = async (req, res) => {
  const { id } = req.params;
  const { userLogged } = req;
  try {
    const registerDel = await knex("links_salvos")
      .where({
        id,
        usuario_id: userLogged.id,
      })
      .first();

    if (!registerDel) {
      return res.status(401).json("Registro não encontrado!");
    }

    await knex("links_salvos").where({ id }).del();

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json("Erro interno no servidor");
  }
};

module.exports = { deleteRegister };
