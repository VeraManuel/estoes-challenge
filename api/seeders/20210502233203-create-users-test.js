"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Manuel",
          lastName: "Vera",
          image: "https://reqres.in/img/faces/1-image.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Juan",
          lastName: "Perez",
          image: "https://reqres.in/img/faces/2-image.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Francisco",
          lastName: "Suarez",
          image: "https://reqres.in/img/faces/3-image.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Gonzalo",
          lastName: "Fricks",
          image: "https://reqres.in/img/faces/4-image.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
