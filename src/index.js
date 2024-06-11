import { sequelize } from './infra/config/mysql/database-config.js';
import app from '../src/infra/server/server.js';

const main = async () => {
  const port = 8080;
  const server = app;

  try {
    //await sequelize.authenticate();
    console.log('Conexão ao banco de dados realizada com sucesso!');

    server.listen(port, () => {
      console.log(`Servidor em execução na porta ${port}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar a aplicação:', error);
  }
};

main();
