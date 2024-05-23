const mongoose = require('mongoose');
require('dotenv').config(); // Carrega as variáveis do .env

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

function DBConnect() {
    return new Promise((resolve, reject) => {
        mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
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