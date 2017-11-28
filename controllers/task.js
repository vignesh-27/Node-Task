'use strict' //Applying strict mode to the file format
var obj = require('./value.json'); //including json data objects

module.exports = (app)=>{

app.get('/',  (req,res)=>{
    res.render('index', {data: obj});
});

app.get('/career', (req, res)=>{
    res.render('career');
});

app.get('/contact', (req, res)=>{
    res.render('contact');
});  

}