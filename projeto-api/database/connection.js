const mongoose = require('mongoose');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const DB_USER = process.env.DB_USER; // Obtém o usuário do banco de dados do arquivo .env
const DB_PASS = process.env.DB_PASS; // Obtém a senha do banco de dados do arquivo .env
const DB_HOST = process.env.DB_HOST; // Obtém o host do banco de dados do arquivo .env
const DB_NAME = process.env.DB_NAME; // Obtém o nome do banco de dados do arquivo .env

function DBConnect() {
    return new Promise((resolve, reject) => {
        mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
            .then(() => {
                console.log("Conectado ao banco Mongo!");
                resolve();
            })
            .catch(err => {
                console.log("Erro ao conectar ao banco Mongo: ", err);
                reject(err);
            });
    });
}

module.exports = DBConnect;

