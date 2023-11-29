import { Clientes } from '../models/Clientes.js';
import { Distancias } from '../models/Distancias.js'
import { Itens_estoque } from '../models/Itens_estoque.js'
import { Medicamentos } from '../models/Medicamentos.js'
import { Ordens_retirada } from '../models/Ordens_retirada.js'
import { Unidades_saude } from '../models/Unidades_saude.js'

// Inserir registros para Unidades_saude
Unidades_saude.bulkCreate([
  {
    nome_unidade: "Hospital Central",
    cep: 12345678,
    endereco: "Rua Principal, 100",
    numero_endereco: 100,
    telefone: "111111111",
    tipo_unidade: "Hospital",
    horario_funcionamento: "24 horas",
  },
  {
    nome_unidade: "Posto de Saúde Sul",
    cep: 87654321,
    endereco: "Avenida Sul, 200",
    numero_endereco: 200,
    telefone: "222222222",
    tipo_unidade: "Posto de Saúde",
    horario_funcionamento: "08:00 - 18:00",
  },
  {
    nome_unidade: "Clínica Norte",
    cep: 11111111,
    endereco: "Rua Norte, 300",
    numero_endereco: 300,
    telefone: "333333333",
    tipo_unidade: "Clínica",
    horario_funcionamento: "09:00 - 20:00",
  },
  {
    nome_unidade: "Hospital Oeste",
    cep: 99999999,
    endereco: "Avenida Oeste, 400",
    numero_endereco: 400,
    telefone: "444444444",
    tipo_unidade: "Hospital",
    horario_funcionamento: "24 horas",
  },
  {
    nome_unidade: "Posto de Saúde Leste",
    cep: 88888888,
    endereco: "Rua Leste, 500",
    numero_endereco: 500,
    telefone: "555555555",
    tipo_unidade: "Posto de Saude Leste",
    horario_funcionamento: "18:00 - 06:00",
  },
]);

// Inserir registros para Clientes
Clientes.bulkCreate([
  { nome_completo: "João Silva", cpf: "11122233344", telefone: "1122334455" },
  {
    nome_completo: "Maria Oliveira",
    cpf: "55544433322",
    telefone: "9988776655",
  },
  { nome_completo: "José Santos", cpf: "98765432100", telefone: "9876543210" },
  { nome_completo: "Ana Pereira", cpf: "12345678900", telefone: "9876543210" },
  { nome_completo: "Carlos Souza", cpf: "87654321099", telefone: "9988776655" },
]);

// Inserir distâncias para cada unidade de saúde
Distancias.bulkCreate([
  // Unidade 1 para todas as outras unidades
  {
    id_unidade_saude_origem: 1,
    id_unidade_saude_destino: 2,
    distancia_total: 15.2,
  },
  {
    id_unidade_saude_origem: 1,
    id_unidade_saude_destino: 3,
    distancia_total: 8.7,
  },
  {
    id_unidade_saude_origem: 1,
    id_unidade_saude_destino: 4,
    distancia_total: 12.3,
  },
  {
    id_unidade_saude_origem: 1,
    id_unidade_saude_destino: 5,
    distancia_total: 6.9,
  },

  // Unidade 2 para todas as outras unidades
  {
    id_unidade_saude_origem: 2,
    id_unidade_saude_destino: 1,
    distancia_total: 15.2,
  },
  {
    id_unidade_saude_origem: 2,
    id_unidade_saude_destino: 3,
    distancia_total: 20.0,
  },
  {
    id_unidade_saude_origem: 2,
    id_unidade_saude_destino: 4,
    distancia_total: 10.5,
  },
  {
    id_unidade_saude_origem: 2,
    id_unidade_saude_destino: 5,
    distancia_total: 18.0,
  },

  // Unidade 3 para todas as outras unidades
  {
    id_unidade_saude_origem: 3,
    id_unidade_saude_destino: 1,
    distancia_total: 8.7,
  },
  {
    id_unidade_saude_origem: 3,
    id_unidade_saude_destino: 2,
    distancia_total: 20.0,
  },
  {
    id_unidade_saude_origem: 3,
    id_unidade_saude_destino: 4,
    distancia_total: 16.5,
  },
  {
    id_unidade_saude_origem: 3,
    id_unidade_saude_destino: 5,
    distancia_total: 14.2,
  },

  // Unidade 4 para todas as outras unidades
  {
    id_unidade_saude_origem: 4,
    id_unidade_saude_destino: 1,
    distancia_total: 12.3,
  },
  {
    id_unidade_saude_origem: 4,
    id_unidade_saude_destino: 2,
    distancia_total: 10.5,
  },
  {
    id_unidade_saude_origem: 4,
    id_unidade_saude_destino: 3,
    distancia_total: 16.5,
  },
  {
    id_unidade_saude_origem: 4,
    id_unidade_saude_destino: 5,
    distancia_total: 8.3,
  },

  // Unidade 5 para todas as outras unidades
  {
    id_unidade_saude_origem: 5,
    id_unidade_saude_destino: 1,
    distancia_total: 6.9,
  },
  {
    id_unidade_saude_origem: 5,
    id_unidade_saude_destino: 2,
    distancia_total: 18.0,
  },
  {
    id_unidade_saude_origem: 5,
    id_unidade_saude_destino: 3,
    distancia_total: 14.2,
  },
  {
    id_unidade_saude_origem: 5,
    id_unidade_saude_destino: 4,
    distancia_total: 8.3,
  },
]);

// Inserir registros para Medicamentos
Medicamentos.bulkCreate([
  {
    codigo: "ABC123",
    nome: "Paracetamol",
    dosagem: 500,
    forma_farmaceutica: "Comprimido",
    nome_fabricante: "Farmacorp",
    custo: 10.5,
  },
  {
    codigo: "DEF456",
    nome: "Ibuprofeno",
    dosagem: 400,
    forma_farmaceutica: "Comprimido",
    nome_fabricante: "PharmaLife",
    custo: 8.2,
  },
  {
    codigo: "GHI789",
    nome: "Amoxicilina",
    dosagem: 250,
    forma_farmaceutica: "Cápsula",
    nome_fabricante: "MediCare",
    custo: 15.0,
  },
  {
    codigo: "JKL101",
    nome: "Dipirona",
    dosagem: 300,
    forma_farmaceutica: "Comprimido",
    nome_fabricante: "SaúdeBem",
    custo: 7.0,
  },
  {
    codigo: "MNO111",
    nome: "Omeprazol",
    dosagem: 20,
    forma_farmaceutica: "Cápsula",
    nome_fabricante: "FarmaPlus",
    custo: 12.3,
  },
]);

// Inserir registros para Itens_estoque
Itens_estoque.bulkCreate([
  {
    id_unidade_saude: 1,
    codigo_medicamento: "ABC123",
    qtd_recomendada: 50,
    qtd_atual: 45,
    local_armazenado: "Local A",
  },
  {
    id_unidade_saude: 2,
    codigo_medicamento: "DEF456",
    qtd_recomendada: 30,
    qtd_atual: 28,
    local_armazenado: "Local B",
  },
  {
    id_unidade_saude: 1,
    codigo_medicamento: "GHI789",
    qtd_recomendada: 20,
    qtd_atual: 18,
    local_armazenado: "Local C",
  },
  {
    id_unidade_saude: 3,
    codigo_medicamento: "JKL101",
    qtd_recomendada: 40,
    qtd_atual: 37,
    local_armazenado: "Local D",
  },
  {
    id_unidade_saude: 2,
    codigo_medicamento: "MNO111",
    qtd_recomendada: 25,
    qtd_atual: 23,
    local_armazenado: "Local E",
  },
]);

// Inserir registros para Ordens_retirada
Ordens_retirada.bulkCreate([
  {
    id_cliente: 1,
    codigo_medicamento: "ABC123",
    qtd_solicitado: 3,
    id_unidade_saude: 1,
    retirado: false,
    dt_retirada: null,
  },
  {
    id_cliente: 2,
    codigo_medicamento: "DEF456",
    qtd_solicitado: 2,
    id_unidade_saude: 2,
    retirado: true,
    dt_retirada: "2023-11-14",
  },
  {
    id_cliente: 3,
    codigo_medicamento: "GHI789",
    qtd_solicitado: 1,
    id_unidade_saude: 3,
    retirado: true,
    dt_retirada: "2023-11-12",
  },
  {
    id_cliente: 4,
    codigo_medicamento: "JKL101",
    qtd_solicitado: 5,
    id_unidade_saude: 1,
    retirado: false,
    dt_retirada: null,
  },
  {
    id_cliente: 5,
    codigo_medicamento: "MNO111",
    qtd_solicitado: 4,
    id_unidade_saude: 2,
    retirado: false,
    dt_retirada: null,
  },
]);
