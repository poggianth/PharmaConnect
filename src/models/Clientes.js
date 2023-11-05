import { Sequelize, sequelize } from './db.js';

export const Clientes = sequelize.define('clientes', {
    nome_completo: Sequelize.STRING,
    cpf: Sequelize.STRING,
    telefone: Sequelize.STRING,
});
