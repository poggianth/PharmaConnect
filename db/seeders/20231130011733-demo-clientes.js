"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "clientes",
      [
        {
          nome_completo: "João Silva",
          cpf: "11122233344",
          telefone: "1122334455",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome_completo: "Maria Oliveira",
          cpf: "55544433322",
          telefone: "9988776655",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome_completo: "José Santos",
          cpf: "98765432100",
          telefone: "9876543210",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome_completo: "Ana Pereira",
          cpf: "12345678900",
          telefone: "9876543210",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome_completo: "Carlos Souza",
          cpf: "87654321099",
          telefone: "9988776655",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Adicione mais dados se necessário
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("clientes", null, {});
  },
};
