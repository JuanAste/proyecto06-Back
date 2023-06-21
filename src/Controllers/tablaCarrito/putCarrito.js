const { Carritos } = require("../../db");

const putCarrito = async (req, res, next) => {
  try {
    const { userEmail, changes } = req.body;

    const user = await Carritos.findOne({ where: { name: userEmail } });

    if (user) {
      for (const change of changes) {
        const { name, data } = change;
        user[name] = data;
      }

      await user.save();

      res.send(user);
    } else {
      res.send({ message: "No se encontró el usuario" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = putCarrito;