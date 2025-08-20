const express = require('express')

const router = express.Router()


router.get('/home',(req,res)=>{
    res.send('home')
})

router.get('/list',(req,res)=>{
    res.send('list')
})

module.exports = router