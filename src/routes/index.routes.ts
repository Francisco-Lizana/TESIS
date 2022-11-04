import { Router, Request, Response } from "express";

import usuario from './usuario.routes';
import rol from './rol.routes';
import estacion from './estacion.routes';

const routes = Router();

routes.use("/api",usuario);
routes.use("/api",rol);
routes.use("/api",estacion);

export default routes;