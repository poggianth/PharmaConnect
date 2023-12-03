'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ordens_retiradas', [
      {
        id_cliente: 1,
        codigo_medicamento: "ABC123",
        qtd_solicitado: 3,
        id_unidade_saude: 1,
        retirado: false,
        dt_retirada: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_cliente: 2,
        codigo_medicamento: "DEF456",
        qtd_solicitado: 2,
        id_unidade_saude: 2,
        retirado: true,
        dt_retirada: "2023-11-14",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_cliente: 3,
        codigo_medicamento: "GHI789",
        qtd_solicitado: 1,
        id_unidade_saude: 3,
        retirado: true,
        dt_retirada: "2023-11-12",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_cliente: 4,
        codigo_medicamento: "JKL101",
        qtd_solicitado: 5,
        id_unidade_saude: 1,
        retirado: false,
        dt_retirada: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_cliente: 5,
        codigo_medicamento: "MNO111",
        qtd_solicitado: 4,
        id_unidade_saude: 2,
        retirado: false,
        dt_retirada: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Adicione mais dados se necessário
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ordens_retiradas', null, {});
  }
};
