const paypal= require('paypal-rest-sdk')
paypal.configure({
    mode: 'sandbox', 
    client_id: process.env.PAYPAL_CLIENT_ID,
    client_secret: process.env.PAYPAL_CLIENT_SECRET,
  });
const captureOrder=(req, res)=>{
    const paymentId = req.query.paymentId;
    const payerId = { payer_id: req.query.PayerID };
  
    paypal.payment.execute(paymentId, payerId, (error, payment) => {
      if (error) {
        console.error(error);
        res.redirect('/cancel');
      } else {
        res.redirect('/success');
      }
    });
}
module.exports = captureOrder