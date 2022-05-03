const mongoose = require("mongoose")
mongoose.connect(`mongodb://localhost/CursoMongo`)
module.exports= mongoose;