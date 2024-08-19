const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('server is running.....');
})
app.get('/home', function(req, res){
    res.send('this is home page..........................');
})
app.get('/about', function(req, res){
    let about = {
        name: "raja roy",
        role: "developer"
    }
    res.send(about.role);
})
app.listen(3000);


