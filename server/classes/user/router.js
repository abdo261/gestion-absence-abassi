const UserRouter = require("express").Router();
const {
  register,
  login,
  changePassword,
  changeUsername,
} = require("./controllers/controllers");
const { isAuth } = require("../../middlewares/isAuth");

UserRouter.post("/login", login);
UserRouter.post("/register", isAuth, register);
UserRouter.post("/edite/password", isAuth, changePassword);
UserRouter.post("/edite/user_name", isAuth, changeUsername);

module.exports = UserRouter;
