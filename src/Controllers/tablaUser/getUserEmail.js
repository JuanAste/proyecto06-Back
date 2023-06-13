const { Users, Reviews, Products } = require("../../db");

const getUserEmail = (req, res, next) => {
  const { email } = req.query;
  Users.findOne({
    where: {
      email: email,
    }
  })
    .then((user) => {
      res.send(user);
    })
    .catch((error) => next(error));
};

module.exports = getUserEmail;
