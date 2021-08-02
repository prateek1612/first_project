'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  employee.init({
   
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    employee_name:{
        type: DataTypes.STRING(100),
        allowNull: false,     
    },

    gender:{
        type: DataTypes.ENUM('male', 'female'),
        allowNull: false, 
    },

    address_1:{
        type: DataTypes.STRING(100),
        allowNull: false, 
    },

    address_2:{
        type: DataTypes.STRING(100),
          
    },
    city:{
        type: DataTypes.STRING(100),
        allowNull: false, 
    },
    state:{
        type: DataTypes.STRING(100),
        allowNull: false, 
    },
    
    country :{
        type: DataTypes.INTEGER,
        allowNull: false, 
    },

    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false, 
        defaultValue: true
      },
      utc_created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      utc_updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date()
      }
     
  }, {
    sequelize,
    tableName:'tbl_employees',
    modelName: 'employee',
    createdAt:  'utc_created_at', 
    updatedAt:  'utc_updated_at' 

  });
  return employee;
};