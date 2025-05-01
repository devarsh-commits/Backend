const { Template } = require('ejs');
const express=require('express')
const app=express()
const port=3000;
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    let sitename='adidas'
    let searchtext="Search Now"
    res.render('index',{sitename:sitename,searchtext:searchtext})
})
app.get('/blog/:slug',(req,res)=>{
    let BlogTitle='Adidas :the show company'
    let BlogCOntent="It's a very good brandn"
    res.render('index',{BlogTitle:BlogTitle})
})
app.listen(port,()=>{
    console.log('application is running')
})