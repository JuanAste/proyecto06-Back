const { Router } = require("express");
const { default: Stripe } = require("stripe");
const { Pedidos } = require("../db");
const router = Router();
const { STRIPE } = process.env;

const stripe = new Stripe(STRIPE);

router.post("/", async (req, res) => {
  try {
    const { products, id, email, amount } = req.body;
   

    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: products,
      payment_method: id,
      confirm: true,
      receipt_email: email,
      metadata: {
        delivery_status: "pending",
      },
    });
    await Pedidos.create({ id: payment.payment_method, estado: "pending" });
    res.send({ message: "comprado" });
  } catch (error) {
    res.status(500).send({ message: error });
  }
});
router.get("/all", async (req, res) => {
  try {
    const options = { limit: 1000 };
    const sales = await stripe.charges.list(options);
    res.send(sales.data);
  } catch (error) {
    console.error("Error al obtener las ventas de Stripe:", error);
    res.status(500).send({ message: error.message });
  }
});
router.put("/put", async (req, res) => {
  try {
    const { idVent, status } = req.query;
    const updatedMetadata = {
      delivery_status: status,
    };
    const paymentIntent = await stripe.paymentIntents.update(idVent, {
      metadata: updatedMetadata,
    });
    const pedido = await Pedidos.findByPk(idVent);
    pedido.estado = status;
    pedido.save();
    res.send(paymentIntent);
  } catch (error) {
    res.status(500).send(error.message);
  }
});




module.exports = router;
