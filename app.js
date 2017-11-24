var express = require('express');
var app = express();
var taskcontroller = require ('./controllers/task');

app.set('view engine', 'ejs');
app.use(express.static('./public'));

//fire function
taskcontroller(app);

app.listen(3000);
console.log('Your App running on a port 3000');