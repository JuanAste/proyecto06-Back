const { Products, Pedidos, Users } = require("../../db");

const getPedidos = async (req, res) => {
  try {
    const { idUser } = req.query;
    const pedidos = await Pedidos.findOne({
      include: [
        {
          model: Users,
          where: { id: idUser },
        },
        {
          model: Products,
        },
      ],
    });
    if (pedidos) {
      res.status(200).json(pedidos);
    } else {
      res.status(404).json({ messaje: "missing pedidos" });
    }
  } catch (error) {
    res.status(500).json({ error: error.messaje });
  }
};

module.exports = getPedidos;
