import { Clientes } from '../models/Clientes.js';
import { Distancias } from '../models/Distancias.js'
import { Itens_estoque } from '../models/Itens_estoque.js'
import { Medicamentos } from '../models/Medicamentos.js'
import { Ordens_retirada } from '../models/Ordens_retirada.js'
import { Unidades_saude } from '../models/Unidades_saude.js'

Clientes.sync();
Distancias.sync();
Itens_estoque.sync();
Medicamentos.sync();
Ordens_retirada.sync();
Unidades_saude.sync();