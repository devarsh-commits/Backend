import express from"express"
import mongoose  from "mongoose";
import { Todo } from "./models/Todo.js";
const app=express()
const port=3000;
const conn=await mongoose.connect("mongodb://localhost:27017/mydata1");
app.get('/',(req,res)=>{
    let todo=new Todo({title:"Wakeup",desc:"wakeup sid",isdone:false})
    todo.save()
    res.send("hello World")
})
app.listen(port,()=>{
    console.log("app is running")
})

