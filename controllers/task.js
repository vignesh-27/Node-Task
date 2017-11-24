'use strict' //Applying strict mode to the file format

var data = [{name:'Index', link:'/'},{name:'Career', link:'/career'},
           {name:'Contact Us', link:'/contact'}];

var font = {margin:'margin-top:120px;', size:'font-size:40px;',family:'font-family:olivia;', color:'color:orange;'};

var img  = {background:'/assets/images/bg6.jpeg', logo:'/assets/images/adapt-logo.png',  margin_l:'margin-left: 400px;',
           margin_t:'margin-top: 60px;', height:'height : 350px;', width:'width : 500px;', opacity:'opacity : 0.4;'};


module.exports = (app)=>{

app.get('/',  (req,res)=>{
    res.render('index', {data: data, font:font, image:img});
});

app.get('/career', (req, res)=>{
    res.render('career');
});

app.get('/contact', (req, res)=>{
    res.render('contact');
});  

}