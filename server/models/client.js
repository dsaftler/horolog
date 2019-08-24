module.exports = function(sequelize, DataTypes) {
  const Client = sequelize.define("clients", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_archived: {
      type: DataTypes.BOOLEAN,
      defaultValue: false 
    },
    bill_rate_OE: {
      type: DataTypes.DECIMAL(6, 2)
    },
    bill_rate_DEV: {
      type: DataTypes.DECIMAL(6, 2)
    }
  },
   { paranoid: true }
  );
  Client.associate = function (models) {
  // projects belong to clients
    // console.log(models);
    Client.hasMany(models.projects, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  // console.log('create client');
  return Client;
}