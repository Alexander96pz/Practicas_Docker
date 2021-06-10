const express=require('express')
const app=express()
const { urlencoded, json }=require('body-parser')
const user = require('./routes/user')
app.use(urlencoded({extended:true}))
app.use(json())
app.use('/user',user)
app.listen(3000,()=>{
    console.log('Escuchando puerto 3000');
})