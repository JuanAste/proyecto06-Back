const { Router } = require("express");
const getAllReviews = require("../Controllers/tablaReview/getReviews");
const postReview = require("../Controllers/tablaReview/postReview");
const putReview = require("../Controllers/tablaReview/putReviews");


const router = Router();

router.get("/", getAllReviews)
router.post("/post", postReview)
router.put("/put", putReview)

module.exports=router