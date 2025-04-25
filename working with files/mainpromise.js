import { log } from "console"
import { writeFile } from "fs"
import fs from "fs/promises"

let a=await fs.readFile("dev.txt")
console.log(a.toString())
let b=  await fs.writeFile("dev2.txt","\n\n\n\n\nlalna hind k sitara")
try{
    let c=await fs.appendFile("dev2.txt","ohoho jane jana")
    let d=await fs.readFile("dev2.txt")
    console.log(d.toString());
}catch(error){
console.log(error);

}


