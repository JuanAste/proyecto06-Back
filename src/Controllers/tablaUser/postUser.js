const { Users } = require("../../db");

const postUser = async (req, res, next) => {
  const user = req.body;
  const findUser = await Users.findOne({
    where: { email: user.email },
  });
  if (!findUser) {
    Users.create(user)
      .then((createUser) => {
        res.send(createUser);
      })
      .catch((error) => next(error));
  } else {
    res.send({ messaje: "Usuario existente", product: findUser });
  }
};

module.exports = postUser;
