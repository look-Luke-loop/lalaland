'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users',
    [
      {
        "name": "Fernanda",
        "email": "fernanda@example.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Diego",
        "email": "diego@example.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Camila",
        "email": "camila@example.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Thiago",
        "email": "thiago@example.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Amanda",
        "email": "amanda@example.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Ricardo",
        "email": "ricardo@example.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Juliana",
        "email": "juliana@example.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Felipe",
        "email": "felipe@example.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Beatriz",
        "email": "beatriz@example.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Gustavo",
        "email": "gustavo@example.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Ana",
        "email": "ana@example.com",
        "createdAt":new Date(),
        "updatedAt":new Date()
      },
      {
        "name": "João",
        "email": "joao@example.com",
        "createdAt":new Date(),
        "updatedAt":new Date()
      },
      {
        "name": "Maria",
        "email": "maria@example.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Pedro",
        "email": "pedro@example.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Luiza",
        "email": "luiza@example.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Gabriel",
        "email": "gabriel@example.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Mariana",
        "email": "mariana@example.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Lucas",
        "email": "lucas@example.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Carolina",
        "email": "carolina@example.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Rafael",
        "email": "rafael@example.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ])
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

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
