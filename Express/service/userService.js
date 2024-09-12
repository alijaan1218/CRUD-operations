const userModel = require("../models/userModel");
const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");
const { models } = require("../models");
module.exports = {
  createUser: async (body) => {
    try {
      // const isUser= await userModel.getUserByUserName(body.userName);
      // if (isUser.response || isUser.error){
      //     return {
      //         error: "User wit this username already exits.",
      //     };
      // }
      const userRole = {
        roleId: uuid(),
        roleName: body.roleName,
      };
      const createdRole = await userModel.createRole(userRole);
      if (createdRole.error) {
        return {
          error: error.message,
          filename: "userService",
        };
      }

      const userAddress = {
        addressId: uuid(),
        address: body.address,
      };
      const createdAddress = await userModel.createAddress(userAddress);
      if (createdAddress.error) {
        return {
          error: error.message,
          filename: "userService",
        };
      }
      const user = {
        userId: uuid(),
        userName: body.userName,
        password: await hash(body.password, 10),
        addressId: createdAddress.response.dataValues.addressId,
        roleId: createdRole.response.dataValues.roleId,
      };
      const createdUser = await userModel.createUser(user);
      if (createdUser.error) {
        return {
          error: createdUser.error,
        };
      }
      delete createdUser.response.dataValues.password;
      return {
        response: createdUser.response,
      };
    } catch (error) {
      return {
        error: {
          error: error.message,
          filename: "userService",
        },
      };
    }
  },
  getAllUser: async () => {
    try {
      const users = await userModel.getAllUser();
      if (users.error) {
        return {
          error: users.error,
        };
      }
      return {
        response: users.response,
      };
    } catch (error) {
      return {
        error: {
          error: error.message,
          filename: "userService",
        },
      };
    }
  },
  updateUser: async (body) => {
    try {
      const updatedUser = await userModel.updateUser(body);
      if (updatedUser.error) {
        return {
          error: error.message,
        };
      }
      return {
        response: updatedUser.response,
      };
    } catch (error) {
      return {
        error: {
          error: error.message,
          filename: "userService",
        },
      };
    }
  },
  deleteUser: async (query) => {
    try {
      const deletedUser = await userModel.deleteUser(query.userId);
      if (deletedUser.error) {
        return {
          error: error.message,
        };
      }
      return {
        response: deletedUser.response,
      };
    } catch (error) {
      return {
        error: {
          error: error.message,
          filename: "userService",
        },
      };
    }
  },
  recoverUser: async () => {
    try {
      const recoveredUser = await userModel.recoverUser();
      if (recoveredUser.error) {
        return {
          error: error.message,
        };
      }
      return {
        response: recoveredUser,
      };
    } catch (error) {
      return {
        error: {
          error: error.message,
          filename: "userService",
        },
      };
    }
  },
};
