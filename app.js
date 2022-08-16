require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3050;

/*
const ngrok = require('ngrok');
ngrok
  .connect({
    authtoken: process.env.AUTHNG,
    proto: "http",
    addr: "3050",
  })
  .then(url => {
    app.get("/", (req, res) => {
      res.send(`
      Conectado en: <a href="${url}">Servidor Online</a>
      `)
    })
  })
*/
app.use("/", require("./rutas/productos"))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
