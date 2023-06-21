const { Carritos } = require("../../db");

const getCarritoEmail = async (req, res, next) => {
  try {
    const { email } = req.query;
    const user = await Carritos.findOrCreate({
      where: {
        name: email,
      },
    });
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getCarritoEmail;
