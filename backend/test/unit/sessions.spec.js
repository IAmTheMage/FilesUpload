"use strict";

const { test, trait } = use("Test/Suite")("Session");

const Factory = use("Factory");

const User = use("App/Models/User");

trait("Test/ApiClient");
test("be able to login in new session by email", async ({ assert, client }) => {
  const user = await User.create({
    username: "12345",
    email: "ga@gmail.com",
    password: "123456",
  });
  const validUser = await client.get(`/v/${user.token}`).end();
  const response = await client
    .post("/login")
    .send({
      user: "ga@gmail.com",
      password: "123456",
    })
    .end();
  response.assertStatus(200);
  assert.exists(response.body.token);
});

test("be able to login in new session by user", async ({ assert, client }) => {
  const response = await client
    .post("/login")
    .send({
      user: "12345",
      password: "123456",
    })
    .end();

  response.assertStatus(200);
  assert.exists(response.body.token);
});
