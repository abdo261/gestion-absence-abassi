const EtablissementRouter = require('express').Router()
const {getAll,create,getById,update,remove} = require('./controllers/controllers')

/**
 * @Description : Retrieves all etablissement from the database.
 * @Route : /api/etablissement
 * @Method : GET
 *@returns {array of object} JSON response with etablissement data or error message.
 *@request GET http://localhost:5000/api/etablissement  
 */
EtablissementRouter.get('/',getAll)


/**
 * @Description : Retrieves a commune by ID from the database.
 * @Route : /api/etablissement/:id
 * @Method : GET
 * @returns {object} JSON response with commune data or 'ID introuvable' or error message.
 * @request GET http://localhost:5000/api/etablissement/:id
 */
EtablissementRouter.get('/:id',getById)


/**
 * @Description : Creates a new commune in the database.
 * @Route : /api/etablissement
 * @Method : POST
 * @returns {object} JSON response with created commune data or error message.
 * @request  POST http://localhost:5000/api/etablissement  
 */
EtablissementRouter.post('/',create)

/**
 * @Description : Updates a commune by ID in the database.
 * @Route : /api/etablissement/:id
 * @Method : PUT
 * @returns {object} JSON response with updated commune data or error message.
 * @request PUT http://localhost:5000/api/etablissement/:id
 */
EtablissementRouter.put('/:id', update);

/**
 * @Description : Deletes a commune by ID from the database.
 * @Route : /api/etablissement/:id
 * @Method : DELETE
 * @returns {object} JSON response with success message or error message.
 * @request DELETE http://localhost:5000/api/etablissement/:id
 */
EtablissementRouter.delete('/:id', remove);



module.exports = EtablissementRouter