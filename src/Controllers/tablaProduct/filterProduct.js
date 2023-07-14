const { Op } = require("sequelize");
const { Products, Reviews, Users } = require("../../db");

const filterProduct = async (req, res, next) => {
  const {
    paginas,
    search,
    tipos,
    ofertas,
    porcentajeDescDesde,
    porcentajeDescHasta,
    Variedad,
    marca,
    contenidoDesde,
    contenidoHasta,
    envase,
    ordenarmientoName,
    ordenarmientoOrder,
    cask,
  } = req.query;

  const pagina = (paginas - 1) * 10;

  const findProduct = {
    availability: true,
    stock: {
      [Op.gt]: 0,
    },
  };
  const oredenar = [];

  if (search && search !== "") {
    findProduct.name = {
      [Op.iLike]: `%${search}%`,
    };
  }

  if (tipos && tipos !== "") {
    findProduct.type = {
      [Op.eq]: tipos,
    };
  }

  if (cask && cask > 0) {
    findProduct.cask = {
      [Op.gte]: cask,
    };
  }

  if (Variedad && Variedad !== "") {
    findProduct.Variety = {
      [Op.eq]: Variedad,
    };
  }

  if (envase && envase !== "") {
    findProduct.container = {
      [Op.eq]: envase,
    };
  }

  if (contenidoDesde && contenidoHasta && contenidoHasta > 0) {
    findProduct.amount = {
      [Op.between]: [contenidoDesde, contenidoHasta],
    };
  }

  if (marca && marca !== "") {
    findProduct.brand = {
      [Op.eq]: marca,
    };
  }

  if (ofertas && ofertas !== "null") {
    findProduct.ableDiscount = {
      [Op.eq]: ofertas,
    };
  }

  if (porcentajeDescDesde && porcentajeDescHasta && porcentajeDescHasta > 0) {
    findProduct.ableDiscount = {
      [Op.eq]: true,
    };
    findProduct.percentageDiscount = {
      [Op.between]: [porcentajeDescDesde, porcentajeDescHasta],
    };
  }

  if (
    ordenarmientoName &&
    ordenarmientoOrder &&
    ordenarmientoName !== "" &&
    ordenarmientoOrder !== ""
  ) {
    oredenar.push([`${ordenarmientoName}`, `${ordenarmientoOrder}`]);
  }

  if (!ordenarmientoName || !oredenar.length) {
    oredenar.push(["id", "ASC"]);
  }

  Products.findAll({
    where: findProduct,
    offset: pagina,
    limit: 10,
    include: [
      {
        model: Reviews,
        include: {
          model: Users,
        },
      },
    ],
    order: oredenar,
  })
    .then((products) => {
      res.send(products);
    })
    .catch((error) => next(error));
};

module.exports = filterProduct;
