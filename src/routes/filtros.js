const { Router } = require("express");
const getFiltro = require("../Controllers/tablaFiltro/getFilters");
const postFiltro = require("../Controllers/tablaFiltro/postFiltro");

const router = Router();

router.get("/", getFiltro)
router.post("/post", postFiltro)

module.exports=router