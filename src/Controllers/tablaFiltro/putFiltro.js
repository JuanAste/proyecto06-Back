const { Filtros } = require("../../db");

const putFiltro = async (req, res) => {
  const notFound = false;
  try {
    const newFiltros = req.body;
    for (const filt of newFiltros) {
      const filtro = await Filtros.findOne({ where: { name: filt.name } });
      if (filtro) {
        filtro.data = filtro.data.concat(filt.data);
        await filtro.save();
      } else {
        notFound = false;
      }
    }
    if (notFound) {
      res.status(404).json({ messaje: "no se ha encontrado un flitro" });
    } else {
      res.status(200).json({ messaje: "Se ha cambiado el filtro" });
    }
  } catch (error) {
    res.status(500).json({ error: error.messaje });
  }
};

module.exports = putFiltro;
