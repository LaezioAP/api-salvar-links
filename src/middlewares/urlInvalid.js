const urlInvalid = (req, res, next) => {
  const { url } = req.body;

  try {
    if (!url) return next();

    new URL(url);
    next();
  } catch (error) {
    return res.status(500).json("URL INVÁLIDA!");
  }
};

module.exports = {
  urlInvalid,
};
