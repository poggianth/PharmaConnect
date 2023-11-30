'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('unidades_saudes', [
      {
        nome_unidade: "Hospital Central",
        cep: 12345678,
        endereco: "Rua Principal, 100",
        numero_endereco: 100,
        telefone: "111111111",
        tipo_unidade: "Hospital",
        horario_funcionamento: "7:00 - 19:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_unidade: "Posto de Saúde Sul",
        cep: 87654321,
        endereco: "Avenida Sul, 200",
        numero_endereco: 200,
        telefone: "222222222",
        tipo_unidade: "Posto de Saúde",
        horario_funcionamento: "08:00 - 18:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_unidade: "Clínica Norte",
        cep: 11111111,
        endereco: "Rua Norte, 300",
        numero_endereco: 300,
        telefone: "333333333",
        tipo_unidade: "Clínica",
        horario_funcionamento: "09:00 - 20:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_unidade: "Hospital Oeste",
        cep: 99999999,
        endereco: "Avenida Oeste, 400",
        numero_endereco: 400,
        telefone: "444444444",
        tipo_unidade: "Hospital",
        horario_funcionamento: "7:00 - 19:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_unidade: "Posto de Saúde Leste",
        cep: 88888888,
        endereco: "Rua Leste, 500",
        numero_endereco: 500,
        telefone: "555555555",
        tipo_unidade: "Posto de Saude Leste",
        horario_funcionamento: "18:00 - 06:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Adicione mais unidades se necessário
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('unidades_saude', null, {});
  }
};
