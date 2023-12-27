import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
import { figure, user, purchase } from './models/index.js';
config();

const { USER, PASSWORD, HOST, DB_PORT, DB_NAME } = process.env;

const sequelize: Sequelize = new Sequelize(
  `postgres://${USER}:${PASSWORD}@${HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false }
);

figure(sequelize);
user(sequelize);
purchase(sequelize);

const { Figure, User, Purchase } = sequelize.models;

export default sequelize;
