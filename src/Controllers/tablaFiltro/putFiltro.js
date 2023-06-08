const { Filtros } = require("../../db");

const putFiltro = async (req, res) => {
  try {
    const { name, data } = req.body;
    const filtro = await Filtros.findOne({ where: { name: name } });
    if (filtro === null) {
      res.status(200).json({ messaje: "no se encontro el filtrado" });
    } else {
      filtro.data = filtro.data.concat(data);
      await filtro.save();
      res.status(200).json(filtro);
    }
  } catch (error) {
    res.status(500).json({ error: error.messaje });
  }
};

module.exports = putFiltro;
