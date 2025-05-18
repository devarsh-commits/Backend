import express from 'express'
import mongoose from "mongoose";
import { todo } from './models/todo.js';
let conn=await mongoose.connect("mongodb://localhost:27017/")
let app=express();
let port=3000;
app.get('/',(req,res)=>{
    const Todo=new todo({tile:"Excercise",desc:"Wake up and excercise",isDone:false});
    Todo.save();
    res.send("hellow world")
})
app.listen(port,()=>{
    console.log(`Your Express is running on port ${port}`);
})