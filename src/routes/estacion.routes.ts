import { Router } from "express";
import { obtenerEstaciones, agregarEstacion,eliminarEstacion } from "../controllers/estacion.controllers";

const router =  Router();

router.get("/estacion/lista", obtenerEstaciones);
router.post("/estacion", agregarEstacion);
router.delete("/estacion/:id", eliminarEstacion);
router.get("/estacion/:id");
export default router;

