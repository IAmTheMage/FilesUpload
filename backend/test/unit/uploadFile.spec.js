"use strict";

const { test, trait } = use("Test/Suite")("File");

const Helpers = use("Helpers");

trait("Test/ApiClient");
test("be able to store a new File", async ({ assert, client }) => {
  const response = await client
    .post("/files")
    .attach("file", Helpers.tmpPath("default/amplifica_banner_blog-4.jpg"))
    .end();

  response.assertStatus(201);
  assert.exists(response.body.file.id);
});
