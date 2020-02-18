//Define uma instância para o express
var express = require('express');
var app = express();

//Define o EJS como nossa view engine
app.set('view engine', 'ejs');
//Usar res.render para carregar arquivos de view ejs
//index page
app.get('/', function(req, res) {
    var bebidas =
    [{nome: 'Cerveja', total: 3},
     {nome: 'Refrigerante', total: 5},
     {nome: 'Suco', total: 10}];

    res.render('pages/index', {
        bebidas: bebidas
    });
});
//About page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8000)
console.log('8000 é a porta mágica');