'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('distancias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_unidade_saude_origem: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'unidades_saudes', // Nome da tabela referenciada (se for diferente, ajuste aqui)
          key: 'id' // Nome da chave primária na tabela referenciada
        }
      },
      id_unidade_saude_destino: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'unidades_saudes', // Nome da tabela referenciada (se for diferente, ajuste aqui)
          key: 'id' // Nome da chave primária na tabela referenciada
        }
      },
      distancia_total: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('distancias');
  }
};
