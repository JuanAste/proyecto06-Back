const { Op } = require("sequelize");
const { Products, Reviews } = require("../../db");

const getAllProducts = async (req, res) => {
  try {
    const { search, paginas, stock, status } = req.query;
    const pagina = (paginas - 1) * 10;
    const findStock = {};
    if (stock !== "" && stock === "true") {
      findStock.stock = {[Op.gte]: 1};
    }
    if (stock !== "" && stock === "false") {
      findStock.stock = {[Op.lte]: 0};
    }
    if (status !== "" && status === "true") {
      findStock.availability = true;
    }
    if (status !== "" && status === "false") {
      findStock.availability = false;
    }
    const products = await Products.findAll({
      where: {
        name: {
          [Op.iLike]: `%${search}%`,
        },
        ...findStock
      },
      offset: pagina,
      limit: 10,
      include: {
        model: Reviews,
      },
      order: [["id", "ASC"]],
    });
    if (products.length) {
      res.status(200).json(products);
    } else {
      res.status(404).json({ message: "missing Products" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllProducts;
