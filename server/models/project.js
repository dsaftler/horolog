const Sequelize = require('sequelize')

module.exports = function(sequelize, DataTypes) {
  const Project = sequelize.define('projects', {
    brief: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [2]
      }      
    },
    narrative: {
      type: DataTypes.TEXT
    },
    bdate : { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    defclass: {
      type: DataTypes.ENUM('Dev','O&E')
    },
    is_archived: {
      type: DataTypes.BOOLEAN,
      defaultValue: false 
    }
  });
  // Project.associate = function(models) {
  //   // projects belong to clients
  //   Project.belongsTo(models.clients, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return Project;
}