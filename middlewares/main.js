const express=require('express');
const fs=require("fs")
const app=express()
const port=3000;
const routes=require('./routes/router.js')

// //middleware1 -Logger for our application
// app.use((req,res,next)=>{
//     fs.appendFileSync('dev.txt',`${Date.now()} is a ${req.method}\n`)
//     req.dev="I am devarsh bhai" //modifying the requests
//     next(); //passing of req to others mids 
// })
// //middleware2
// app.use((req,res,next)=>{
//     console.log("m2")
//     next()
// })
app.use('/',routes);
app.get('/abt',(req,res)=>{
    res.send("hellow world" +req.dev);
})
app.listen(port,()=>{
    console.log(`Your app is currently running on ${port}`)
})