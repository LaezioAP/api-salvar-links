const knex = require("../../config/knex");

const cheerio = require("cheerio");
const axios = require("axios");

const registerUrl = async (req, res) => {
  const { url } = req.body;
  const { userLogged } = req;
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const title = $("head > title").text();

  try {
    const newRegister = await knex("links_salvos").insert({
      usuario_id: userLogged.id,
      url,
      title,
    });

    if (!newRegister) return res.status(500).json("O link não foi cadastrado");

    return res.status(201).json("Link cadastrado com sucesso!");
  } catch (error) {
    console.log(error);
    return res.status(500).json("Erro interno no servidor");
  }
};

module.exports = {
  registerUrl,
};
