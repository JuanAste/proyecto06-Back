const { Op } = require("sequelize");
const { Users } = require("../../db");

const getUserAll = async (req, res, next) => {
  try {
    const { search, paginas } = req.query;
    const pagina = (paginas - 1) * 10;
    const users = await Users.findAll({
      where: {
        email: {
          [Op.iLike]: `%${search}%`,
        },
      },
      offset: pagina,
      limit: 10,
    });
    if (users.length) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ message: "missing Products" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = getUserAll;
