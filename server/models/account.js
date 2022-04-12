const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Account extends Model { }

Account.init({
     id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
     },
     locationId: {
          type: DataTypes.STRING,
          references: {
               model: Location,
               key: 'id'
          }
     },
     number: DataTypes.INTEGER,
     service: DataTypes.STRING,
}, {
     timestamps: false,
     sequelize,
     modelName: 'Account',
});