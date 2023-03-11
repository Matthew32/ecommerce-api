const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD
const dbDatabase = process.env.DB_DATABASE;
const dbDialect = "mysql";

module.exports = {
    HOST: dbHost,
    USER: dbUser,
    PASSWORD: dbPassword,
    DB: dbDatabase,
    dialect: dbDialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};