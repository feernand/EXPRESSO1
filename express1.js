const express=require('express');

const server=express();

//rotas
server.get('/',(req,res)=>{
    res.send('<h1>VAI TOMA NO CU, PIRANHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1><img src="https://i.pinimg.com/originals/e8/28/ae/e828ae616854b9266954c2655f650bf2.gif"/>')
})

server.get('/paia',(req,res)=>{
    res.send('tu é paia')
})

server.get('/nome',(req,res)=>{
    res.send('mia Romba')


})

server.get((req,res)=>{
    //res.send('erro')
    res.status(404).send('erro')
})
server.listen(3000);
