const express = require('express')
const router = express.Router();
//const db recebe uma conexão do banco de dados
const db = require('./../db/models')


//rota de listar
router.get("/users", async (req,res) => {
    //recebe o número da pagina que é 1 por default conforme configurado aqui
    const { page = 1 } = req.query;
   

    //limite de registro por página
    const limit = 5;

    //variável com o numero da ultima página
    var lastPage = 1;

    //conta a quantidade de páginas no BD
    const countUser = await db.Users.count();
    

    //verificação se tem registro
    if(countUser !== 0){
        //calcula qual vai ser a ultima page e utiliza a função
        //math.ceil para arredondar pra cima caso exista mais
        //registros sem completar uma pagina.
        lastPage = Math.ceil(countUser / limit);
        
    }else{
        //mensagem que não encontrou registro
        return res.status(400).json({
            mensagem: "nenhum usuário encontrado :("
        });
    }

    

    //recupera todos os registros do DB
    const users = await db.Users.findAll({
        //selecionando quais colunas do DB(se não configurado vem tudo)
        attributes: ['id','name','email'],
        //ordenando os registros por ordem decrescente
        order: [['id', 'ASC']],
        //SELECIONA A PARTIR DE QUAL REGISTRO DEVE RETORNAR E
        //O LIMITE DOS REGISTROS
        offset: Number((page * limit) - limit),
        limit:limit,
    });

    if(users){
        var pagination = {
            //caminho
            path: '/users',
            //pag atual
            page,
            //URL da pag anterior
            prev_page_url: Number(page) - Number(1) >= 1 ? Number(page) - Number(1) : false,
            //URL da pag seguinte
            next_page_url: Number(page) + Number(1) > lastPage ? false : Number(page) + Number(1),
            //lultima pagina
            ultima_pagina: lastPage,
            //total de registros
            total_registros: countUser
        
        } 
        //retorna mensagem de sucesso
        return res.json({
            pagination,
            users
            
        });
        
    }else{
        //retorna mensagem de erro
        return res.status(400).json({
            mensagem: "deu erro na recuperação de registros"
        });
    }
});

//rota pra visualizar e receber parametro id da url
router.get("/users/:id", async (req,res) => {

    //receber parametro da url
    const { id } = req.params;
   

    //recuperando registro do BD
    const user = await db.Users.findOne({
        attributes: ['id', 'name', 'email', 'createdAt', 'updatedAt'],
        
        //acrescentando condição para localização de registro
        where: {id},
    });


    if(user){
        //mensagem retorna os dados
        return res.json({
            
            user: user.dataValues
        });
    }else{
        //mensagem 
        return res.status(400).json({
            mensagem: "erro: id não encontrado"
        });
    }
});

//rota de cadastrar
router.post("/users", async (req, res) => {

    var dados = req.body;
    console.log(dados);

    await db.Users.create(dados).then((dados) => {
        //retorna mensagem de sucesso e dados
        return res.json({
            mensagem: "criado meu chapa",
            dados
        })
    }).catch((erro) => {
        //retorna mensagem de erro e dados
        return res.json({
            mensagem: "deu erro na criação : " + erro,
        })
    })

    
});

//criar a rota editar
router.put('/users', async (req, res) => {
    //receber os dados enviados no corpo da req
    const dados = req.body;
    
    //editar no DB
    await db.Users.update(dados,{where: {id: dados.id}})
    .then(() =>{
        //mensagem de sucesso
        return res.json({
            mensagem: 'usuário editado com sucesso'
        });

    }).catch(()=> {
        //mensagem de erro
        return res.status(400).json({
            mensagem: 'dale boy deu certo n'
        });
    });
});

//rota para apagar
router.delete('/users/:id', async (req, res) => {
    //receber o parametro id
    const { id } = req.params;
    
    //modificar no banco
    await db.Users.destroy({
        //acrescentar condição de encontro de id
        where: { id } 
    }).then(() => {
        //retorna mensagem de sucesso
        return res.json({
            mensagem: 'apagado lindamente'
        });
    }).catch(() => {
        return res.status(400).json({
            mensagem: 'não apagado'
        });
    });
    

    
});


module.exports = router;