"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Projects",
      [
        {
          name: "Create ABM for challenge",
          description: "create ABM of project for challenge",
          project_manager: "Manuel Vera",
          userId: 1,
          status: "0",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          name: "Create models for challenge",
          description: "create models of project and users for challenge",
          project_manager: "Manuel Vera",
          userId: 2,
          status: "0",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          name: "Create seeders for challenge",
          description: "create seeders of project and users for challenge",
          project_manager: "Manuel Vera",
          userId: 3,
          status: "0",
          updatedAt: new Date(),
          createdAt: new Date(),
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
