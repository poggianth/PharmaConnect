'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ordens_agendamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'clientes', // Nome da tabela referenciada (ajuste conforme necessário)
          key: 'id' // Nome da chave primária na tabela referenciada
        }
      },
      codigo_medicamento: {
        type: Sequelize.STRING,
        allowNull: false
      },
      qtd_solicitado: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_unidade_saude: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'unidades_saudes', // Nome da tabela referenciada (ajuste conforme necessário)
          key: 'id' // Nome da chave primária na tabela referenciada
        }
      },
      retirado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      dt_retirada: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('ordens_agendamentos');
  }
};
