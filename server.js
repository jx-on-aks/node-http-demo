var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello from my webapi');
});

var port = 8080;
var server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});

process.on("SIGINT", () => {
    process.exit(130 /* 128 + SIGINT */);
});

process.on("SIGTERM", () => {
    console.log("Terminating...");
    server.close();
});