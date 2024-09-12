const { Op } = require("sequelize");
const { models } = require("./index");

module.exports = {
  createRole: async (body) => {
    try {
      const createdRole = await models.roles.create({ ...body });
      console.log("check", createdRole.dataValues);
      return {
        response: createdRole,
      };
    } catch (error) {
      console.log("check", error);
      return {
        error: {
          error: error.message,
          filename: "userModel",
        },
      };
    }
  },
  createAddress: async (body) => {
    try {
      const createdAddress = await models.address.create({ ...body });
      return {
        response: createdAddress,
      };
    } catch (error) {
      return {
        error: {
          error: error.message,
          filename: "userModel",
        },
      };
    }
  },
  createUser: async (body) => {
    try {
      const createdUser = await models.users.create({ ...body });
      return {
        response: createdUser,
      };
    } catch (error) {
      return {
        error: {
          error: error.message,
          filename: "userModel",
        },
      };
    }
  },
  getAllUser: async () => {
    try {
      const users = await models.users.findAll({
        // attributes:{
        //     exclude:["createdAt", "password", "updatedAt"],
        // }
        attributes: ["userId", "userName"],
        include: [
          {
            model: models.address,
            attributes: ["address", "addressId"],
          },
          {
            model: models.roles,
            attributes: ["roleName", "roleId"],
          },
        ],
      });
      return {
        response: users,
      };
    } catch (error) {
      return {
        error: {
          error: error.message,
          filename: "userModel",
        },
      };
    }
  },
  getUserByUserName: async (userName) => {
    try {
      const user = await models.users.findOne({
        where: {
          userName: userName,
        },
      });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: {
          error: error.message,
          filename: "userModel",
        },
      };
    }
  },

  updateUser: async (body) => {
    try {
      const updatedUser = await models.users.update(
        {
          ...body,
        },
        {
          where: {
            userId: body.userId,
          },
        }
      );
      return {
        response: updatedUser,
      };
    } catch (error) {
      return {
        error: {
          error: error.message,
          filename: "userModel",
        },
      };
    }
  },
  deleteUser: async (userId) => {
    try {
      const deletedUser = await models.users.destroy({
        where: {
          userId: userId,
        },
      });
      console.log(deletedUser);
      return {
        response: deletedUser,
      };
    } catch (error) {
      return {
        error: {
          error: error.message,
          filename: "userModel",
        },
      };
    }
  },
  recoverUser: async () => {
    try {
      const recoveredUser = await models.users.update(
        { deletedAt: null },
        {
          where: {
            deletedAt: {
              [Op.ne]: null,
            },
          },
          paranoid: false,
        }
      );
      return {
        response: recoveredUser,
      };
    } catch (error) {
      return {
        error: {
          error: error.message,
          filename: "userModel",
        },
      };
    }
  },
};
