const { Router } = require("express");
const product = require("./products");
const filtro = require("./filtros");
const review = require("./reviews");
const user = require("./users");
const pedidos = require("./pedidos")
const buy = require("./buys")
const carrito = require("./carritos")

const router = Router();

router.use("/buy", buy)
router.use("/product", product);
router.use("/filtros", filtro);
router.use("/reviews", review);
router.use("/users", user);
router.use("/pedidos", pedidos)
router.use("/cart", carrito)

module.exports = router;
