import express from "express";
import { Op } from "sequelize";
import cors from "cors";
const app = express();
const port = 3000;

// Models
import { Medicamentos } from "./src/models/Medicamentos.mjs";
import { Itens_estoque } from "./src/models/Itens_estoque.mjs";
import { Distancias } from "./src/models/Distancias.mjs";
import { Clientes } from "./src/models/Clientes.mjs";
import { Ordens_retirada } from "./src/models/Ordens_retirada.mjs";
import { Unidades_saude } from "./src/models/Unidades_saude.mjs";

// Config JSON response
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Home");
  res.send("Rota principal!");
});

app.get("/medicamentos/consultar/:codigo_remedio", (req, res) => {
  Medicamentos.findAll({
    where: {
      codigo: req.params.codigo_remedio,
    },
  })
    .then((medicamento) => {
      res.send(medicamento);
    })
    .catch((error) => {
      console.log(`Erro ao consultar medicamento: ${error}`);
      res.status(500).json({ error: "" });
    });
});

app.get("/medicamentos/consultar_estoque/:id_unidade_atual/:qtd_desejada/:codigo_medicamento", (req, res) => {
  // id da unidade de saúde atual - será pego via sessão
  const { id_unidade_atual, codigo_medicamento, qtd_desejada } = req.params;

  Itens_estoque.findAll({
    where: {
      id_unidade_saude: id_unidade_atual,
      codigo_medicamento: codigo_medicamento,
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

app.get("/medicamentos/outras_unidades/:id_unidade_atual/:qtd_desejada/:codigo_medicamento", consulta_medicamentos_outras_unidades);

app.get("/ordens_retirada/consultar_ordens_retiradas/:id_unidade",consultar_ordens_retiradas);

app.post("/medicamentos/agendar_retirada", agendar_retirada);

app.post("/ordens_retirada/confirmar_ordem_retirada", confirmar_ordem_retirada);

async function consulta_medicamentos_outras_unidades(req, res) {
  const { id_unidade_atual, codigo_medicamento, qtd_desejada } = req.params;

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

    const unidades_proximas = await Distancias.findAll({
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

    let unidades_proximas_disponiveis = []
    for (let c = 0; c < unidades_proximas.length; c++) {
      unidades_proximas_disponiveis.push(
        await Unidades_saude.findOne({
          where:{
            id: unidades_proximas[c].id_unidade_saude_destino
          }
        })
      )
    }

    res.send(unidades_proximas_disponiveis);
  } catch (error) {
    console.error(`Erro ao obter unidades próximas: ${error}`);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

async function agendar_retirada(req, res) {
  const { id_unidade_atual, codigo_medicamento, qtd_desejada, cpf_cliente } = req.body;

  try {
    const cliente_requisitante = await Clientes.findOne({
      where: {
        cpf: cpf_cliente,
      },
    });
    
    if(cliente_requisitante){
      const novo_agendamento = await Ordens_retirada.create({
        id_cliente: cliente_requisitante.id,
        codigo_medicamento: codigo_medicamento,
        qtd_solicitado: qtd_desejada,
        id_unidade_saude: id_unidade_atual,
        retirado: false,
      });
  
      console.log(`novo_agendamento: ${novo_agendamento}`);
      res.json({ novo_agendamento: novo_agendamento });
    } else{
      console.log("CPF não encontrado!")
      res.status(500).json({ error: `CPF ${cpf_cliente} não encontrado` });
    }
  } catch (error) {
    console.log(`Erro ao agendar retirada: ${error}`);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
}

async function consultar_ordens_retiradas(req, res) {
  const { id_unidade } = req.params;

  try {
    const ordens_retidas = await Ordens_retirada.findAll({
      where: {
        id_unidade_saude: id_unidade,
      },
    });

    console.log(`Ordens de retirada: ${ordens_retidas}`);
    res.json({ ordens_retidas: ordens_retidas });
  } catch (error) {
    console.log(`Erro ao consultar as ordens de retirada: ${error}`);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

async function confirmar_ordem_retirada(req, res) {
  const { id_ordem_retirada } = req.body;

  try {
    const ordem_retirada = await Ordens_retirada.findOne({
      where: {
        id: id_ordem_retirada,
      },
    });

    // Verifica se a retirada já foi confirmada
    if (ordem_retirada.retirado) {
      res.status(400).json({ aviso: "A ordem de retirada já foi confirmada!" });
    } else {
      const item_estoque = await Itens_estoque.findOne({
        where: {
          codigo_medicamento: ordem_retirada.codigo_medicamento,
          id_unidade_saude: ordem_retirada.id_unidade_saude,
          qtd_atual: {
            [Op.gte]: ordem_retirada.qtd_solicitado,
          },
        },
      });

      // Subtrai a quantidade em estoque
      item_estoque.set({
        qtd_atual: item_estoque.qtd_atual - ordem_retirada.qtd_solicitado,
        dt_retirada: Date.now(),
      });

      await item_estoque.save();

      // Confirma a ordem de retirada
      ordem_retirada.set({
        retirado: true,
      });

      await ordem_retirada.save();

      res.json({ ordem_retirada: ordem_retirada });
    }
  } catch (error) {
    console.log(`Erro ao alterar o status da retirada: ${error}`);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`);
});
