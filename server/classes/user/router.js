const UserRouter = require("express").Router();
const {
  register,
  login,
  changePassword,
  changeUsername,
  getAllResponsableUsers,
  getResponsableById,
  updateResponsableUser,
  removeResponsableUser
} = require("./controllers/controllers");
const { isAuth } = require("../../middlewares/isAuth");

/**
 * @Description : regiter user in the (admin or responsable) the database.
 * @Route : /api/user/register
 * @Method : POST
 *@returns {object-User or message} JSON response with object-user data or error message.
 *@request POST http://localhost:5000/api/user/register 
 */
UserRouter.post("/register", isAuth, register);
/**
 * @Description : Log in a user(admin or responsable).
 * @Route : /api/user/login
 * @Method : POST
 *@returns {token & object-User or message} JSON response with token and  data or error message.
 *@request POST http://localhost:5000/api/user/login 
 */
UserRouter.post("/login", login);
/**
 * @Description : Change the password of a user.
 * @Route : /api/user/edite/password
 * @Method : POST
 *@returns {message} JSON response with a success message or an error message.
 *@request POST http://localhost:5000/api/user/edite/password 
 */
UserRouter.post("/edite/password", isAuth, changePassword);
/**
 * @Description : Change the username of a user.
 * @Route : /api/user/edite/user_name
 * @Method : POST
 *@returns {message} JSON response with a success message or an error message.
 *@request POST http://localhost:5000/api/user/edite/user_name 
 */
UserRouter.post("/edite/user_name", isAuth, changeUsername);

/**
 * @Description : Get all responsible users.
 * @Route : /api/user/responsables
 * @Method : GET
 * @returns {Array of object-User or message} JSON response with an array of responsible users or an error message.
 * @request GET http://localhost:5000/api/user/responsables 
 */
UserRouter.get("/responsables", isAuth, getAllResponsableUsers);

/**
 * @Description : Get a responsible user by ID.
 * @Route : /api/user/responsables/:id
 * @Method : GET
 * @returns {object-User or message} JSON response with details of a responsible user or an error message.
 * @request GET http://localhost:5000/api/user/responsables/:id 
 */
UserRouter.get("/responsables/:id", isAuth, getResponsableById);

/**
 * @Description : Update details of a responsible user by ID.
 * @Route : /api/user/responsables/:id/update
 * @Method : PUT
 * @returns {message} JSON response with a success message or an error message.
 * @request PUT http://localhost:5000/api/user/responsables/:id/update 
 */
UserRouter.put("/responsables/:id/update", isAuth, updateResponsableUser);

/**
 * @Description : Remove a responsible user by ID.
 * @Route : /api/user/responsables/:id/remove
 * @Method : DELETE
 * @returns {message} JSON response with a success message or an error message.
 * @request DELETE http://localhost:5000/api/user/responsables/:id/remove 
 */
UserRouter.delete("/responsables/:id/remove", isAuth, removeResponsableUser);
module.exports = UserRouter;
