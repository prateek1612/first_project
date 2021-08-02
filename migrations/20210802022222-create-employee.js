'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbl_employees', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    employee_name:{
        type: Sequelize.STRING(100),
        allowNull: false,     
    },

    gender:{
        type: Sequelize.ENUM('male', 'female'),
        allowNull: false, 
    },

    address_1:{
        type: Sequelize.STRING(100),
        allowNull: false, 
    },

    address_2:{
        type: Sequelize.STRING(100),
          
    },
    city:{
        type: Sequelize.STRING(100),
        allowNull: false, 
    },
    state:{
        type: Sequelize.STRING(100),
        allowNull: false, 
    },
    
    country :{
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('tbl_employees');
  }
};