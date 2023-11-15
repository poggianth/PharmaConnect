import { Sequelize } from "sequelize";


const sequelize = new Sequelize("pharmaconnect", "root", "123456", {
  host: "pharmaconnect-db",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado");
  })
  .catch((erro) => {
    console.log("Falha ao se conectar: " + erro);
  });


export { Sequelize, sequelize }