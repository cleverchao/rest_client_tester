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
            method: req.method,
            data: postData,
            cookies: req.headers.cookie
        };
        for (var i in output) {
            if (output.hasOwnProperty(i) && output[i]) {
                console.log(i + ' : ' + output[i]);
            }
        }
        console.log('----------------------------------------');
        res.end('{"data":"response data"}');
    });

});

console.log('listening on port ' + CONFIG.port);
app.listen(CONFIG.port);