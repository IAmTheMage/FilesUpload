"use strict";

const Env = use("Env");

const mailHost = Env.get("MAIL_HOST");
const mailPort = Env.get("MAIL_PORT");
const mailUser = Env.get("MAIL_USER");
const mailPassword = Env.get("MAIL_PASSWORD");

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Connection
  |--------------------------------------------------------------------------
  |
  | Connection to be used for sending emails. Each connection needs to
  | define a driver too.
  |
  */
  connection: Env.get("MAIL_CONNECTION", "smtp"),

  /*
  |--------------------------------------------------------------------------
  | SMTP
  |--------------------------------------------------------------------------
  |
  | Here we define configuration for sending emails via SMTP.
  |
  */
  smtp: {
    driver: "smtp", // make sure here is as SMTP
    pool: true,
    // using Env (provided by Adonis) to retriev the .env variables
    host: mailHost,
    port: mailPort,
    secure: false,
    auth: {
      user: mailUser,
      pass: mailPassword,
    },
    maxConnections: 5,
    maxMessages: 100,
    rateLimit: 10,
  },

  /*
  |--------------------------------------------------------------------------
  | SparkPost
  |--------------------------------------------------------------------------
  |
  | Here we define configuration for spark post. Extra options can be defined
  | inside the `extra` object.
  |
  | https://developer.sparkpost.com/api/transmissions.html#header-options-attributes
  |
  | extras: {
  |   campaign_id: 'sparkpost campaign id',
  |   options: { // sparkpost options }
  | }
  |
  */
  sparkpost: {
    driver: "sparkpost",
    apiKey: Env.get("SPARKPOST_API_KEY"),
    extras: {},
  },

  /*
  |--------------------------------------------------------------------------
  | Mailgun
  |--------------------------------------------------------------------------
  |
  | Here we define configuration for mailgun. Extra options can be defined
  | inside the `extra` object.
  |
  | https://mailgun-documentation.readthedocs.io/en/latest/api-sending.html#sending
  |
  | extras: {
  |   'o:tag': '',
  |   'o:campaign': '',,
  |   . . .
  | }
  |
  */
  mailgun: {
    driver: "mailgun",
    domain: Env.get("MAILGUN_DOMAIN"),
    region: Env.get("MAILGUN_API_REGION"),
    apiKey: Env.get("MAILGUN_API_KEY"),
    extras: {},
  },

  /*
  |--------------------------------------------------------------------------
  | Ethereal
  |--------------------------------------------------------------------------
  |
  | Ethereal driver to quickly test emails in your browser. A disposable
  | account is created automatically for you.
  |
  | https://ethereal.email
  |
  */
  ethereal: {
    driver: "ethereal",
  },
};