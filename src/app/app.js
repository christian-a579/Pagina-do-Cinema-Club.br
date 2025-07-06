// servidor.js ou app.js
const express = require("express");
const Parser = require("rss-parser");
const cors = require("cors");
const app = express();
const parser = new Parser();

app.use(cors()); // permite o acesso do Angular

app.get("/noticias", async (req, res) => {
  try {
    const feed = await parser.parseURL(
      "https://www.adorocinema.com/rss/news.xml"
    );
    const noticias = feed.items.slice(0, 10).map((item) => ({
      titulo: item.title,
      conteudo: item.contentSnippet,
      imagem: item.enclosure?.url, // ou extraia do content, se necessário
    }));
    res.json(noticias);
  } catch (err) {
    console.error("Erro ao buscar o feed RSS:", err);
    res.status(500).send({ error: "Erro ao buscar o feed RSS" });
  }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
