const http = require('http');
const fs = require('fs');
const porta = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    fs.appendFile('teste.txt', 'Curso de Node - CFB Cursos', (err) => {
        if(err) throw err;
        console.log('Arquivo Criado');
    });
});

server.listen(porta, () => {
    console.log('Servidor rodando');
});
