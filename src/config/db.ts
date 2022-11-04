import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { Estacion } from '../models/Estacion';
import { Rol } from '../models/Rol';
import { Sensor } from '../models/Sensor';
import { Usuario } from '../models/Usuario';

dotenv.config();

export const conection = new Sequelize({
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    dialect: 'mysql',
    password: process.env.DB_PASSWORD,
    port: 3306,
    models:[
      Rol,
      Usuario,
      Estacion,
      Sensor
    ],
    logging:true
  });
