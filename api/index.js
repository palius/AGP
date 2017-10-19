const app = require('express')();
const bodyParser = require('body-parser');
const ts = require("./typescriptServices");

const server = app.listen(3000, function() {
    console.log('Express server listening on port ' + 3000);
});

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res
        .status(200)
        .send(JSON.stringify({ "addr": server.address().host + ":" + server.address().port }));
});

app.get('/asd', function (req, res) {
    res.status(200).send(JSON.stringify({"asd": "asd"}));
});

app.post('/ts', function(req, res) {
    const result = ts.transpile(req.body.ts);
    
    res
        .status(200)
        .send(
            JSON.stringify({"data": result})
        );
});

module.exports = app;