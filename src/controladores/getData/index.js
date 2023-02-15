const knex = require("../../config/knex");

const getDados = async (req, res) => {
  const flowData = await knex("links_salvos");

  return res.status(200).json(flowData);
};

module.exports = { getDados };
