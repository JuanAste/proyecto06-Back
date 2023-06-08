const { Users, Reviews } = require("../../db");


const getUserId= (req, res, next) => {
    const { id } = req.params;
    Users.findByPk(id, {include: [
        Reviews
    ]})
        .then((user) => {
          res.send(user);
        })
        .catch((error) => next(error));
}

module.exports = getUserId;