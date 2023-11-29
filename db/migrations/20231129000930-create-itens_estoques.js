'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('itens_estoques', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_unidade_saude: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'unidades_saudes', // Nome da tabela referenciada (ajuste conforme necessário)
          key: 'id' // Nome da chave primária na tabela referenciada
        }
      },
      codigo_medicamento: {
        type: Sequelize.STRING,
        allowNull: false
      },
      qtd_recomendada: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      qtd_atual: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      local_armazenado: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('itens_estoques');
  }
};
