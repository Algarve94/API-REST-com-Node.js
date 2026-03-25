# API-REST - Gerenciamento de Usuários
API REST desenvolvida com Node.js e Express para gerenciamento de usuários, com integração a bancos SQL e MongoDB.

## Objetivo
Esse projeto foi criado para praticar conceitos de backend, incluindo:
- Criação de APIs RESTful
- Estruturação em padrão MVC
- Integração com banco de dados
- Manipulação de requisições HTTP

## Tecnologias 
- Node.js
- Express.js
- MongoDB
- SQL
- JavaScript

## Funcionalidades
- CRUD completo de usuários
- Uso de middlewares
- Parâmetros de rota e query strings
- Integração com banco de dados
- Respostas em JSON

## Rotas da API
### Listar usuários
GET /usuarios

### Criar usuário
POST /usuarios

### Atualizar usuário
PUT /usuarios/:id

### Deletar usuário
DELETE /usuarios?:id


## Exemplo de requisição

```json
{
  "nome": "Lucas",
  "email":
"lucas.algarve.pereira@gmail.com",
  "idade": 31
}



