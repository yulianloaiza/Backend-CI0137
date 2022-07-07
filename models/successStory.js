"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class successStory extends Model {
    //TODO ver las posibles validaciones que se pueden hacer desde la base de datos
    static associate(models) {
      //No estoy seguro de cuales deben ir aca
    }
  }
  successStory.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      images: {
        //Pendiente todavia. Y solo 1 o varias? / Solo una imagen
      },
      organization: {
        //ForeignKey
      },
      title: {
        //TODO ver si 100 esta bien como tamaño
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "SuccessStory",
    }
  );
  return successStory;
};
