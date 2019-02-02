const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const P_mentalesSchema = new Schema({



	P_mentales:String,
  descripcion:String,

});

module.exports = mongoose.model("Juegos", P_mentalesSchema);
