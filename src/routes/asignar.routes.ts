import { Router } from "express";
import {asignarTrabajador,obtenerAsignacionTrabajadores,eliminarAsignacion} from "../controllers/asignar.controller";

const router =  Router();

router.post("/asignacion", asignarTrabajador);
router.post("/asignacion/eliminar", eliminarAsignacion);
router.get("/asignacion/:id_estacion", obtenerAsignacionTrabajadores);

export default router;