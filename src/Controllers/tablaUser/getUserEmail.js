const { Users, Reviews } = require("../../db");

const getUserEmail = async (req, res, next) => {
  try {
    const { email } = req.query;
    const user = await Users.findOne({
      where: {
        email: email,
      },
      include: {
        model: Reviews,
      },
    });
    if (user) {
      res.send(user);
    } else {
      const create = await Users.create({ email: email });
      res.send(create);
    }
  } catch (error) {}
};

module.exports = getUserEmail;
