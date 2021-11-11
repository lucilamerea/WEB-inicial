const express= require('express');
const app= express();
const path = require('path');


app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));


app.get("/index",(req,res)=>{
    res.send('index')
})









app.listen(3000,()=>{
        console.log("Esta corriendo el server")
    })