let express = require('express');
let bodyParser = require('body-Parser');
let mongodb = require('mongodb');

let app = express();

//middleware bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = 8080;
app.listen(port);

let db = new mongodb.db(
    'instagram',
    new mongo.Server('localhost', 27017, {})
    
);

console.log('o servidor esta funcionando');

app.get('/', (req, res) => {
    res.send({mensagem: 'E ai tudo bem?'});
});

app.post('/api', (req, res) => {
    let dados = req.body;//os parametros de bodyparser serao carregados nesse body
    res.send(dados);
});
