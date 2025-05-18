import mongoose from "mongoose";
let todoschema=new mongoose.Schema({
    "title":String,
    "desc":String,
    "isdone":Boolean
})
export const Todo=mongoose.model("Todo",todoschema)
