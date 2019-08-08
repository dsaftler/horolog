const Sequelize = require('sequelize')
module.exports = function(sequelize, DataTypes) {
  const Block = sequelize.define('blocks', {
    bdate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    notes: {
      type: DataTypes.TEXT,
      validate: {
        len: [4]
      }
    },
    minutes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        max: 1200  // 20 hrs
      }
    },
    edate: {
      type: DataTypes.DATE,
    },
    is_submitted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    is_booked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    curclass: {
      type: DataTypes.ENUM('Dev','O&E'),
      allowNull: false
    }
  });

  Block.associate = function (models) {
    // projects belong to clients
    Block.belongsTo(models.users, {
      foreignKey: {
        allowNull: false
      }
    });
    // console.log(models);
    Block.belongsTo(models.projects, {
      foreignKey: {
        allowNull: false
      }
    });
   
  }; 

  return Block;
}
