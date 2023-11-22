const {
  DB_USER: username,
  DB_HOST: host,
  DB_PORT: port,
  DB_PASSWORD: password,
  DB_DATABASE: database,
} = process.env;

const config = {
  development: {
    database,
    username,
    host,
    port,
    password,
    dialect: "postgres",
  },
};

module.exports = config;
