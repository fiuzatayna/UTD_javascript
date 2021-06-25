const express = require('express');

const app = express();

var bodyParser = require('body-parser');

global.__basedir = __dirname;

const db = require("./config/db.config");

const GuideSeq = db.GuideSeq;

//Client --> GuideSeq
//client --> guideSeq

let router = require('./routes/router.js');

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static('resources'));
app.use('/', router);


// simple route
//app.get("/", (req, res) => {
//    res.json({ message: "Welcome to Tayna's application." });
//});


// cria o servidor

const server = app.listen(8080, function (){
    let host = server.address().address
    let port = server.address().port

    console.log("O App está executando em http://%s:%s", host, port);
})

db.sequelize.sync({force: true}).then(() => {
    console.log('Reescreve e popula a tabela com { force: true } ');
    GuideSeq.sync().then(() => {
        const guideSeqs = [
            { gene: 'FOXP3', species: 'Homo sapiens', sequence: 'CCCACCCACAGGGATCAACG'},
            { gene: 'Foxp3', species: 'Mus musculus', sequence: 'GCACCGTCTGGGGCCCGACT'},
            { gene: 'BCL2', species: 'Homo sapiens', sequence: 'ACCTGACGCCCTTCACCGCG'},
            { gene: 'Bcl2', species: 'Mus musculus', sequence: 'CATCTGACCCTCCGCCGGGC'},
        ]

        for(let i=0; i<guideSeqs.length; i++){
            GuideSeq.create(guideSeqs[i]);
        }
    })
});