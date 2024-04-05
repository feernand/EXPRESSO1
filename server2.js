//abrir arquivos de html, respostas no server com arquivo

const express=require('express');
const server2=express();

server2.listen(3000);

//2 definindo as rotas
/*
principal
servicos
contato
404
*/

//3 escrevendo as rotas
server2.get('/',(req,res)=>{
    res.sendFile('/pags/principal.html',{root:__dirname});
})
server2.get('/servicos',(req,res)=>{
    res.sendFile('/pags/servicos.html',{root:__dirname});
})
server2.get('/contato',(req,res)=>{
    res.sendFile('/pags/contato.html',{root:__dirname});
})
server2.get('/acerca_de',(req,res)=>{
    res.redirect('/contato');
})
server2.use((req,res)=>{
    res.status(404).sendfile('/pags/404.html',{root:__dirname});
})