const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

// Rota de exemplo para /api/conteudo
app.get("/api/conteudo", (req, res) => {
  res.json({
    noticias: ["Notícia 1", "Notícia 2", "Notícia 3"],
    imagens: [
      "https://via.placeholder.com/300x200?text=Imagem+1",
      "https://via.placeholder.com/300x200?text=Imagem+2",
      "https://via.placeholder.com/300x200?text=Imagem+3",
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
