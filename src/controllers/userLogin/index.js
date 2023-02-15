const knex = require("../../config/knex");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  const { email, senha } = req.body;
  if (!senha || !email)
    return res.status(404).json("Todos os campos são obrigatórios!");
  try {
    const user = await knex("usuarios").where({ email }).first();

    if (!user) return res.status(404).json("E-mail ou senha inválidos");

    const decryptedPassword = await bcrypt.compare(senha, user.senha);

    if (!decryptedPassword)
      return res.status(404).json("E-mail ou senha inválidos");

    const token = jwt.sign({ id: user.id }, process.env.JWT_PASS, {
      expiresIn: "8hr",
    });

    const { senha: _, ...dataUser } = user;

    return res.status(200).json({ ...dataUser, token });
  } catch (error) {
    return res.status(500).json("Erro interno no servidor");
  }
};

module.exports = {
  loginUser,
};
