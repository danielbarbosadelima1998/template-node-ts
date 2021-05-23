import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Bem vindo a api'));

app.listen(3333, () => console.log('Servidor rodando na porta 3333'));
