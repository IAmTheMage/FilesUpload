"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use("App/Models/User");

const Database = use("Database");

const { validateAll } = use("Validator");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @typedef {import('@adonisjs/auth/src/Schemes/Session')} AuthSession */

/**
 * Resourceful controller for interacting with sessions
 */
class SessionController {
  /**
   * Create/save a new session.
   * POST sessions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {AuthSession} ctx.auth
   */
  async store({ request, response, auth }) {
    const sessionValidationMessages = {
      "user.required": "User field is required",
      "password.required": "Password field is required",
    };
    const sessionValidationRules = {
      user: "required",
      password: "required",
    };
    const validation = await validateAll(
      request.only(["user", "password"]),
      sessionValidationRules,
      sessionValidationMessages
    );
    if (validation.fails()) {
      return response.status(401).json({ error: validation.messages() });
    }
    const { user, password } = request.only(["user", "password"]);
    const findedUser = await User.query()
      .where("is_active", true)
      .andWhere((builder) => {
        builder.orWhere("email", user).orWhere("username", user);
      })
      .first();
    if (!findedUser) {
      return response.status(403).json({ error: "User not found" });
    }
    const authUser = await auth.attempt(findedUser.email, password);
    return response.json({ token: authUser.token });
  }

  /**
   * Delete a session with id.
   * DELETE sessions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = SessionController;
