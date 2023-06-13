const { Users, Reviews, Products } = require("../../db");

const getUserEmail = (req, res, next) => {
  const { email } = req.query;
  Users.findOrCreate({
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
