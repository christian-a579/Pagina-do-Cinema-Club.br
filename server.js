const express = require("express");
const cors = require("cors");
const NewsAPI = require("newsapi");

const app = express();
const PORT = 3000;

// Configuração da NewsAPI
const newsapi = new NewsAPI("8e418e9923304740afbfff68c115a0c8");

app.use(cors());
app.use(express.json());

// Rota para buscar top headlines
app.get("/api/top-headlines", async (req, res) => {
  try {
    const response = await newsapi.v2.topHeadlines({
      sources: "bbc-news,the-verge",
      q: "bitcoin",
      category: "business",
      language: "en",
      country: "us",
    });

    res.json(response);
  } catch (error) {
    console.error(
      "Erro ao buscar top headlines:",
      error.response ? error.response.data : error
    );
    res.status(500).json({ error: "Erro ao buscar notícias" });
  }
});

// Rota para buscar tudo
app.get("/api/everything", async (req, res) => {
  try {
    const response = await newsapi.v2.everything({
      q: "bitcoin",
      sources: "bbc-news,the-verge",
      domains: "bbc.co.uk, techcrunch.com",
      from: "2017-12-01",
      to: "2017-12-12",
      language: "en",
      sortBy: "relevancy",
      page: 2,
    });

    res.json(response);
  } catch (error) {
    console.error(
      "Erro ao buscar everything:",
      error.response ? error.response.data : error
    );
    res.status(500).json({ error: "Erro ao buscar notícias" });
  }
});

// Rota para buscar sources
app.get("/api/sources", async (req, res) => {
  try {
    const response = await newsapi.v2.sources({
      category: "technology",
      language: "en",
      country: "us",
    });

    res.json(response);
  } catch (error) {
    console.error(
      "Erro ao buscar sources:",
      error.response ? error.response.data : error
    );
    res.status(500).json({ error: "Erro ao buscar sources" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
