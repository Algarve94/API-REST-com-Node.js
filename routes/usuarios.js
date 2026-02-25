const express = require("express");
const router = express.Router();
const connection = require("../config/db");


// Rota para listar todos os usuários (READ)
router.get("/", (req, res) => {
      connection.query("SELECT * FROM usuarios", (err, results) => {
        if (err) {
          res.status(500).json("Erro ao buscar usuários");
        }
        res.json(results);
      });
});
    
// Rota para adicionar um novo usuário (CREATE)
router.post("/", (req, res) => {
  console.log("Corpo recebido:", req.body);

  const { nome, email } = req.body;
  const sql = "INSERT INTO usuarios (nome, email) VALUES (?, ?)";

  connection.query(sql, [nome, email], (err, results) => {
    if (err) {
      console.error("Erro MySQL:", err);
      return res.status(500).json("Erro ao atualizar usuário");
    }
    res.json({ id: results.insertId, nome, email });
  });
});

    
 // Rota para atualizar um usuário (UPDATE)
    router.put("/:id", (req, res) => {
  // Logs para depuração
  
      const { id } = req.params;
      const { nome, email } = req.body;
      const sql = "UPDATE usuarios SET nome = ?, email = ? WHERE id = ?";
      connection.query(sql, [nome, email, id], (err, results) => {
        if (err) {
          console.error("Erro MYSQL:", err);
          return res.status(500).json("Erro ao atualizar usuário");
        }
        
        console.log("Resultado MySQL:", results);
        
        if (results.affectedRows === 0) {
          return res.status(404).json("Usuário não encontrado");
        }
        res.json({ id, nome, email });
       });
});
    
    
// Rota para deletar um usuário (DELETE)
router.delete("/:id", (req, res) => {
      const { id } = req.params;
      const sql = "DELETE FROM usuarios WHERE id = ?";
      
      connection.query(sql, [id], (err, results) => {
        if (err) {
          console.error("Erro:", err);
          return res.status(500).json("Erro ao deletar usuário");
        }
        
        console.log("Resultado MySQL (DELETE):", results); 

        if (results.affectedRows === 0) {
          res.status(404).json("Usuário não encontrado");
        } else {
          res.json("Usuário deletado com sucesso");
        }
      });
});
    
module.exports = router;