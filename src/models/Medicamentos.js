import { Sequelize, sequelize } from './db.js';

export const Medicamentos = sequelize.define('medicamentos', {
    nome: Sequelize.STRING,
    dosagem: Sequelize.INTEGER,
    forma_farmaceutica: Sequelize.STRING,
    nome_fabricante: Sequelize.STRING,
    custo: Sequelize.FLOAT,
  });