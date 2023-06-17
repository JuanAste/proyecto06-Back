const { Products, Reviews } = require("../../db");

const getAllProducts = async (req, res) => {
  try {
    const { paginas } = req.query;
    const pagina = (paginas - 1) * 10;
    const products = await Products.findAll({
      offset: pagina,
      limit: 10,
      include: {
        model: Reviews,
      },
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
