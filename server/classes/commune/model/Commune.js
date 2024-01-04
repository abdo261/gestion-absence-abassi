const mongoose = require("mongoose");

const CommuneSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  }
},{
    versionKey:false,
    timestamps:true
});

const Commune = mongoose.model("Commune", CommuneSchema);
module.exports = Commune
