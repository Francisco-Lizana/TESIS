import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { Estacion } from '../models/Estacion';
import { Medicion } from '../models/Medicion';
import { Rol } from '../models/Rol';
import { Sensor } from '../models/Sensor';
import { Usuario } from '../models/Usuario';
import { RolUsuario } from '../models/RolUsuario';
import { Trabajador } from '../models/Trabajador';
import { Actuador } from '../models/Actuador';
import { Trabaja } from '../models/Trabaja';
import { Plan } from '../models/Plan';

dotenv.config();

export const conection = new Sequelize({
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    dialect: 'mysql',
    password: process.env.DB_PASSWORD,
    //port: 3015,
    models:[
      Rol,
      Usuario,
      RolUsuario,
      Trabajador,
      Estacion,
      Sensor,
      Medicion,
      Actuador,
      Plan,
      Trabaja
    ],
    logging:true
  });
