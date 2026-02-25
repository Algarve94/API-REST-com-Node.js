# API-REST-com-Node.js
Projeto de API REST desenvolvido com Node.js e Express para gerenciamento de dados e implementação de rotas dinâmicas, utilizando bancos de dados SQL e MongoDB.

# API REST com Node.js e Express

Projeto de API REST desenvolvido utilizando Node.js e Express para gerenciamento de dados e manipulação de requisições HTTP.

## Tecnologias utilizadas

- JavaScript
- Node.js
- Express.js
- MongoDB
- SQL
- JSON

## Funcionalidades

- Criação de rotas REST
- Uso de middlewares
- Parâmetros de rota
- Query strings
- Integração com banco de dados
- Manipulação de dados em JSON

## Como executar o projeto

1. Clonar o repositório
2. Instalar dependências

npm install

3. Executar o servidor

node index.js

## Exemplo de rota da API

GET /usuarios
Rota para listar usuarios
POST /usuarios
Criar novo usuario
PUT /usuarios
Para atualizar dados do usuario
DELETE /usuarios
Para excluir usuario

## JSON

{
  "nome": "Lucas",
  "email": "lucas.algarve.pereira@gmail.com,
  "idade": 31
}

## Postman

API testada utilizando Postman para validação das rotas e respostas.

## Estrutura

node-api
│
├── config
│   └── db.js
│
├── models
│   └── usuario.js
│
├── controllers
│   └── usuarioController.js
│
├── routes
│   └── usuarioRoutes.js
│
├── package.json
└── server.js


## Estrutura do projeto

config      -> conexão com banco de dados
models      -> estrutura dos dados
controllers -> lógica da aplicação
routes      -> definição das rotas da API
server.js   -> inicialização do servidor


