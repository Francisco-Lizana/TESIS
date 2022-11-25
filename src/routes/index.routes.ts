import { Router, Request, Response } from "express";

import usuario from './usuario.routes';
import rol from './rol.routes';
import estacion from './estacion.routes';
import medicion from './mediciones.routes';
import  auth from './auth.routes';
import sensor from './sensor.routes';
import actuador from './actuador.routes';
import { postTest } from "../controllers/test.controller";

const routes = Router();

routes.use("/api",usuario);
routes.use("/api",rol);
routes.use("/api",estacion);
routes.use("/api",medicion);
routes.use("/api",auth);
routes.use("/api",sensor);
routes.use("/api",actuador);

/*TEST PARA LA PRUEBA DE HARDWARE*/
routes.post("/api/test", postTest);

export default routes;