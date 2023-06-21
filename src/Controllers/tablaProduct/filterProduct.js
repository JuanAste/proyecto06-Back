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
    cask,
  } = req.body;
  const { paginas, search } = req.query;

  const pagina = (paginas - 1) * 10;

  const findProduct = {availability: true, stock:{
    [Op.gt]: 0
  }};
  const oredenar = [];

  if (search !== "") {
    findProduct.name = {
      [Op.iLike]: `%${search}%`,
    };
  }

  if (tipos !== "") {
    findProduct.type = {
      [Op.eq]: tipos,
    };
  }

  if (cask > 0) {
    findProduct.cask = {
      [Op.gte]: cask,
    };
  }

  if (Variedad !== "") {
    findProduct.Variety = {
      [Op.eq]: Variedad,
    };
  }

  if (envase !== "") {
    findProduct.container = {
      [Op.eq]: envase,
    };
  }

  if (contenido && contenido.hasta > 0) {
    findProduct.amount = {
      [Op.between]: [contenido.desde, contenido.hasta],
    };
  }

  if (marca !== "") {
    findProduct.brand = {
      [Op.eq]: marca,
    };
  }

  if (ofertas !== "null") {
    findProduct.ableDiscount = {
      [Op.eq]: ofertas,
    };
  }

  if (porcentajeDesc && porcentajeDesc.hasta > 0) {
    findProduct.ableDiscount = {
      [Op.eq]: true,
    };
    findProduct.percentageDiscount = {
      [Op.between]: [porcentajeDesc.desde, porcentajeDesc.hasta],
    };
  }

  if (
    ordenarmiento &&
    ordenarmiento.name !== "" &&
    ordenarmiento.order !== ""
  ) {
    oredenar.push([`${ordenarmiento.name}`, `${ordenarmiento.order}`]);
  }

  if(!oredenar.length){
    oredenar.push(["id", "ASC"]);
  }

  Products.findAll({
    where: findProduct,
    offset: pagina,
    limit: 10,
    include: [Reviews],
    order: oredenar,
  })
    .then((products) => {
      res.send(products);
    })
    .catch((error) => next(error));
};

module.exports = filterProduct;
