import mongoose from "mongoose";
const model=mongoose.Schema({
    id:String,
    username:String,
    password:String
})
export const myschema=mongoose.model("myschema",model)