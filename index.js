const express = require("express");
const app = express();
const usuario = require("./router/usuario.router.js");
const port = 3001;

app.use(express.json());

app.use("/usuario", usuario);

app.get("/", (request, response) => {
    response.send("home page!");
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});