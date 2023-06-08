const { Router } = require("express");
const getAllReviews = require("../Controllers/tablaReview/getReviews");
const postReview = require("../Controllers/tablaReview/postReview");


const router = Router();

router.get("/", getAllReviews)
router.post("/post", postReview)

module.exports=router