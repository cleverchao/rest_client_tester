var express = require('express');
var app = express();
var CONFIG = require('./config');

app.use('/', function(req, res) {
    var postData = "";
    req.setEncoding("utf8");
    req.addListener("data", function(data) {
        postData += data;
    });
    req.addListener("end", function() {
        var output = {
            url: req.url,
            method: req.method

        };
        res.end();
    });

});

console.log('listening on port ' + CONFIG.port);
app.listen(CONFIG.port);