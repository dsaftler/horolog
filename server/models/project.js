const Sequelize = require('sequelize')
//! Foreign Key for clientId

module.exports = function(sequelize, DataTypes) {
  // console.log('create project 4');
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
    },
    bill_rate_OE: {
      type: DataTypes.DECIMAL(6,2)
    },
    bill_rate_DEV: {
      type: DataTypes.DECIMAL(6,2)
    },
    fixed_price: {
      type: DataTypes.DECIMAL(8,2)
    }
  },
  { paranoid: true }
  );
  Project.associate = function(models) {
  //   // projects belong to clients
    Project.belongsTo(models.clients, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  // console.log('create project');
  return Project;
}