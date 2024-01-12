const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SUCRET_KEY } = require("dotenv").config().parsed;
const register = async (req, res) => {
  try {
    if (!req.isAdmin)
      return res
        .status(400)
        .json({ message: "Vous n'avez pas le droit d'ajouter  utilisateur" });
    const {
      user_type,
      cin,
      nom,
      prenom,
      email,
      mot_de_passe,
      PPR,
      etablissement,
    } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists. Veuillez utiliser un autre email.",
      });
    }

    const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

    const newUser = new User({
      user_type,
      cin,
      nom,
      prenom,
      user_name: `${nom}_${prenom}`,
      email,
      mot_de_passe: hashedPassword,
      PPR,
      etablissement,
    });
    await newUser.save();

    return res
      .status(201)
      .json({ message: "Utilisateur enregistré avec succès." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, mot_de_passe } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Identifiants invalides email ou mot_de_passe." });
    }

    const isPasswordValid = await bcrypt.compare(
      mot_de_passe,
      user.mot_de_passe
    );
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ message: "Identifiants invalides email ou mot_de_passe." });
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      SUCRET_KEY,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      token,
      user: {
        _id: user._id,
        user_type: user.user_type,
        cin: user.cin,
        nom: user.nom,
        prenom: user.prenom,
        user_name: user.user_name,
        email: user.email,
        PPR: user.PPR,
        etablissement: user.etablissement,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        isAdmin: user.isAdmin,
      },
      message: "Vous êtes connecté avec succès! Félicitations!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

// Controller to change password
const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(req.id);

    if (!user) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.mot_de_passe);
    if (!isMatch) {
      return res.status(400).json({ message: "Ancien mot de passe incorrect" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.mot_de_passe = hashedPassword;
    await user.save();

    return res
      .status(200)
      .json({ message: "Mot de passe mis à jour avec succès" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Controller to change username
const changeUsername = async (req, res) => {
  try {
    const { user_name } = req.body;
    const user = await User.findById(req.id);

    if (!user) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }

    user.user_name = user_name;
    await user.save();

    return res
      .status(200)
      .json({ message: "Nom d'utilisateur mis à jour avec succès" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const getAllResponsableUsers = async (req, res) => {
  try {
    if (!req.isAdmin)
      return res
        .status(400)
        .json({
          message: "Vous n'avez pas la permission d'effectuer cette action.",
        });

    const responsableUsers = await User.find({ isAdmin: false });

    return res.status(200).json({ users: responsableUsers });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
const getResponsableById = async (req, res) => {
  try {
    if (!req.isAdmin)
      return res
        .status(400)
        .json({
          message: "Vous n'avez pas la permission d'effectuer cette action.",
        });

    const responsableUser = await User.findOne({
      _id: req.params.id,
      isAdmin: false,
    });

    if (!responsableUser) {
      return res
        .status(404)
        .json({
          message: "Utilisateur introuvable ou n'est pas un responsable",
        });
    }

    return res.status(200).json({ user: responsableUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const removeResponsableUser = async (req, res) => {
  try {
    if (!req.isAdmin)
      return res
        .status(400)
        .json({
          message: "Vous n'avez pas la permission d'effectuer cette action.",
        });

   

    const responsableUser = await User.findOneAndRemove({ _id: req.params.id, isAdmin: false });

    if (!responsableUser) {
      return res.status(404).json({
        message: "Utilisateur introuvable ou n'est pas un Responsable.",
      });
    }

    return res.status(200).json({ message: "Responsable  "+responsableUser.user_name+"  supprimé avec succès." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const updateResponsableUser = async (req, res) => {
  try {
    if (!req.isAdmin)
      return res
        .status(400)
        .json({
          message: "Vous n'avez pas la permission d'effectuer cette action.",
        });

  
    const responsableUser = await User.findOneAndUpdate({ _id: req.params.id, isAdmin: false }, req.body);

    if (!responsableUser) {
      return res.status(404).json({
        message: "Utilisateur introuvable ou n'est pas un Responsable.",
      });
    }

    return res.status(200).json({ message: "Détails du Responsable "+responsableUser.user_name+" mis à jour avec succès." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  changePassword,
  changeUsername,
  getAllResponsableUsers,
  getResponsableById,
  updateResponsableUser,
  removeResponsableUser
};
