const { log } = require('console');
const fs=require('fs-extra')
const path=require('path');
let mypath=(path.join(__dirname,'/directory'));;
let pdf;
let zip;
let jpg;
// console.log(mypath);
//now reading the contents of file;
fs.readdir(mypath,(err,files)=>{
    if(err){
        console.log("there is error in reading files")
        return
    }
    files.forEach(myfiles=>{
       if(path.extname(myfiles)==='.png'){
           fs.mkdir(path.join(mypath,'png'),{recursive:true})
           let png=(path.join(mypath,'/png'));
          fs.move(`${mypath}\\${myfiles}`,`${png} \\ ${myfiles}`,{overwrite:true})
       }
       else if(path.extname(myfiles)==='.jpg'){
        fs.mkdir(path.join(mypath,'jpg'),{recursive:true})
        jpg=(path.join(mypath,'/jpg'));
        fs.move(`${mypath}\\${myfiles}`,`${jpg} \\ ${myfiles}`,{overwrite:true})
     }
     else if(path.extname(myfiles)==='.zip'){
        fs.mkdir(path.join(mypath,'zip'),{recursive:true})
        zip=(path.join(mypath,'/zip'));
        fs.move(`${mypath}\\${myfiles}`,`${zip} \\ ${myfiles}`,{overwrite:true})
     }
     else if(path.extname(myfiles)==='.pdf'){
        fs.mkdir(path.join(mypath,'pdf'),{recursive:true})
        pdf=(path.join(mypath,'/png'));
        fs.move(`${mypath}\\${myfiles}`,`${pdf} \\ ${myfiles}`,{overwrite:true})
     }
     else{
        return;
     }
       
    })

})  

