import { Sequelize, sequelize } from './db.js';

export const Unidades_saude = sequelize.define('unidades_saude', {
    nome_unidade: Sequelize.STRING,
    cep: Sequelize.INTEGER,
    endereco: Sequelize.STRING,
    numero_endereco: Sequelize.INTEGER,
    telefone: Sequelize.STRING,
    tipo_unidade: Sequelize.STRING,
    horario_funcionamento: Sequelize.STRING,
});
