const { Op } = require("sequelize");
const { Users } = require("../../db");

const getUserAll = (req, res, next) => {
    const { search, paginas } = req.query;
    const pagina = (paginas - 1) * 10;
  Users.findAll({
    where: {
        email: {
        [Op.iLike]: `%${search}%`,
      },
    },
    offset: pagina,
    limit: 10,
  })
    .then((user) => {
      res.send(user);
    })
    .catch((error) => next(error));
};

module.exports = getUserAll;