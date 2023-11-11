import { Sequelize, sequelize } from "./db.js";

export const Distancias = sequelize.define('distancias', {
    id_unidade_saude_origem: Sequelize.INTEGER,
    id_unidade_saude_destino: Sequelize.INTEGER,
    distancia_total: Sequelize.FLOAT
});
