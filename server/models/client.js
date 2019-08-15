module.exports = function(sequelize, DataTypes) {
  const Client = sequelize.define("clients", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true 
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