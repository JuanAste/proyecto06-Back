const { Products, Pedidos, Users } = require("../../db");

const deletePedidos = async (req, res) => {
  try {
    const { idUser, idProduct } = req.query;
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
      await pedidos.destroy();
      res.status(200).json({ messaje: "borrado con exito" });
    } else {
      res.status(404).json({ messaje: "missing pedidos" });
    }
  } catch (error) {
    res.status(500).json({ error: error.messaje });
  }
};

module.exports = deletePedidos;
