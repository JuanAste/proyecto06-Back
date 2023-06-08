const { Router } = require("express");
const product = require("./products")
const filtro = require("./filtros")
const review = require("./reviews")

const router = Router();

router.use('/product', product);
router.use("/filtros", filtro)
router.use("/reviews", review)

module.exports = router;
