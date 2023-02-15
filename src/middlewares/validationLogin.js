const jwt = require("jsonwebtoken");
const knex = require("../config/knex");

const loginValidation = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json("Não autorizado");

  try {
    const token = authorization.split(" ")[1];

    const { id } = jwt.verify(token, process.env.JWT_PASS);

    const user = await knex("usuarios").where({ id }).first();

    if (!user) return res.status(401).json("Não autorizado!");

    const { senha: _, ...dataUser } = user;

    req.userLogged = dataUser;
    next();
  } catch (error) {
    return res.status(500).json("Erro interno no servidor");
  }
};

module.exports = {
  loginValidation,
};
