import { Sequelize, sequelize } from './db.mjs';

export const Itens_estoque = sequelize.define('itens_estoque', {
    id_unidade_saude: Sequelize.INTEGER,
    codigo_medicamento: Sequelize.STRING,
    qtd_recomendada: Sequelize.INTEGER,
    qtd_atual: Sequelize.INTEGER,
    local_armazenado: Sequelize.STRING,
  });