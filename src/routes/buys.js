const { Router } = require("express");
const { default: Stripe } = require("stripe");
const { Pedidos, Users } = require("../db");
const router = Router();
const { STRIPE } = process.env;

const stripe = new Stripe(STRIPE);

router.post("/", async (req, res) => {
  try {
    const { products, id, email, amount } = req.body;

    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: email,
      payment_method: id,
      confirm: true,
      receipt_email: email,
    });
    if(payment){
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      res.status(404).send({ message: "No se encontro el usuario" });
    }
    const newPedido = await Pedidos.create({
      id: payment.payment_method,
      estado: "pending",
      productos: products,
      amount
    });
    await newPedido.addUser(user);
    res.send({ message: "comprado" });}else{
      res.status(404).send({message: "No se a podido realizar la compra"})
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
});
router.get("/all", async (req, res) => {
  try {
    const { paginas } = req.query;
    const pagina = (paginas - 1) * 10;
    const sales = await Pedidos.findAll({
      offset: pagina,
      limit: 10,
      include: {
        model: Users,
      },
    });
    res.send(sales);
  } catch (error) {
    console.error("Error al obtener las ventas de Stripe:", error);
    res.status(500).send({ message: error.message });
  }
});
router.put("/put", async (req, res) => {
  try {
    const { idVent, status } = req.query;
    const pedido = await Pedidos.findByPk(idVent);
    pedido.estado = status;
    pedido.save();
    res.send(pedido);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
