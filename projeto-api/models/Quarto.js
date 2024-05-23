const mongoose = require('mongoose');

const quartoSchema = new mongoose.Schema({
  numero: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    enum: ['Simples', 'Duplo', 'Luxo'],
    required: true
  },
  descricao: String,
  disponivel: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

const Quarto = mongoose.model('Quarto', quartoSchema);

module.exports = Quarto;
