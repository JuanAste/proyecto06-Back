const { Router } = require("express");
const { default: Stripe } = require("stripe");
const router = Router();
const { STRIPE } = process.env;

const stripe = new Stripe(STRIPE);

router.post("/", async (req, res) => {
  try {
    const { id, amount, product } = req.body;

    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: product,
      payment_method: id,
      confirm: true,
    });

    console.log(payment);
    res.send({ message: "comprado" });
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
