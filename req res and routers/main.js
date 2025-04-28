let express=require("express")
let blog=require('./routes/blog');
let app=express();
let port=3000;
app.use(express.static('public'));
app.use('/blog',blog);
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.post('/',(req,res)=>{
    console.log("Hey it's a post request")
    res.send("hello world post")
})
app.get('/html',(req,res)=>{
    res.sendFile("templetes/index.html",{root:__dirname})
})
app.listen(port,()=>{
    console.log(`Example app listning on ${port}`);
    
})
