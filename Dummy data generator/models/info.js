import mongoose, { Types }  from "mongoose";
let infoschema=new mongoose.Schema({
    name:String,
    course:String,
    price:Number,
    worth:Boolean,
})
export const info=mongoose.model('info',infoschema)
