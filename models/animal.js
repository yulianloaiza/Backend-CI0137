"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    //TODO ver las posibles validaciones que se pueden hacer desde la base de datos
    static associate(models) {
      //No estoy seguro de cuales deben ir aca
      // User.belongsToMany(models.Role, {
      //   through: models.UserRole,
      //   foreignKey: "idUsuario",
      //   as: "roles",
      // });
      // User.hasOne(models.ConfirmationCode, {
      //   foreignKey: "idUsuario",
      //   as: "confirmationCode",
      // });
    }
  }
  Animal.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      numberOfViews: {
        type: DataTypes.INT,
      },
      images: {
        //Pendiente todavia
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        //TODO pendiente como manejar si no se sabe la edad
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("Macho", "Hembra", "Desconocido"),
        allowNull: false,
      },
      size: {
        type: DataTypes.ENUM("Pequeño", "Mediano", "Grande"),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      organization: {
        //ForeignKey
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
      modelName: "Animal",
    }
  );
  return Animal;
};
