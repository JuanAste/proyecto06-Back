const paypal = require('paypal-rest-sdk')
paypal.configure({
    mode: 'sandbox', 
    client_id: process.env.PAYPAL_CLIENT_ID,
    client_secret: process.env.PAYPAL_CLIENT_SECRET,
  });
const createOrder=(req, res)=>{
    const producto= req.body
    const create_payment_json = {
        intent: 'authorize', 
        payer: {
          payment_method: 'paypal',
        },
        redirect_urls: {
          return_url: 'http://localhost:3000/success',
          cancel_url: 'http://localhost:3000/cancel',
        },
        transactions: [
          {
            item_list: {
              items: [
                {
                  name: producto.name,
                  sku: 'item-001',
                  price: producto.price,
                  currency: 'USD',
                  quantity: producto.quantity,
                },
              ],
            },
            amount: {
              currency: 'USD',
              total: producto.price,
            },
            description: producto.description,
          },
        ],
      };
    
      paypal.payment.create(create_payment_json, (error, payment) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Error al crear la orden de pago' });
        } else {
          const approval_url = payment.links.find(link => link.rel === 'approval_url').href;
          res.json({ approval_url });
        }
      });
    }
    module.exports = createOrder