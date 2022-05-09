"use strict"
const express = require("express"),
      AppRoute = express.Router()
      const AlumnosModel = require("../Models/AlumnosModel")

      AppRoute.get("/obtener-data",(req, res)=>{
         //AlumnosModel.find().then(resp=>{
         //   res.json(resp)
         //},err=>{
         // res.status(500).json(err)
         //})
         AlumnosModel.find({}, (err, docs)=>{
          res.json(docs)

         })
          }).post("/save-data",(req, res)=>{
             
               var Alumno = new AlumnosModel({
                   nombre: req.body.nombre,
                   apellido: req.body.apellido,
                   edad: req.body.edad,
                   sexo:req.body.sexo,
                   matricula:{
                       nombre:req.body.matricula.nombrematricula,
                       ano: req.body.matricula.ano,
                       renovada: req.body.matricula.renovada
                   }
               })
               console.log(Alumno)
               Alumno.save().then(resp=>{
                  res.json("Registro guardado con ")
               },err=>{
                   res.status(400).json(err)
               })
          })
      module.exports = AppRoute;