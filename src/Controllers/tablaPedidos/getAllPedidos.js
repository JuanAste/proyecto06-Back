const { Op } = require("sequelize");
const { Pedidos, Users } = require("../../db");

const getAllPedidos = async (req, res) => {
  try {
    const { paginas, estado } = req.query;
    const pagina = (paginas - 1) * 10;
    const findPed = {}
    if(estado.length){
      findPed.estado=estado
    }
    const pedidos = await Pedidos.findAll({
      where: findPed,
      offset: pagina,
      limit: 10,
      include: {
        model: Users,
      },
    });
    if (pedidos && pedidos.length > 0) {
      res.status(200).json(pedidos);
    } else {
      res.status(404).json({ messaje: "missing pedidos" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = getAllPedidos;
