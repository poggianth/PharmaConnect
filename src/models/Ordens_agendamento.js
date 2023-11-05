import { Sequelize, sequelize } from './db.js';

export const Ordens_agendamento = sequelize.define('ordens_agendamento', {
    id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_medicamento: Sequelize.INTEGER,
    qtd_solicitado: Sequelize.INTEGER,
    id_unidade_saude: Sequelize.INTEGER,
    retirado: Sequelize.BOOLEAN,
});
