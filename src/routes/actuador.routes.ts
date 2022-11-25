import { Router } from "express";
import { agregarActuador, eliminarActuador, obtenerActuadores } from "../controllers/actuador.controller";

const router =  Router();

router.get("/actuador/lista", obtenerActuadores);
router.delete("/actuador/:id_actuador", eliminarActuador);
router.post("/actuador", agregarActuador);

export default router;