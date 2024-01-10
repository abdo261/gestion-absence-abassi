const jwt = require('jsonwebtoken')
const {SUCRET_KEY} = require('dotenv').config().parsed
const isAuth = async (req,res,next)=>{
    try{
        const {token} = req.headers
        const payload = jwt.verify(token,SUCRET_KEY)
        if (!payload) return res.status(400).json({ message: "Vous êtes déconnecté(e)" });
        req.isAdmin=payload.isAdmin
        req.id=payload.id
        next()
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:err.message})
    }
}









module.exports = {isAuth}