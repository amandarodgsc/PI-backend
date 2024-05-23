const Quarto = require('../models/Quarto');

async function buscarTodos(req, res) {
    try {
        const quartos = await Quarto.find();
        res.json(quartos);
    } catch (error) {
        res.status(500).json ({ mensagem: "Erro ao buscar quartos." });
    }
}

async function buscarPorID(req, res) {
    try {
        const quarto = await Quarto.findById(req.params.id);
        if (quarto) {
            res.json(quarto);
        } else {
            res.status(404).json({ mensagem: "Quarto não encontrado." });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar o quarto." });
    }
}

async function criar(req, res) {
    try {
        const novoQuarto = await Quarto.create(req.body);
        res.status(201).json(novoQuarto);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar o quarto." });
    }
}

async function atualizar(req, res) {
    try {
        const quartoAtualizado = await Quarto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (quartoAtualizado) {
            res.json(quartoAtualizado);
        } else {
            res.status(404).json({ mensagem: "Quarto não encontrado." });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar o quarto." });
    }
}

async function remover(req, res) {
    try {
        const quartoRemovido = await Quarto.findByIdAndRemove(req.params.id);
        if (quartoRemovido) {
            res.json({ mensagem: "Quarto removido com sucesso." });
        } else {
            res.status(404).json({ mensagem: "Quarto não encontrado." });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao remover o quarto." });
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    remover
};
