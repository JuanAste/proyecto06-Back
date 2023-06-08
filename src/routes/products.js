const { Router } = require("express");
const getByName = require("../Controllers/tablaProduct/getProductName");
const getAllProducts = require("../Controllers/tablaProduct/getAllProducts");
const filterProduct = require("../Controllers/tablaProduct/filterProduct");
const getByID = require("../Controllers/tablaProduct/getById");
const putProduct = require("../Controllers/tablaProduct/putProduct");
const postProduct = require("../Controllers/tablaProduct/postProducts");


const router = Router();

router.get("/search", getByName);

router.get("/all", getAllProducts);

router.post("/filtrado", filterProduct);

router.get("/:id", getByID);

router.put("/putProduct", putProduct);

router.post("/postProduct", postProduct);

module.exports=router