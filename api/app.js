const express = require('express');
//biblioteca permite conexão externa
const cors = require('cors')
const app = express();

app.use(express.json());

app.use((req,res,next) =>{
    //qualquer endereço pode fazer a requisição
    res.header('Access-Control-Allow-Origin', '*');
    //tipos de método que a API aceita
    res.header('Access-Control-Allow-Methods', "GET", "PUT", "POST", "DELETE");
    //permitir o envio de dados para a API
    res.header('Access-Control-Allow-Headers', "Content-Type");
    //executar o cors
    app.use(cors());
    //quando não tiver erro continuar funcionando
    next();
})

const db = require('./db/models')
const users = require('./controllers/users');

app.use('/', users)



app.listen(8080, () => {
    console.log("tamo rodando filé!!!(porta 3001)")
});
