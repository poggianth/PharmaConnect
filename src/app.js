import express from "express";
import { Op } from "sequelize";
const app = express();
const port = 8081;

// Models
import { Medicamentos } from "./models/Medicamentos.js";
import { Itens_estoque } from "./models/Itens_estoque.js";
import { Distancias } from "./models/Distancias.js";
import { Clientes } from "./models/Clientes.js"
import { Ordens_retirada } from "./models/Ordens_agendamento.js"

// Config JSON response
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Home");
  res.send("Rota principal!");
});

app.get("/medicamentos/consultar", (req, res) => {
  // id da unidade de saúde atual - será pego via sessão
  const { id_unidade_atual, codigo, qtd_desejada } = req.body;

  Itens_estoque.findAll({
    where: {
      id_unidade_saude: id_unidade_atual,
      codigo_medicamento: codigo,
      qtd_atual: {
        [Op.gte]: qtd_desejada,
      },
    },
  })
    .then((medicamentos) => {
      console.log(medicamentos);
      res.send(medicamentos);
    })
    .catch((error) => {
      console.error(`Erro: ${error}`);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.post("/medicamentos/consultar/unidades", consulta_medicamentos_outras_unidades);

app.post("/medicamentos/agendar_retirada", agendar_retirada);

app.post("/ordens_retirada/consultar_ordens_retiradas", consultar_ordens_retiradas);

app.post("/ordens_retirada/confirmar_ordem_retirada", confirmar_ordem_retirada)


async function consulta_medicamentos_outras_unidades(req, res){
  const { id_unidade_atual, codigo_medicamento, qtd_desejada } = req.body;
  
  try {
    const itemEstoqueResult = await Itens_estoque.findAll({
      attributes: ["id_unidade_saude"],
      where: {
        codigo_medicamento: codigo_medicamento,
        qtd_atual: {
          [Op.gte]: qtd_desejada,
        },
      },
    });

    const id_unidades_com_remedio = itemEstoqueResult.map(
      (item) => item.id_unidade_saude
    );
    console.log("id_unidades_com_remedio: " + id_unidades_com_remedio);
  
    const unidades_proximas_disponiveis = await Distancias.findAll({
      attributes: ["id_unidade_saude_destino", "distancia_total"],
      where: {
        id_unidade_saude_origem: id_unidade_atual,
        id_unidade_saude_destino: {
          [Op.in]: id_unidades_com_remedio,
        },
      },
      order: [["distancia_total", "ASC"]],
      limit: 3,
    });
    
    res.json({
      unidades_proximas_disponiveis,
    });
  } catch (error) {
    console.error(`Erro ao obter unidades próximas: ${error}`);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

async function agendar_retirada(req, res){
  const { id_unidade_atual, codigo_medicamento, qtd_desejada, cpf_cliente } = req.body;

  try{
    const cliente_requisitante = await Clientes.findOne({
      where: {
        cpf: cpf_cliente
      }
    });

    const novo_agendamento = await Ordens_retirada.create({
      id_cliente: cliente_requisitante.id,
      codigo_medicamento: codigo_medicamento,
      qtd_solicitado: qtd_desejada,
      id_unidade_saude: id_unidade_atual,
      retirado: false
    })

    console.log(`novo_agendamento: ${novo_agendamento}`);
    res.json({novo_agendamento: novo_agendamento});
  } catch (error){
    console.log(`Erro ao agendar retirada: ${error}`);
    res.status(500).json({ error: "Erro interno no servidor"});
  }
}

async function consultar_ordens_retiradas(req, res){
  const { id_unidade } = req.body;

  try{
    const ordens_retidas = await Ordens_retirada.findAll({
      where: {
        id_unidade_saude: id_unidade
      }
    });

    console.log(`Ordens de retirada: ${ordens_retidas}`);
    res.json({ordens_retidas: ordens_retidas});

  } catch(error){
    console.log(`Erro ao consultar as ordens de retirada: ${error}`);
    res.status(500).json({error: "Erro interno do servidor"});
  }
}

async function confirmar_ordem_retirada(req, res){
  const { id_ordem_retirada } = req.body;

  try{
    const ordem_retirada = await Ordens_retirada.findOne({
      where:{
        id: id_ordem_retirada
      }
    });

    console.log(ordem_retirada);

    ordem_retirada.set({
      retirado: true
    });

    await ordem_retirada.save();

    console.log(ordem_retirada);
    res.json({ordem_retirada: ordem_retirada});

  } catch(error){
    console.log(`Erro ao alterar o status da retirada: ${error}`);
    res.status(500).json({error: "Erro interno do servidor"});
  }
}






app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`);
});
