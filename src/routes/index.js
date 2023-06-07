const { Router } = require("express");
const product = require("./products")
const filtro = require("./filtros")

const router = Router();

router.use('/product', product);
router.use("/filtros", filtro)

module.exports = router;
