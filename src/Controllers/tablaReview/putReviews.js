const {Reviews } = require("../../db");

const putProduct = async (req, res) => {
    try {
      const { reviewId, changes } = req.body;
  
      const review = await Reviews.findByPk(reviewId);
  
      if (review !== null) {
        for (const change of changes) {
          const { name, data } = change;
          review[name] = data;
        }
  
        await review.save();
  
        res.send(review);
      } else {
        res.send({ message: "No se encontró la review" });
      }
    } catch (error) {
      res.send({messaje: "se a producido un error"})
    }
  };
  
  module.exports = putProduct;