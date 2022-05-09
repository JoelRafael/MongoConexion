"use strict"

const express = require("express"),
      app = express(),
      route = require("./Routes/routes");
      app.use(express.json());
      app.use (route);

    
      app.listen(3000, ()=>{
        console.log("http://localhost:3000")
      })