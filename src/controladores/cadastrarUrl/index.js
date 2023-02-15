const puppeteer = require("puppeteer");
const knex = require("../../config/knex");

const cadastrarUrl = async (req, res) => {
  const { urlEnviada } = req.body;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(urlEnviada);
  const pageContent = await page.evaluate(() => {
    return {
      title: document.querySelector("head > title").textContent,
    };
  });

  await browser.close();

  try {
    const newRegister = await knex("links_salvos").insert({
      url: urlEnviada,
      title: pageContent.title,
    });

    if (!newRegister) return res.status(500).json("O link não foi cadastrado");

    return res.status(201).json("Link cadastrado com sucesso!");
  } catch (error) {
    return res.status(500).json(`Erro interno no servidor`);
  }
};

module.exports = {
  cadastrarUrl,
};
