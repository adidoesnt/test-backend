const {
    DB_USER: username,
    DB_HOST: host,
    DB_PORT: port,
    DB_PASSWORD: password,
    DB_DATABASE: database,
    PROD_DB_USER: p_username,
    PROD_DB_HOST: p_host,
    PROD_DB_PORT: p_port,
    PROD_DB_PASSWORD: p_password,
    PROD_DB_DATABASE: p_database,
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
    prod: {
        database: p_database,
        username: p_username,
        host: p_host,
        port: p_port,
        password: p_password,
        dialect: "postgres",
    },
};

module.exports = config;
