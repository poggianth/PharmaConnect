"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "distancias",
      [
        {
          id_unidade_saude_origem: 1,
          id_unidade_saude_destino: 2,
          distancia_total: 15.2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_unidade_saude_origem: 1,
          id_unidade_saude_destino: 3,
          distancia_total: 8.7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_unidade_saude_origem: 1,
          id_unidade_saude_destino: 4,
          distancia_total: 12.3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_unidade_saude_origem: 1,
          id_unidade_saude_destino: 5,
          distancia_total: 6.9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_unidade_saude_origem: 2,
          id_unidade_saude_destino: 1,
          distancia_total: 15.2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_unidade_saude_origem: 2,
          id_unidade_saude_destino: 3,
          distancia_total: 20.0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_unidade_saude_origem: 2,
          id_unidade_saude_destino: 4,
          distancia_total: 10.5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_unidade_saude_origem: 2,
          id_unidade_saude_destino: 5,
          distancia_total: 18.0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_unidade_saude_origem: 3,
          id_unidade_saude_destino: 1,
          distancia_total: 8.7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_unidade_saude_origem: 3,
          id_unidade_saude_destino: 2,
          distancia_total: 20.0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_unidade_saude_origem: 3,
          id_unidade_saude_destino: 4,
          distancia_total: 16.5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_unidade_saude_origem: 3,
          id_unidade_saude_destino: 5,
          distancia_total: 14.2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_unidade_saude_origem: 4,
          id_unidade_saude_destino: 1,
          distancia_total: 12.3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_unidade_saude_origem: 4,
          id_unidade_saude_destino: 2,
          distancia_total: 10.5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_unidade_saude_origem: 4,
          id_unidade_saude_destino: 3,
          distancia_total: 16.5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_unidade_saude_origem: 4,
          id_unidade_saude_destino: 5,
          distancia_total: 8.3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_unidade_saude_origem: 5,
          id_unidade_saude_destino: 1,
          distancia_total: 6.9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_unidade_saude_origem: 5,
          id_unidade_saude_destino: 2,
          distancia_total: 18.0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_unidade_saude_origem: 5,
          id_unidade_saude_destino: 3,
          distancia_total: 14.2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_unidade_saude_origem: 5,
          id_unidade_saude_destino: 4,
          distancia_total: 8.3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Adicione mais dados se necessário
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("distancias", null, {});
  },
};
