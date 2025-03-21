import express from 'express';
import cors from 'cors';
import produtoRoute from './route/produtos.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', produtoRoute)

app.listen(4000);