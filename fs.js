const http = require('http');
const fs = require('fs');
const porta = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    fs.readFile('site.html', (err, arquivo) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(arquivo);
        return res.end();
    });
});

server.listen(porta, () => {
    console.log('Servidor rodando');
});
