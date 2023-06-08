const { Products, Reviews, Users } = require("../../db");

const getAllReviews = async (req, res) => {
  try {
    // const { cantidad, paginas } = req.body;
    // const pagina = (paginas - 1) * cantidad;
    const products = await Reviews.findAll({
      // offset: pagina,
      // limit: cantidad,
      include: [
        {
          model: Products,
        },
        {
          model: Users,
        },
      ],
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