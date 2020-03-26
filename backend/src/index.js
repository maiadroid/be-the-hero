const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

//rotas e recursos

/**
 * Métodos HTTP:
 * 
 * GET: Busca uma informação do back-end
 * POST: Cria uma informação no back-end
 * PUT: Altera uma informação no back-end
 * DELETE: Deleta uma informação no back-end
 * 
 */

 /**
  * Tipos de parâmetros:
  * 
  * - Query Params: Parâmetros nomeados enviados na rota após o simbolo de interrogação ("?") [Filtros, paginação]
  * - Route Params: Parâmetros utilizados para identificar recursos
  * - Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
  */

  /** Banco de dados
   * 
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   * 
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    * 
    */

    /** 
     * Entidades:
     * - ONGs
     * - Casos
     * 
     * Funcionalidades:
     * - Login de ONG
     * - Logout de ONG
     * - Cadastro de ONG
     * - Cadastrar novos casos
     * - Deletar casos
     * - Listar casos especificos de uma ONG
     * - Entrar em contato com a ONG
     * 
     * 
     */

app.listen(3333);  //porta não problemática, 88 como default encrenca com certos OS
                   //Cancelar: Ctrl + C


