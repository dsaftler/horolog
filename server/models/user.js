const Sequelize = require('sequelize')
const bcrypt = require("bcryptjs");
//! Foreign Key for permissionId
module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define("users", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      len:[7,100],
      unique: {
        args: true,
        msg: 'Email address already in use!'
     },
      validate: {
        isEmail: true
      }
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING
    }
  },
  {paranoid:true}
  );
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.prototype.emailExists = async function (email) {

     db.users.findOne({
      where: { email }
    })
      .then(user=>user.length>0) 

  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  // console.log('create user');
  return User;
};
