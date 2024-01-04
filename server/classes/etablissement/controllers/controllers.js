const Etablissement = require('../model/Etablissement')

const getAll = async (req,res)=>{
    try {
        const Etablissements =  await Etablissement.find()
        res.status(200).json(Etablissements)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
}

const getById = async (req,res)=>{
    try {
        const etablissement = await Etablissement.findById(req.params.id)
        if(!etablissement) return res.status(404).json({message:'Etablmissement non trouvé'})
        res.status(200).json(etablissement)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
}

const create = async (req,res)=>{
    try {
        const {nom , secteur, responsable,enseignants,absence,commune} = req.body;
        const etablissement = new Etablissement({nom , secteur, responsable,enseignants,absence,commune});
        const etablissementSave = await etablissement.save();
        res
          .status(200)
          .json({ message: "Etablissement créée avec succès ^_^", etablissement: etablissementSave });
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
}

const update = async (req,res)=>{
    try {
        const etablissement = await Etablissement.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!etablissement) return res.status(404).json({message:'Etablmissement non trouvé'})
        res.status(201).json({message:"etablissement midifié avec success",etablissement})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
}

const remove = async (req,res)=>{
    try {
        const etablissement = await Etablissement.findByIdAndDelete(req.params.id)
        if(!etablissement) return res.status(404).json({message:"etablissement non trouveé"})
        res.status(201).json({message:`etablissement ${etablissement.nom} suprumer avec success`})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
}






module.exports = {getAll,create,getById,update,remove} 