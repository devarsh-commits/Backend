const express=require('express')
const router=express.Router()
//adding router middleware
router.use('/user/:id',(req,res,next)=>{
    console.log('url info',req.originalUrl);
    // res.send("matter close")
    next();
})

router.get('/user/:id',(req,res,next)=>{
    if(req.params.id===0){
        next(router)
    }
    else{
        next()
    }
})
router.get('/user/:id',(req,res,next)=>{
    console.log('reg');
    next()
})

router.get('/user/:id',(req,res)=>{
    console.log('uniq');
    res.send()
});

module.exports=router
