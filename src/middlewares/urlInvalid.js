const urlInvalid = (req, res, next) => {
  const { urlEnviada } = req.body;

  try {
    new URL(urlEnviada);
    next();
  } catch (error) {
    return res.status(500).json("URL INVÁLIDA!");
  }
};

module.exports = {
  urlInvalid,
};
