const { Products, Pedidos, Users } = require("../../db");

const getAllPedidos = async (req, res) => {
  try {
    const pedidos = await Pedidos.findAll();
    if (pedidos.length) {
      res.status(200).json(pedidos);
    } else {
      res.status(404).json({ messaje: "missing pedidos" });
    }
  } catch (error) {
    res.status(500).json({ error: error.messaje });
  }
};

module.exports = getAllPedidos;
