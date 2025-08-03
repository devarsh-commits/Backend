const { setEngine } = require('crypto');
const express=require('express');
const app=express();
const fs=require('fs')
const port =3000;
app.use(express.static('public'))
app.use(setEngine,ejs);
app.get('/',(req,res)=>{
    res.render(index,para)
})
app.listen(port,()=>{
    console.log("your app is running on port no 3000")
})
