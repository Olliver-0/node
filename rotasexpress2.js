const express = require('express');
const app = express();
const porta = process.env.PORT || 3000;
    
app.get('/', (req, res) => {
    res.send('Seja Bem-Vindo');
});

app.get('/canal', (req, res) => {
    res.json({canal: 'CFB Cursos'});
});

app.listen(porta || 3000, () => {console.log('Servidor Rodando')});
