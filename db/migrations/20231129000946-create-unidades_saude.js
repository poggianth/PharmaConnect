'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('unidades_saude', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    nome_unidade: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cep: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    endereco: {
      type: Sequelize.STRING,
      allowNull: false
    },
    numero_endereco: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tipo_unidade: {
      type: Sequelize.STRING,
      allowNull: false
    },
    horario_funcionamento: {
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
}
export async function down(queryInterface) {
  await queryInterface.dropTable('unidades_saude');
}
