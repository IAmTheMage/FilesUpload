"use strict";

const { test, trait } = use("Test/Suite")("User_File");

const Factory = use("Factory");

trait("Test/ApiClient");
trait("Auth/Client");
test("be able to show user and he files", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();
  const files = await Factory.model("App/Models/File").createMany(5);
  let filesId = [];
  files.map((file) => {
    filesId.push(file.id);
  });
  await user.files().attach(filesId);
  const response = await client.get(`/user`).loginVia(user).end();
  response.assertStatus(200);
  assert.exists(response.body);
});
