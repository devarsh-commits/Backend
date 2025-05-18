import mongoose from "mongoose";
const todoschema=mongoose.Schema({
    title:String,
    desc:String,
    isDone:Boolean
})
export const todo=mongoose.model('todo',todoschema);
