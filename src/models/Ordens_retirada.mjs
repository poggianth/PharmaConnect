import { Sequelize, sequelize } from './db.mjs';

export const Ordens_retirada = sequelize.define('ordens_agendamento', {
    id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    codigo_medicamento: Sequelize.STRING,
    qtd_solicitado: Sequelize.INTEGER,
    id_unidade_saude: Sequelize.INTEGER,
    retirado: Sequelize.BOOLEAN,
    dt_retirada: Sequelize.DATE
});
