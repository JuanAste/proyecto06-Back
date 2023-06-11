const { Router } = require("express");
const product = require("./products");
const filtro = require("./filtros");
const review = require("./reviews");
const user = require("./users");
const pedidos = require("./pedidos")

const router = Router();

router.use("/product", product);
router.use("/filtros", filtro);
router.use("/reviews", review);
router.use("/users", user);
router.use("/pedidos", pedidos)

module.exports = router;
