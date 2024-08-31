import { Sequelize } from 'sequelize-typescript';
import { Reading } from './models/Reading';

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    dialect: 'mysql',
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    models: [Reading],
});

export default sequelize;
