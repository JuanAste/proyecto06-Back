const { Filtros } = require("../../db");

const getFiltro = async (req, res) => {
  try {
    const { name } = req.query;
    const propiedadesfiltro = await Filtros.findOne({ where: { name } });
    res.status(200).json(propiedadesfiltro);
  } catch (error) {
    res.status(500).json({ error: error.messaje });
  }
};

module.exports = getFiltro;
