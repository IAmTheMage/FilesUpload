"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserFileSchema extends Schema {
  up() {
    this.create("user_file", (table) => {
      table.increments();
      table.integer("user_id").unsigned().index("user_id");
      table.integer("file_id").unsigned().index("file_id");
      table
        .foreign("user_id")
        .references("users.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .foreign("file_id")
        .references("files.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("user_file");
  }
}

module.exports = UserFileSchema;
