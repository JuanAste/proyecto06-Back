const { Products, Reviews, Users } = require("../../db");

const getAllReviews = async (req, res) => {
  try {
    const { paginas, productId, userId } = req.query;
    const pagina = (paginas - 1) * 20;
    const includeOptions = [
      {
        model: Products,
      },
      {
        model: Users,
      },
    ];

    if (productId) {
      includeOptions[0].where = {
        id: productId,
      }
    }

    if (userId) {
      includeOptions[1].where = {
        id: userId,
      }
    }

    const products = await Reviews.findAll({
      offset: pagina,
      limit: 10,
      include: includeOptions,
    });
    if (products.length) {
      res.status(200).json(products);
    } else {
      res.status(404).json({ messaje: "missing Products" });
    }
  } catch (error) {
    res.status(500).json({ error: error.messaje });
  }
};

module.exports = getAllReviews;
