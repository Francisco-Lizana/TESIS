import { Router } from "express";
import { agregarActuador, eliminarActuador, obtenerActuadores,obtenerActuadorPorId ,actualizarActuador} from "../controllers/actuador.controller";

const router =  Router();

router.get("/actuador/lista", obtenerActuadores);
router.get("/actuador/:id_actuador",  obtenerActuadorPorId);
router.post("/actuador/actualizar/:id_actuador", actualizarActuador);
router.delete("/actuador/:id_actuador", eliminarActuador);
router.post("/actuador/:id_estacion", agregarActuador);


export default router;