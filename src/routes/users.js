const { Router } = require("express");
const getUserId = require("../Controllers/tablaUser/getUserId");
const postUser = require("../Controllers/tablaUser/postUser");
const putUser = require("../Controllers/tablaUser/putUser");

const router = Router();

router.get("/:id", getUserId);
router.put("/put", putUser);
router.post("/post", postUser);

module.exports = router;
