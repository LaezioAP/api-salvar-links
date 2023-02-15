const knex = require("../../config/knex");

const getDados = async (req, res) => {
  const { userLogged } = req;

  try {
    const flowData = await knex("links_salvos").where(
      "usuario_id",
      userLogged.id
    );

    return res.status(200).json(flowData);
  } catch (error) {
    return res.status(500).json("Erro interno no servidor");
  }
};

module.exports = { getDados };
