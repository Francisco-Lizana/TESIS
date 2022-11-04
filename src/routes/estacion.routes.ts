import { Router } from "express";
import { obtenerEstaciones, agregarEstacion } from "../controllers/estacion.controllers";

const router =  Router();

router.get("/estacion/lista", obtenerEstaciones);
router.post("/estacion", agregarEstacion);
router.delete("/estacion/:id");
router.get("/estacion/:id");
export default router;

