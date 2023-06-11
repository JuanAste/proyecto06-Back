const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: process.env.PAYPAL_MODE,
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

const createPayment = async (req, res) => {
  const { amount, currency, description } = req.body;

  const paymentData = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal',
    },
    transactions: [
      {
        amount: {
          total: amount,
          currency,
        },
        description,
      },
    ],
    redirect_urls: {
      return_url: process.env.PAYPAL_SUCCESS_URL,
      cancel_url: process.env.PAYPAL_CANCEL_URL,
    },
  };

  paypal.payment.create(paymentData, (error, payment) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating PayPal payment' });
    } else {
      // Guarda la información del pago en tu base de datos si es necesario
      // ...

      // Redirige al cliente a la URL de aprobación de PayPal
      const approvalUrl = payment.links.find((link) => link.rel === 'approval_url').href;
      res.json({ approvalUrl });
    }
  });
};