const { Op } = require("sequelize");
const { Products } = require("../../db");

const getByName = (req, res, next) => {
  const { search } = req.query;
  const { cantidad, paginas } = req.body;
  const pagina = (paginas - 1) * cantidad;
  Products.findAll({
    where: {
      name: {
        [Op.iLike]: `%${search}%`,
      },
    },
    offset: pagina,
    limit: cantidad,
  })
    .then((products) => {
      res.send(products);
    })
    .catch((error) => next(error));
};

module.exports = getByName;
