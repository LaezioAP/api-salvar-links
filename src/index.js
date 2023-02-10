const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.get("/dashboard", (req, res) => {
  res.json({
    mensagem: "Olá mundo, tudo certo com sua api!",
  });
});

app.listen(PORT);
