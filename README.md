# PharmaConnect

## Pré Requisitos:

- Possuir o Docker instalado na máquina ([Docker Desktop download](link_para_download)).

## Passos para rodar a aplicação:

1. Faça o download desse repositório e abra a pasta raiz da aplicação.
2. Abra o terminal na pasta raiz e execute o comando: **`docker-compose up`** e aguarde, pois o banco de dados e a aplicação irão subir. <br> Obs: Utilizamos o Docker, desta forma, não é necessário possuir o banco de dados MySQL e Node.js instalados na sua máquina.
4. Aguarde até a aplicação indicar que está conectada e rodando.
![Evidência](https://github.com/poggianth/PharmaConnect/assets/99415752/01b56118-f6ff-4e6a-a7b8-0c993c2a9067)

## Funcionalidades Implementadas:
Utilizamos 2 funcionalidades no módulo Sequelize:
- **Migrations:** Cria toda a estrutura das tabelas no banco de dados.
- **Seeders:** Insere registros nas tabelas para testarmos a aplicação.

## Divisão de tarefas
Eu fiquei responsável pelo back-end.
Já o front-end, foi desenvolvido pelo ([Nicolas Rodrigues](https://github.com/NicolasRSJ/projeto-integrador))
