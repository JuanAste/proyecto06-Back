const { Op } = require("sequelize");
const { Products } = require("../../db");

const getByName = (req, res, next) => {
  const { search, paginas } = req.query;
  const pagina = (paginas - 1) * 10;
  Products.findAll({
    where: {
      name: {
        [Op.iLike]: `%${search}%`,
      },
    },
    offset: pagina,
    limit: 10,
  })
    .then((products) => {
      res.send(products);
    })
    .catch((error) => next(error));
};

module.exports = getByName;
