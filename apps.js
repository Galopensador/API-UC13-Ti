import express from 'express';

//importa as rotas
import carroRoutes from './Routes/carroRoutes.js'

const app = express();

app.use(express.json());

app.use("/Carros",carroRoutes);


app.listen(3000, () =>{
    console.log('Servidor rodando com sucesso na porta 3000')
});

/*Executa o APP
node apps.js
*/