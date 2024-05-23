const Reserva = require('../models/Reserva');

async function buscarTodos(req, res) {
    try {
        const reservas = await Reserva.find();
        res.json(reservas);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar reservas." });
    }
}

async function buscarPorID(req, res) {
    try {
        const reserva = await Reserva.findById(req.params.id);
        if (reserva) {
            res.json(reserva);
        } else {
            res.status(404).json({ mensagem: "Reserva não encontrada." });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar a reserva." });
    }
}

async function criar(req, res) {
    try {
        const novaReserva = await Reserva.create(req.body);
        res.status(201).json(novaReserva);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar a reserva." });
    }
}

async function atualizar(req, res) {
    try {
        const reservaAtualizada = await Reserva.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (reservaAtualizada) {
            res.json(reservaAtualizada);
        } else {
            res.status(404).json({ mensagem: "Reserva não encontrada." });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar a reserva." });
    }
}

async function remover(req, res) {
    try {
        const reservaRemovida = await Reserva.findByIdAndRemove(req.params.id);
        if (reservaRemovida) {
            res.json({ mensagem: "Reserva removida com sucesso." });
        } else {
            res.status(404).json({ mensagem: "Reserva não encontrada." });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao remover a reserva." });
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    remover
};
