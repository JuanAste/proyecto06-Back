const { productos } = require("./src/preLoad/products");
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001;
const { Products, Users, Filtros } = require("./src/db.js");
const { users } = require("./src/preLoad/users");
const { filtros } = require("./src/preLoad/filtros");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  //force: true
  server.listen(port, () => {
    console.log(`%s listening at ${port}`);
  });
  productos.forEach(async (producto) => {
    await Products.findOrCreate({
      where: {
        name: producto.name,
      },
      defaults: {
        sells: producto.sells,
        name: producto.name,
        price: producto.price,
        images: producto.images,
        stock: producto.stock,
        type: producto.type,
        amount: producto.amount,
        brand: producto.brand,
        alcoholContent: producto.alcoholContent,
        Variety: producto.Variety,
        cask: producto.cask,
        container: producto.container,
        description: producto.description,
        ableDiscount: producto.ableDiscount,
        percentageDiscount: producto.percentageDiscount,
        availability: producto.availability,
      },
    });
  });
  users.forEach(async (user) => {
    await Users.findOrCreate({
      where: {
        userName: user.userName,
      },
      defaults: {
        userName: user.userName,
        email: user.email,
      },
    });
  });
  filtros.forEach(async (filtro) => {
    await Filtros.findOrCreate({
      where: {
        name: filtro.name,
      },
      defaults: {
        name: filtro.name,
        data: filtro.data,
      },
    });
  });
});
