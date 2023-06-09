const { Router } = require("express");
const createOrder = require("../Controllers/tablaPaypal/createOrder");
const captureOrder = require("../Controllers/tablaPaypal/captureOrder");

const router = Router();

router.post("/createOrder", createOrder)
router.get("/captureOrder", captureOrder)

module.exports=router