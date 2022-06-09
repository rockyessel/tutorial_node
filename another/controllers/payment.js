const userPayment = require('../models/payment');

const paymentAdd = async (req, res) => {
  const { token, secret } = req.body;
  const added = await userPayment.create({
    token: token,
    secret_key: secret,
  });

  res.json(added);
};

module.exports = {
  paymentAdd,
};
