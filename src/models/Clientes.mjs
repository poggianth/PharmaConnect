import { Sequelize, sequelize } from './db.mjs';

export const Clientes = sequelize.define('clientes', {
    nome_completo: Sequelize.STRING,
    cpf: Sequelize.STRING,
    telefone: Sequelize.STRING,
});
