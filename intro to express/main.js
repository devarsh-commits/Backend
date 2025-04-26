const express = require('express')
const { request } = require('http')
const app = express()
const port = 3000

app.use(express.static('public')) //make public folder accesible to public

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/about',(req,res)=>{
//     res.send("This is about section")
// })
// app.get('/blog',(req,res)=>{
//     res.send("this is blog section")
// })
// app.get('/contact',(req,res)=>{
//     res.send("this is persons contact")
// })

//no here we are goin to use url parameters for efficient coding
app.get('/about/:names',(req,res)=>{
    console.log(req.query)
    console.log(req.params)
    res.send(`this is : ${req.params.names}`)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

