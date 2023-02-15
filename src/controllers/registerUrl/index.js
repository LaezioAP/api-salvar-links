const puppeteer = require("puppeteer");
const knex = require("../../config/knex");

const registerUrl = async (req, res) => {
  const { url } = req.body;
  const { userLogged } = req;

  if (!url) return res.status(404).json("O campo é adiconar URL é obrigatório!"); 

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const pageContent = await page.evaluate(() => {
    return {
      title: document.querySelector("head > title").textContent,
    };
  });
  await browser.close();

  try {
    const newRegister = await knex("links_salvos").insert({
      usuario_id: userLogged.id,
      url,
      title: pageContent.title,
    });

    if (!newRegister) return res.status(500).json("O link não foi cadastrado");

    return res.status(201).json("Link cadastrado com sucesso!");
  } catch (error) {
    return res.status(500).json("Erro interno no servidor");
  }
};

module.exports = {
  registerUrl,
};
