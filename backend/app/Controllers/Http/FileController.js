"use strict";

/** @typedef {import('@adonisjs/ignitor/src/Helpers')} Helpers */
const Helpers = use("Helpers");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const File = use("App/Models/File");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @typedef {import('@adonisjs/auth/src/Schemes/Session')} AuthSession */

/**
 * Resourceful controller for interacting with files
 */
class FileController {
  /**
   * Create/save a new file.
   * POST files
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {AuthSession} ctx.auth
   */
  async store({ request, response, auth }) {
    const file = request.file("file", {
      size: "2mb",
    });
    const filename = `${Date.now()}-${file.clientName}`;
    await file.move(Helpers.tmpPath("files"), {
      name: filename,
    });
    if (!file.moved()) {
      return file.error();
    }
    const createdFile = await File.create({
      name: filename,
      type: file.subtype,
    });
    const user_id = auth.user.id;
    await createdFile.user().attach([user_id]);
    return response.status(201).json({ file: createdFile });
  }

  /**
   * Display a single file.
   * GET files/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { file } = params;
    return response.download(Helpers.tmpPath(`files/${file}`));
  }
}

module.exports = FileController;
