'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbl_countries', {
       id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },

    country_name:{
        type: Sequelize.STRING(100),
        allowNull: false, 
    },

    is_active: {
      type: Sequelize.BOOLEAN,
      allowNull: false, 
      defaultValue: true
    },
    utc_created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      utc_updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tbl_countries');
  }
};