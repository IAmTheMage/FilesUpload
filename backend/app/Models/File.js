"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class File extends Model {
  user() {
    return this.belongsToMany("App/Models/User").pivotTable("user_file");
  }
}

module.exports = File;
