'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('medicamentos', [
      {
        codigo: "ABC123",
        nome: "Paracetamol",
        dosagem: 500,
        forma_farmaceutica: "Comprimido",
        nome_fabricante: "Farmacorp",
        custo: 10.5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: "DEF456",
        nome: "Ibuprofeno",
        dosagem: 400,
        forma_farmaceutica: "Comprimido",
        nome_fabricante: "PharmaLife",
        custo: 8.2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: "GHI789",
        nome: "Amoxicilina",
        dosagem: 250,
        forma_farmaceutica: "Cápsula",
        nome_fabricante: "MediCare",
        custo: 15.0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: "JKL101",
        nome: "Dipirona",
        dosagem: 300,
        forma_farmaceutica: "Comprimido",
        nome_fabricante: "SaúdeBem",
        custo: 7.0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: "MNO111",
        nome: "Omeprazol",
        dosagem: 20,
        forma_farmaceutica: "Cápsula",
        nome_fabricante: "FarmaPlus",
        custo: 12.3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Adicione mais dados se necessário
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('medicamentos', null, {});
  }
};
