const app = require('express')();
const ts = require("./typescriptServices");
const server = app.listen(3000, function() {
    console.log('Express server listening on port ' + 3000);
});

app.get('/', function (req, res) {
    res
        .status(200)
        .send(JSON.stringify({ "addr": server.address().host + ":" + server.address().port }));
});

app.get('/asd', function (req, res) {
    res.status(200).send(JSON.stringify({"asd": "asd"}));
});

app.get('/ts', function(req, res) {
    const result = ts.transpile("const asd: string = 'asd';");
    res
        .status(200)
        .send(
            JSON.stringify({"data": result})
        );
});

module.exports = app;