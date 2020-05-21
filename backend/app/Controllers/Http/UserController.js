"use strict";

const Mail = use("Mail");
const Env = use("Env");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use("App/Models/User");
const { validateAll } = use("Validator");
const Helpers = use("Helpers");

const SessionValidator = require("../../Validators/StoreUser");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const validation = await validateAll(
      request.only(["email", "username", "password"]),
      SessionValidator.rules,
      SessionValidator.messages
    );
    if (validation.fails()) {
      return response.status(401).json({ message: validation.messages() });
    }
    const data = request.only(["email", "username", "password"]);
    const profileImg = request.file("profile_img", {
      size: "2mb",
      types: ["image"],
    });
    if (!profileImg) {
      data.profile_image = "default";
    } else {
      const filename = `${Date.now()}-${profileImg.clientName}`;
      await profileImg.move(Helpers.tmpPath("uploads"), {
        name: filename,
      });
      data.profile_image = filename;
    }

    const user = await User.create(data);
    await Mail.send("emails.usercreated", { user }, (message) => {
      message
        .to(user.email)
        .from(Env.get("CORPORATIVE_MAIL"))
        .subject("Welcome to FilesUpload.com");
    });
    return response.json({ user });
  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show({ params, request, response, auth }) {
    const { id } = auth.user;
    const user = await User.query().where("id", id).with("files").first();
    return response.json(user);
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async verifyAccount({ params, request, response, view }) {
    const { token } = params;
    const user = await User.query()
      .where("token", token)
      .where("is_active", false)
      .first();
    if (user) {
      user.is_active = true;
      user.token = "";
      await user.save();
      return view.render("userverified");
    }
    return response.status(403).json({ error: "User not found" });
  }
}

module.exports = UserController;
