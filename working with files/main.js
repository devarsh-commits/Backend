const { log } = require("console")
const fs=require("fs")
// console.log(fs);
console.log('starting');
// fs.writeFileSync("dev.text","Devarsh is a good boy",()=>{
//  console.log('reading');
 
// }) // block level (line by line)
fs.write

fs.writeFile("dev2.txt","Devarsh is very handsome boy",()=>{
    console.log("initiating")
    fs.readFile("dev2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})
console.log('Ending');
 fs.appendFile("dev.txt","Ha bhai appen ho gaya hu",(e,d)=>[
    console.log(d.toString())
 ])
