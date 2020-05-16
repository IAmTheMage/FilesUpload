"use strict";

const { test, trait } = use("Test/Suite")("User");

trait("Test/ApiClient");
test("be able to create a new user", async ({ assert, client }) => {
  const response = await client
    .post("/user")
    .send({
      username: "Gustavinho",
      email: "g@gmail.com",
      password: "123456",
    })
    .end();
  response.assertStatus(200);
  assert.exists(response.body.user.id);
});
