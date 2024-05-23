const express = require('express');
const app = express();
const PORT = 3000;

const DBConnect = require('./database/connection');

// Chama a função para conectar ao banco de dados e inicia o servidor apenas depois
DBConnect()
    .then(() => {
        app.use(express.json());
        const routes = require('./routes/routes');
        app.use(routes);

        app.listen(PORT, () => {
            console.log(`Aplicação rodando na porta ${PORT}`);
        });
    })
    .catch(error => {
        console.error("Erro ao iniciar a aplicação:", error);
    });
