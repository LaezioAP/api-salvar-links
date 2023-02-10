const listaDados = async (req, res) => {
  res.status(200).json({
    mensagem: "Olá mundo, tudo certo com sua api!",
  });
};

module.exports = { listaDados };
