let express=require('express')
let router=express.Router();
router.get('/',(req,res)=>[
    res.send("this is first")
])
router.get('/about',(req,res)=>[
    res.send("this is blog's about")
])
router.get('/more',(req,res)=>[
    res.send("more about blogs")
])

module.exports=router;