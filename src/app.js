import express from 'express';
const app = express();
const port = 8081;


app.get("/", (req, res) => {
  console.log("Home");
  res.send("Rota principal!");
});

app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`);
});