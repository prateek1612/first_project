'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('tbl_countries', [{
      country_name: 'India',
      is_active: true,
      utc_created_at : new Date() ,
      utc_updated_at : new Date()
     },
     {
      country_name: 'USA',
      is_active: true,
      utc_created_at : new Date() ,
      utc_updated_at : new Date()
     },
     {
      country_name: 'Canada',
      is_active: false,
      utc_created_at : new Date() ,
      utc_updated_at : new Date()
     },
     {
      country_name: 'Brazil',
      is_active: true,
      utc_created_at : new Date() ,
      utc_updated_at : new Date()
     }
    ], {});
     

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tbl_countries', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};