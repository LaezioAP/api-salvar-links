const knex = require("../../config/knex");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome.trim() || !email.trim() || !senha)
    return res.status(404).json("Todos os campos são obrigatórios!");

  if (senha.length <= 5)
    return res
      .status(404)
      .json("O campo senha deve ter no mínimo 5 caracteres");

  try {
    const existingEmail = await knex("usuarios").where({ email }).first();

    if (existingEmail) return res.status(400).json("Email ou senha inválidos");

    const encryptedPassword = await bcrypt.hash(senha, 10);

    const user = await knex("usuarios").insert({
      nome,
      email,
      senha: encryptedPassword,
    });

    if (!user) return res.status(500).json("O usuário não foi cadastrado");

    return res.status(200).json("Usuário cadastrado com sucesso!");
  } catch (error) {
    return res.status(500).json("Erro interno no servidor");
  }
};

module.exports = {
  registerUser,
};
