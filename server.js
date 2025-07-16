import axios from "axios";

// Nova rota que busca dados de outra página
app.get("/externo", async (req, res) => {
  try {
    // Exemplo: pegando dados de uma API pública
    const resposta = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    res.json(resposta.data);
  } catch (error) {
    res.status(500).send("Erro ao buscar dados externos");
  }
});

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));
