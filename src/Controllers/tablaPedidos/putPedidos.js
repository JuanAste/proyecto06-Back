const { Products, Pedidos, Users } = require("../../db");

const putPedidos = async (req, res) => {
  try {
    const { idUser, idProduct, cantidad } = req.query;
    const pedidos = await Pedidos.findOne({
      include: [
        {
          model: Users,
          where: { id: idUser },
        },
        {
          model: Products,
          where: { id: idProduct },
        },
      ],
    });
    if (pedidos) {
      pedidos.cantidad = cantidad;
      await pedidos.save();
      res.status(200).json({ messaje: "cambiado con exito" });
    } else {
      res.status(404).json({ messaje: "missing pedidos" });
    }
  } catch (error) {
    res.status(500).json({ error: error.messaje });
  }
};

module.exports = putPedidos;
