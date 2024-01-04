const Commune = require("../model/Commune");
const Joi = require('joi')
const getAll = async (req, res) => {
  try {
    const communes = await Commune.find().sort({'updatedAt': -1})
    res.status(200).json(communes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const { nom } = req.body;

    const schema = Joi.object({
      nom: Joi.string()
        .min(3)
        .pattern(/^[a-zA-Z\-_]+$/)
        .required()
        .messages({
          'string.pattern.base': 'Le champ nom ne peut contenir que des lettres de l\'alphabet (a à z), des tirets (-) et des underscores (_).',
        }),
    });

    const { error } = schema.validate({ nom });

    if (error) {
      const errorMessage = error.details[0].message;
      return res.status(400).json({ message: errorMessage });
    }
    const commune = new Commune({ nom });
    const communeSave = await commune.save();

    res.status(200).json({
      message: 'Commune créée avec succès ^_^',
      commune: communeSave,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};


const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const commune = await Commune.findById(id);
    if (!commune) {
      return res.status(404).json({ message: "Commune introuvable" });
    }
    res.status(200).json(commune);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom } = req.body;

    const schema = Joi.object({
      nom: Joi.string()
        .min(3)
        .pattern(/^[a-zA-Z\-_]+$/)
        .required()
        .messages({
          'string.pattern.base': 'Le champ nom ne peut contenir que des lettres de l\'alphabet (a à z), des tirets (-) et des underscores (_).',
        }),
    });

    const { error } = schema.validate({ nom });

    if (error) {
      const errorMessage = error.details[0].message;
      return res.status(400).json({ message: errorMessage });
    }
    const commune = await Commune.findByIdAndUpdate(id, { nom }, { new: true });
    if (!commune) return res.status(404).json({ message: 'Commune introuvable' });
    res.status(201).json({ message: `La commune ${commune.nom} a été modifiée avec succès`, commune });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const {id}= req.params
    const isExist = await Commune.findByIdAndDelete(id)
    if(!isExist) return res.status(404).json({message:'Commune introuvable'})
    res.status(201).json({message:`Commune ${isExist.nom} a été supprimé avec succès`})
  } catch (err) {
    console.log(err)
    res.status(500).json({message:err.message})
  }
};
const removeMany = async (req, res) => {
  try {
    const { ids } = req.body; 
    const deletedCommunes = await Commune.deleteMany({ _id: { $in: ids } });
    if (!deletedCommunes || deletedCommunes.deletedCount === 0) {
      return res.status(404).json({ message: 'Communes non trouvées ou n\'ont pas pu être supprimées' });
    }
    res.status(201).json({ message: `Communes supprimées avec succès` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, create, getById, remove, update, removeMany };

