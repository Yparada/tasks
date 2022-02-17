import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    process.env.NAME_DB,
    process.env.USER_DB,
    process.env.PASSWORD_DB,
    {
        host: process.env.HOST_DB,
        dialect: "postgres",
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
);