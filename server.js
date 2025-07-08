const express = require("express");
const cors = require("cors");
const puppeteer = require("puppeteer");
const app = express();
const PORT = 3000;

const NEWS_API_KEY = "8e418e9923304740afbfff68c115a0c8";

app.use(cors());

app.get("/api/conteudo", async (req, res) => {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto("https://deadline.com/", { waitUntil: "networkidle2" });

    // Aguarda os blocos de notícia aparecerem
    await page.waitForSelector(".o-card");

    // Extrai os dados das notícias
    const noticias = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll(".o-card"));
      return cards.slice(0, 10).map((card) => {
        const tituloEl = card.querySelector("a.c-title__link");
        const imgEl = card.querySelector("img");
        return {
          titulo: tituloEl ? tituloEl.textContent.trim() : "",
          link: tituloEl ? tituloEl.href : "",
          imagem: imgEl ? imgEl.src : "",
        };
      });
    });

    res.json({
      noticias: noticias.map((n) => n.titulo),
      imagens: noticias.map((n) => n.imagem),
      links: noticias.map((n) => n.link),
    });
  } catch (error) {
    console.error("Erro ao buscar notícias com Puppeteer:", error.message);
    res.status(500).json({ error: "Erro ao buscar notícias" });
  } finally {
    if (browser) await browser.close();
  }
});

app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
