const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "reviews",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      score: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
      },
    },
    { timestamps: false }
  );
};
