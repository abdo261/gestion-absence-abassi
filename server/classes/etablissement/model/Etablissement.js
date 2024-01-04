const mongoose = require("mongoose");

const EtablissementSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    secteur: {
      type: String,
      required: true,
      enum: ["primaire", "collége", "lycée"],
    },
    responsable: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Responsable",
      required: false,
    },
    enseignants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Enseignant",
        required: false,
      },
    ],
    absence: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Absence", required: false },
    ],
    commune: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Commune",
      required: false,
    },
  },
  {
    versionKey: false,
  }
);
module.exports = mongoose.model("etablissement", EtablissementSchema);
