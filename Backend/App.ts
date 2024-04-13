import express from 'express';
import cors from 'cors';
import { MongoHelper } from './config/mongo-helper';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/auth/singup', (req, res) => {
  console.log(req.body)

  // Receber User e Password
  const { user, password} = req.body
  if(!user || !password) {
    return res.status(400).json({error: "Verifique se os campos foram preenchidos!"})
  }


  // Validar User e Password
  // Verificar se o User já existe no banco
  // Criptografar senha
  // Salvar User no banco de dados
  // Gerar um Token JWT
  // Retornar o Token JWT
  res.status(200).send("OK")
})

MongoHelper.connect('mongodb://127.0.0.1:27017/clone-lol')
  .then(() => {
    app.listen(port, () => {
      console.log('Servidor rodando na porta ' + port);
    });
  })
  .catch(console.error);
