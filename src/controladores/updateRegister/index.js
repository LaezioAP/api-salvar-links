const knex = require("../../config/knex");

const updateRegister = async (req, res) => {
  const { url, title } = req.body;
  const { id } = req.params;

  if (!url && !title)
    return res.status(404).json("Este campo deve ser preenchido");

  try {
    const flowData = await knex("links_salvos").where({ id }).first();

    if (!flowData) return res.status(400).json("O registro não existe!");

    const updateRegister = await knex("links_salvos")
      .update({
        url: !url ? flowData.url : url,
        title: !title ? flowData.title : title,
      })
      .where("id", id);

    if (!updateRegister)
      return res.status(400).json("O registro não foi atualizado!");

    return res.status(201).json("Registro atualizado com sucesso!");
  } catch (error) {
    return res.status(500).json("Erro interno no servidor");
  }
};

module.exports = { updateRegister };
