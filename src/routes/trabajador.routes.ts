import { Router } from "express";
import { asignarTrabajador, obtenerTrabajadoresAsignados } from "../controllers/trabajador.controller";
const router =  Router();

router.get('/trabaja/lista/:id_estacion', obtenerTrabajadoresAsignados);
router.post('/trabaja/asignar', asignarTrabajador);

export default router;