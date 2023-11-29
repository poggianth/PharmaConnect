'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('medicamentos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    codigo: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dosagem: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    forma_farmaceutica: {
      type: Sequelize.STRING,
      allowNull: false
    },
    nome_fabricante: {
      type: Sequelize.STRING,
      allowNull: false
    },
    custo: {
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
}
export async function down(queryInterface) {
  await queryInterface.dropTable('medicamentos');
}
