'use strict';
module.exports = {
     up: (queryInterface, Sequelize) => {
          return queryInterface.createTable('Locations', {
               id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
               },
               address: {
                    type: Sequelize.STRING
               },
               city: {
                    type: Sequelize.STRING
               },
               state: {
                    type: Sequelize.STRING
               },
               zipcode: {
                    type: Sequelize.STRING
               },
               sqft: {
                    type: Sequelize.INTEGER
               },
               createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
               },
               updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
               }
          });
     },
     down: (queryInterface, Sequelize) => {
          return queryInterface.dropTable('Locations');
     }
};
npx sequelize model:generate --name Location --attributes address:string,city:string,state:string,zipcode:string,sqft:integer