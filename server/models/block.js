const Sequelize = require('sequelize')
//! Foreign Key for projectId AND userId

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
        isInt: {
          msg: "Must be an integer number"
        },
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
    },
    billed_rate: {
      type: DataTypes.DECIMAL(6, 2)
    },
  },
  { paranoid: true }
  );
  
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
    
    Block.cMethod1= function () { return true; }
    Block.prototype.iMethod1 = function () { return true; }
    Block.prototype.iMethod2 = function () { return true; }    
    // const Pug = db.define('pugs', {/* etc*/ })
    
  // console.log('create block');
  return Block;
}
      // // instance methods are defined on the model's .prototype
      // Pug.prototype.celebrateBirthday = function () {
        //   // 'this' in an instance method refers to the instance itself
        //   const birthday = new Date(this.birthday)
        //   const today = new Date()
        //   if (birthday.getMonth() === today.getMonth() && today.getDate() === birthday.getDate()) {
          //     console.log('Happy birthday!')
          //   }
          // }
          // const createdPug = await Pug.create({ name: 'Cody' }) // let's say `birthday` defaults to today
          // // the instance method is invoked *on the instance*
          // createdPug.celebrateBirthday() // Happy birthday!
          
          // const Pug = db.define('pugs', {/* etc*/ })
          
          // // class methods are defined right on the model
          // Pug.findPuppies = function () {
            //   // 'this' refers directly back to the model (the capital "P" Pug)
            //   return this.findAll({ // could also be Pug.findAll
            //     where: {
              //       age: { $lte: 1 } // find all pugs where age is less than or equal to 1
              //     }
              //   })
              // }
              // const foundPuppies = await Pug.findPuppies()
              // console.log('Here are the pups: ', foundPuppies)
              
              // const Pug = db.define('pugs', {/* etc*/ })
              
              // // class methods are defined right on the model
              // Pug.findPuppies = function () {
                //   // 'this' refers directly back to the model (the capital "P" Pug)
                //   return this.findAll({ // could also be Pug.findAll
                //     where: {
                  //       age: { $lte: 1 } // find all pugs where age is less than or equal to 1
                  //     }
                  //   })
                  // }
                  // const foundPuppies = await Pug.findPuppies()
                  // console.log('Here are the pups: ', foundPuppies)
