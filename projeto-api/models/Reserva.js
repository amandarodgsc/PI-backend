const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  quarto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quarto',
    required: true
  },
  dataEntrada: {
    type: Date,
    required: true
  },
  dataSaida: {
    type: Date,
    required: true
  },
  cliente: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Reserva = mongoose.model('Reserva', reservaSchema);

module.exports = Reserva;
