"use strict"
const express = require("express"),
      AppRoute = express.Router()
      const AlumnosModel = require("../Models/AlumnosModel")
      AppRoute.get("/obtener-data",(req, res)=>{
         //AlumnosModel.find().then(resp=>{
         //   res.json(resp)
         //},err=>{
         //  res.status(500).json(err)
         //})
         AlumnosModel.find({}, (err, docs)=>{
          res.json(docs)

         })
          });
      module.exports = AppRoute;