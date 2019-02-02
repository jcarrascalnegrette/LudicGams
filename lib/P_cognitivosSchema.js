//juegosSchema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const P_cognitivosSchema = new Schema({



	P_cognitivos:String,
  descripcion:String,

});

module.exports = mongoose.model("Actividades", ActividadeSchema);
