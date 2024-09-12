const {createUser, getAllUser, updateUser, deleteUser,recoverUser}= require("../controller/userController");
const routes = require("express").Router();

routes.post("/createdUser", createUser);
routes.get("/getAllUser", getAllUser);
routes.put("/updateUser",updateUser);
routes.delete("/deleteUser",deleteUser);
routes.patch("/recoverUser",recoverUser)
module.exports = routes;
