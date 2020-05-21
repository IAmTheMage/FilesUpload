"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.post("/user", "UserController.store");
Route.get("/user", "UserController.show").middleware("auth");
Route.get("/v/:token", "UserController.verifyAccount");

Route.post("/login", "SessionController.store");

Route.post("/files", "FileController.store").middleware("auth");
Route.get("/files/:file", "FileController.show");
