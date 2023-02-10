const excluirDado = (req, res) => {
  return res.status(204).json("Campo excluído com sucesso!");
};

module.exports = { excluirDado };
