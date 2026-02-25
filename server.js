
const mysql = require("mysql2"); // Importa a biblioteca mysql2

// Cria a conexão com o banco de dados MySQL
const connection = mysql.createConnection({
      host: "localhost", // Endereço do servidor MySQL (ou IP)
      user: "root", // Nome de usuário do MySQL
      password: "Alice25052022", // Senha do usuário
      database: "exemplo_db", // Nome do banco de dados
});
// Conecta ao banco de dados
connection.connect((err) => {
      if (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
        return;
      }
      console.json("Conectado ao banco de dados MySQL com sucesso!");
      });
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json()); // 👈 obrigatório para ler req.body
const usuariosRoutes = require("./routes/usuarios");
const PORT = 3000;
    
// Middleware para interpretar JSON no corpo da requisição
app.use(express.json());
    
// Configura as rotas para usuários
app.use("/usuarios", usuariosRoutes);

    
// Inicia o servidor
app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
});