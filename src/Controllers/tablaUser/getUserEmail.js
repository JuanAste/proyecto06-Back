const { Users, Reviews, Pedidos, Products } = require("../../db");

const getUserEmail = async (req, res, next) => {
  try {
    const { email } = req.query;
    const user = await Users.findOne({
      where: {
        email: email,
      },
      include: [
        {
          model: Reviews,
          include: {
            model: Products,
          },
        },
        {
          model: Pedidos,
        },
      ],
    });
    if (user) {
      res.send(user);
    } else {
      const create = await Users.create({ email: email });
      res.send(create);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getUserEmail;
