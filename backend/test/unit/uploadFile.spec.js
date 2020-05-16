"use strict";

const { test, trait } = use("Test/Suite")("File");

const Helpers = use("Helpers");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use("App/Models/User");

trait("Test/ApiClient");
trait("Auth/Client");
test("be able to store a new File", async ({ assert, client }) => {
  const user = await User.create({
    username: "asdasd",
    password: "123456",
    email: "b@gmail.com",
  });

  const response = await client
    .post("/files")
    .attach("file", Helpers.tmpPath("default/amplifica_banner_blog-4.jpg"))
    .loginVia(user)
    .end();

  response.assertStatus(201);
  assert.exists(response.body.file.id);
});
