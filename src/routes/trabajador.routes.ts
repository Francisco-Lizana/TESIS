import { Router } from "express";
import { asignarTrabajador, obtenerTrabajadores, obtenerTrabajadoresAsignados } from "../controllers/trabajador.controller";
const router =  Router();

router.get('/trabajador/lista/:id_estacion', obtenerTrabajadoresAsignados);
router.get('/trabajador', obtenerTrabajadores);
router.post('/trabajador/asignar', asignarTrabajador);

export default router;