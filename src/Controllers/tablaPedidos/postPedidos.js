const { Products, Users, Pedidos } = require("../../db");

const postPedidos = async (req, res) => {
  try {
    const { userId, productId, cantidad } = req.body;

    const usuario = await Users.findByPk(userId);
    const product = await Products.findByPk(productId);

    if (!usuario) {
      res.status(400).json({ messaje: "no se encontro el usuario" });
    } else if (!product) {
      res.status(400).json({ messaje: "no se encontro el producto" });
    } else {
      const newPedido = await Pedidos.create({
        cantidad: cantidad
      });
      await newPedido.addProduct(product);
      await newPedido.addUser(usuario);

      res.status(200).json(newPedido);
    }
  } catch (error) {
    res.status(500).json({messaje: error})
  }
};

module.exports = postPedidos;