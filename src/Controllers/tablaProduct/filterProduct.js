const { Op } = require("sequelize");
const { Products, Reviews } = require("../../db");

const filterProduct = async (req, res, next) => {
  const {
    tipos,
    ofertas,
    porcentajeDesc,
    Variedad,
    marca,
    contenido,
    envase,
    ordenarmiento,
    cantidad,
    paginas,
  } = req.body;

  const pagina = (paginas - 1) * cantidad;

  const findProduct = {};
  const oredenar = [];

  if (tipos) {
    findProduct.type = {
      [Op.eq]: tipos,
    };
  }

  if (Variedad) {
    findProduct.Variety = {
      [Op.eq]: Variedad,
    };
  }

  if (envase) {
    findProduct.container = {
      [Op.eq]: envase,
    };
  }

  if (contenido) {
    findProduct.amount = {
      [Op.gte]: contenido,
    };
  }

  if (marca) {
    findProduct.brand = {
      [Op.eq]: marca,
    };
  }

  if (ofertas) {
    findProduct.ableDiscount = {
      [Op.eq]: ofertas,
    };
  }

  if (porcentajeDesc) {
    findProduct.percentageDiscount = {
      [Op.gte]: porcentajeDesc,
    };
  }

  if (ordenarmiento) {
    oredenar.push([`${ordenarmiento.name}`, `${ordenarmiento.order}`]);
  }

  Products.findAll({
    where: findProduct,
    offset: pagina,
    limit: cantidad,
    include: [Reviews],
    order: oredenar,
  })
    .then((products) => {
      res.send(products);
    })
    .catch((error) => next(error));
};

module.exports = filterProduct;