const { Router } = require("express");
const getCarritoEmail = require("../Controllers/tablaCarrito/getCarrito");
const putCarrito = require("../Controllers/tablaCarrito/putCarrito");


const router = Router();

router.get("/get", getCarritoEmail)
router.put("/put", putCarrito)

module.exports=router