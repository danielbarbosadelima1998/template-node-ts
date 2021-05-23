import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('Bem vindo a api'));

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
