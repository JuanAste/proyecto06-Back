const { productos } = require("./src/preLoad/products");
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001;
const { Products, Users } = require("./src/db.js");


// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
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
        sells:producto.sells,
        name: producto.name,
        price: producto.price,
        images: producto.images,
        stock: producto.stock,
        type:producto.type,
        amount: producto.amount,
        brand:producto.brand,
        alcoholContent:producto.alcoholContent,
        Variety: producto.Variety,
        container: producto.container,
        description: producto.description,
        ableDiscount: producto.ableDiscount,
        percentageDiscount:producto.percentageDiscount,
        availability: producto.availability
      },
    });
  });
  await Users.findOrCreate({
    where: {
      userName: "Juan",
    },
    defaults:{
      userName: "Juan",
      email: "juan@gmail.com",
    }
  })
});
