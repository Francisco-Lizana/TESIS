import { Router } from "express";
import { obtenerEstaciones, agregarEstacion,eliminarEstacion, obtenerConfiguracion,obtenerEstacionesAsignadas } from "../controllers/estacion.controllers";

const router =  Router();

router.get("/estacion/lista", obtenerEstaciones);
router.get("/estacion/");
router.post("/estacion", agregarEstacion);
router.delete("/estacion/:id_estacion", eliminarEstacion);
router.post("/estacion/asignadas", obtenerEstacionesAsignadas);
router.get("/estacion/config/:id_estacion", obtenerConfiguracion);

export default router;

