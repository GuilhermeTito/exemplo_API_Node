const express = require("express");
const app = express();
const mainRoutes = require("./controllers/routes/main.routes.js");
require("dotenv").config();

app.use(express.json());
app.use("/api/usuario", mainRoutes);

app.listen(process.env.PORT, (erro)=>{
    if(erro)
    {
        console.log("Erro")
    }
    else
    {
        console.log(`Servidor rodando na porta ${process.env.PORT}`)
    }
})