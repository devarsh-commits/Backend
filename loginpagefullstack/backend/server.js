import express from 'express'
import mongoose from 'mongoose';
import { myschema } from './models/mod1.js';
import cors from 'cors'
const app=express();
const port =3000;
app.use(cors())
app.use(express.json())
const conn=mongoose.connect("mongodb://localhost:27017/Dummy")
app.post('/',(req,res)=>{
    const data=req.body
    let id=1
    const Mydata=myschema({id:id,username:data.username,password:data.password})
    id++;
    Mydata.save()
    res.json(Mydata)
    res.send("Response send")

})
app.listen(port,()=>{
    console.log("Your app is running on port 3000")
})