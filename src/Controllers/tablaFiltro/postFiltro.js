const { Filtros } = require("../../db");

const postFiltro = async (req, res) => {
  try {
    const filtro = req.body;
    const creado = await Filtros.findOne({ where: { name: filtro.name } });
    console.log(creado);
    if (creado===null) {
      Filtros.create(filtro).then((filtros) => {
        res.send(filtros);
      });
    }else{
      creado.data = creado.data.concat(filtro.data);
      await creado.save();
        res.status(200).json(creado);
    }
  } catch (error) {
    res.status(500).json({ error: error.messaje });
  }
};

module.exports = postFiltro;
