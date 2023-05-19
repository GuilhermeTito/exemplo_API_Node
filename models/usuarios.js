const db = require("./connection.js");
const { DataTypes } = require('sequelize');

const Usuarios = db.define('Usuarios', {
    id: {
      autoIncrement:true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
});

module.exports = Usuarios;

