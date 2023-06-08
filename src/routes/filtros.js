const { Router } = require("express");
const getFiltro = require("../Controllers/tablaFiltro/getFilters");
const putFiltro = require("../Controllers/tablaFiltro/putFiltro");

const router = Router();

router.get("/", getFiltro)
router.put("/put", putFiltro)

module.exports=router