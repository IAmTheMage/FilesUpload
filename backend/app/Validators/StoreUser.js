"use strict";

class StoreUser {
  static get rules() {
    return {
      email: "required|unique:users,email",
      username: "required|unique:users,username",
      password: "required|min:6",
    };
  }

  static get messages() {
    return {
      "email.unique": "Email needs to be unique",
      "email.required": "Email field is required",
      "username.unique": "Username needs to be unique",
      "username.required": "Username field is required",
      "password.required": "Password field is required",
      "password.min": "Min length to password field is 6",
    };
  }
}

module.exports = StoreUser;
