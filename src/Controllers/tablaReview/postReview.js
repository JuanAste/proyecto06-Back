const { Products, Reviews, Users } = require("../../db");

const postReview = async (req, res) => {
  try {
    const { userEmail, productId, score, content } = req.body;

    const usuario = await Users.findOne({ where: { email: userEmail } });
    const product = await Products.findByPk(productId);

    if (!usuario) {
      res.status(400).json({ messaje: "no se encontro el usuario" });
    } else if (!product) {
      res.status(400).json({ messaje: "no se encontro el producto" });
    } else {
      const newReview = await Reviews.create({
        score: score,
        content: content,
      });
      await newReview.addProduct(product);
      await newReview.addUser(usuario);

      res.status(200).json(newReview);
    }
  } catch (error) {
    res.status(500).json({messaje: error})
  }
};

module.exports = postReview;
