const mongoose = require("mongoose")
const conn = require("../Database/Conexion")
//conn
const Alumnos = mongoose.Schema({
     nombre:String,
     apellido:String,
     edad:Number,
     sexo:String,
     matricula:{
         nombre:String,
         ano:Number,
         renovada:Boolean
     }})
     const AlumnosModel = mongoose.model("alumno", Alumnos);
     module.exports = AlumnosModel;