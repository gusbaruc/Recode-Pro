
/*
var express = require('express');
var app = express();

app.get('/', function(req, res) {

    var mysql = require('mysql');

    //Credenciais para acessar o banco de dados MySql
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "recode"
    });

    //Comando SQL que vai devolver todos os campos da tabela conteúdo
    connection.query("SELECT * FROM conteudo WHERE modulo = 'front-end';", function(error, result) {
        res.send(result);
    });

});
app.listen(3000,function() {
    console.log("Servidor rodando com Express");
});
*/

var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res) {

    var mysql = require('mysql');

    //Credenciais para acessar o banco de dados MySql
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "recode"
    });

    //Comando SQL que vai devolver todos os campos da tabela conteúdo
    connection.query("SELECT * FROM conteudo WHERE modulo = 'front-end';", function(error, result) {
        res.render('./frontend', { dados: result });
    });

});
app.listen(3000,function() {
    console.log("Servidor rodando com Express");
});