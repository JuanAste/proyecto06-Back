const { Users } = require("../../db");

const putUser = async (req, res, next) => {
  try {
    const { userEmail, changes } = req.body;

    const user = await Users.findOne({ where: { email: userEmail } });

    if (user) {
      for (const change of changes) {
        const { name, data } = change;
        user[name] = data;
      }

      await user.save();

      res.send(user);
    } else {
      res.send({ message: "No se encontró el usuario" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = putUser;
