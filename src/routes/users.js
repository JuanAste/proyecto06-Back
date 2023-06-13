const { Router } = require("express");
const getUserEmail = require("../Controllers/tablaUser/getUserEmail");
const postUser = require("../Controllers/tablaUser/postUser");
const putUser = require("../Controllers/tablaUser/putUser");

const router = Router();

router.get("/", getUserEmail);
router.put("/put", putUser);
router.post("/post", postUser);

module.exports = router;
