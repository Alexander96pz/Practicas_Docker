const express = require('express');
const app=express()
app.get('/',(req,res)=>{
    let user={
        'Universidad': "UTPL",
        'Curso': "Procesos de Ingeniería de Software",
        'Alumno': "Marlon Pizarro",
        'Período': "Abr/Ago 2021",
        'Lenguaje de programación preferido': "Nodejs",
        'Aspiración PostGraduación': "Desarrollador Empresarial"
    };
    res.send(user);
})
module.exports=app