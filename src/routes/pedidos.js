const { Router } = require("express");
const getPedidos = require("../Controllers/tablaPedidos/getPedidos");
const postPedidos = require("../Controllers/tablaPedidos/postPedidos");
const getAllPedidos = require("../Controllers/tablaPedidos/getAllPedidos");
const deletePedidos = require("../Controllers/tablaPedidos/destroyPedidos");
const putPedidos = require("../Controllers/tablaPedidos/putPedidos");

const router = Router();

router.get("/", getAllPedidos);
router.get("/id", getPedidos);
router.post("/post", postPedidos);
router.put("/put", putPedidos);
router.delete("/delete", deletePedidos);

module.exports = router;
