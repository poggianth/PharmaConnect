'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('itens_estoques', [
      {
        id_unidade_saude: 1,
        codigo_medicamento: "ABC123",
        qtd_recomendada: 50,
        qtd_atual: 45,
        local_armazenado: "Local A",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_unidade_saude: 2,
        codigo_medicamento: "DEF456",
        qtd_recomendada: 30,
        qtd_atual: 28,
        local_armazenado: "Local B",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_unidade_saude: 1,
        codigo_medicamento: "GHI789",
        qtd_recomendada: 20,
        qtd_atual: 18,
        local_armazenado: "Local C",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_unidade_saude: 3,
        codigo_medicamento: "JKL101",
        qtd_recomendada: 40,
        qtd_atual: 37,
        local_armazenado: "Local D",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_unidade_saude: 2,
        codigo_medicamento: "MNO111",
        qtd_recomendada: 25,
        qtd_atual: 23,
        local_armazenado: "Local E",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Adicione mais dados se necessário
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('itens_estoques', null, {});
  }
};
