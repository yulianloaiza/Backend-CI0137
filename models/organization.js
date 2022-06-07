"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    //TODO ver las posibles validaciones que se pueden hacer desde la base de datos
    static associate(models) {
      //No estoy seguro de cuales deben ir aca
    }
  }
  Organization.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      images: {
        //Pendiente todavia
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      province: {
        type: DataTypes.ENUM(
          "San José",
          "Alajuela",
          "Heredia",
          "Cartago",
          "Puntarenas",
          "Guanacaste",
          "Limón"
        ),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
        unique: true,
      },
      phoneCountryCode: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "phone_country_code",
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      socialLinks: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Organization",
    }
  );
  return Organization;
};
