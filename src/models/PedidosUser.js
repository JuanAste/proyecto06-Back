const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pedidos", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productos: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: [],
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
