"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletLeitura = exports.updateLeitura = exports.createLeitura = exports.getLeituraById = exports.getLeituras = void 0;
const getLeituras = (req, res) => {
    res.send("Obter todas as leituras");
};
exports.getLeituras = getLeituras;
const getLeituraById = (req, res) => {
    const { id } = req.params;
    res.send(`Obter leitura com ID ${id}`);
};
exports.getLeituraById = getLeituraById;
const createLeitura = (req, res) => {
    const { tipo, valor, data } = req.body;
    res.send("Criar nova leitura");
};
exports.createLeitura = createLeitura;
const updateLeitura = (req, res) => {
    const { id } = req.params;
    const { tipo, valor, data } = req.body;
    res.send(`Atualizar leitura com ID${id}`);
};
exports.updateLeitura = updateLeitura;
const deletLeitura = (req, res) => {
    const { id } = req.params;
    res.send(`Deletar leitura com ID${id}`);
};
exports.deletLeitura = deletLeitura;
