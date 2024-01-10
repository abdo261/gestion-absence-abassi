const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    user_type: {
      type: String,
      enum: ["admin", "responsable"],
      required: true,
      default: "responsable",
    },
    cin: { type: String, required: true, unique: true },
    nom: { type: String, required: true, minlength: 3,maxlength:40 },
    prenom: { type: String, required: true, minlength: 3,maxlength:40 },
    user_name: {
      type: String,
      default:function() {
        return this.nom + "_" + this.prenom;
      },
      required: true,
    },
    email: { type: String, required: true, unique: true },
    mot_de_passe: { type: String, required: true,minlength: 8 },
    PPR: {
      type: String,
      required: function () {
        return this.user_type === "responsable";
      },
      unique: true,
    },
    etablissement: {
      default:null,
      type: Schema.Types.ObjectId,
      ref: "Etablissement",
      
    },
    isAdmin: {
      type: Boolean,
      default: function() {
        return this.user_type === "admin"; 
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = model("User", UserSchema);

module.exports = User;
