const express = require('express');
const app = express();
const port = 1000;
app.set('view engine','ejs');
var request = require('request');
app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/search',(req,res)=>{
    const searchItem = req.query.search;
   request(`http://www.omdbapi.com/?s=${searchItem}&apikey=thewdb`,function(error, response, body){
        if(!error && response.statusCode == 200){
            var parseData = JSON.parse(body)
            res.render('movie',{parseData : parseData});
        }
   });
});
app.listen(port,()=>{console.log(`Server is running on ${port}`)});