const { Products, Pedidos, Users } = require("../../db");

const getPedidos = async (req, res) => {
  try {
    const { idUser } = req.query;
    const pedidos = await Pedidos.findByPk(idUser);
    if (pedidos) {
      res.status(200).json(pedidos);
    } else {
      const creado = await Pedidos.create({id:idUser, estado: "pending"})
      res.status(200).json(creado);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = getPedidos;
