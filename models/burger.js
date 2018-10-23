module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
        // validate: {
        //   len: [3]
        // }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
      }
    });
  
    return Burger;
  };