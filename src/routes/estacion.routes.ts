import { Router } from "express";
import { obtenerEstaciones, agregarEstacion,obtenerAsignaciones,eliminarEstacion } from "../controllers/estacion.controllers";

const router =  Router();

router.get("/estacion/lista", obtenerEstaciones);
router.post("/estacion", agregarEstacion);
router.delete("/estacion/:id_estacion", eliminarEstacion);
router.get("/estacion/:id");
router.get("estacion/asignaciones", obtenerAsignaciones);
export default router;

