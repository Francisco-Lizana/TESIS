import { Router } from "express";
import { actualizarSensor, agregarSensor, eliminarSensor, obtenerSensor, Obtenersensores,configSensor } from "../controllers/sensores.controller";

const router = Router();

router.get('/sensor/lista', Obtenersensores);
router.get('/sensor/:id_sensor', obtenerSensor);
router.post('/sensor/:id_sensor', actualizarSensor);
router.post('/sensor/config/:id_sensor',configSensor);
router.post('/sensor', agregarSensor);
router.delete('/sensor/:id_sensor', eliminarSensor);

export default router;