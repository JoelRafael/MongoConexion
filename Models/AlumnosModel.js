const mongoose = require("mongoose")
const conn = require("../Database/Conexion")
//conn
var posible_valores = ["M", "F"];
const Alumnos = mongoose.Schema({
     nombre:{type:String, require:"El nombre es obligatorio"},
     apellido:{type:String, require:"El apellido es obligatorio"},
     edad:{type:Number, min:[10, "La edad no puede ser menor que 10"], max:[60, "La edad no puede ser mayor que 60"],},
     sexo:String,
     matricula:{
         nombre:String,
         ano:Number,
         renovada:Boolean
     }})
     const AlumnosModel = mongoose.model("alumno", Alumnos);
     module.exports = AlumnosModel;