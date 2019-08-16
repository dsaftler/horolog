const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
  const Permission = sequelize.define("permissions", {
    type: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    }
  });
  Permission.associate = function (models) {
    // projects belong to clients
    // console.log(models);
    Permission.hasMany(models.users, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  // console.log('create client');
  return Permission;
}