import { Router, Request, Response } from "express";

import usuario from './usuario.routes';
import rol from './rol.routes';
import estacion from './estacion.routes';
import { postTest } from "../controllers/test.controller";

const routes = Router();

routes.use("/api",usuario);
routes.use("/api",rol);
routes.use("/api",estacion);

/*TEST PARA LA PRUEBA DE HARDWARE*/
routes.post("/api/test", postTest);

export default routes;