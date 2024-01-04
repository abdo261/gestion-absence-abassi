const CommuneRouter = require('express').Router()
const {getAll,create,getById,update,remove,removeMany} = require('./controllers/controllers')

/**
 * @Description : Retrieves all communes from the database.
 * @Route : /api/communes
 * @Method : GET
 *@returns {array of object} JSON response with communes data or error message.
 *@request GET http://localhost:5000/api/communes  
 */
CommuneRouter.get('/',getAll)


/**
 * @Description : Retrieves a commune by ID from the database.
 * @Route : /api/communes/:id
 * @Method : GET
 * @returns {object} JSON response with commune data or 'ID introuvable' or error message.
 * @request GET http://localhost:5000/api/communes/:id
 */
CommuneRouter.get('/:id',getById)


/**
 * @Description : Creates a new commune in the database.
 * @Route : /api/communes
 * @Method : POST
 * @returns {object} JSON response with created commune data or error message.
 * @request  POST http://localhost:5000/api/communes  
 */
CommuneRouter.post('/',create)

/**
 * @Description : Updates a commune by ID in the database.
 * @Route : /api/communes/:id
 * @Method : PUT
 * @returns {object} JSON response with updated commune data or error message.
 * @request PUT http://localhost:5000/api/communes/:id
 */
CommuneRouter.put('/:id', update);

/**
 * @Description : Deletes a commune by ID from the database.
 * @Route : /api/communes/:id
 * @Method : DELETE
 * @returns {object} JSON response with success message or error message.
 * @request DELETE http://localhost:5000/api/communes/:id
 */
CommuneRouter.delete('/:id', remove);


/**
 * @Description : Deletes many commune by ID from the database.
 * @Route : /api/communes/delete/many
 * @Method : DELETE
 * @returns {object} JSON response with success message or error message.
 * @request DELETE http://localhost:5000/api/communes/delete/many
 */
CommuneRouter.delete('/delete/many', removeMany);


module.exports = CommuneRouter