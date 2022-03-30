let express = require('express');
let bodyParser = require('body-Parser');
let mongodb = require('mongodb');

let app = express();

//middleware bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = 8080;
app.listen(port);

//criando uma variavel db que usamos como objeto de conexao com o banco
let db = new mongodb.Db(
    'instagram',
    new mongo.server('localhost', 27017, {})
);


console.log('o servidor esta funcionando' + port);
app.get('/', (req, res) => {
    res.send({mensagem: 'E ai tudo bem?'});
});

app.post('/api', (req, res) => {
    let dados =  req.body;
    

});

