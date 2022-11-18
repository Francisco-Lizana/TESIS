import { Router } from "express";
import { agregarSensor, eliminarSensor, Obtenersensores } from "../controllers/sensores.controller";

const router = Router();

router.get('/sensor/lista', Obtenersensores);
router.post('/sensor', agregarSensor);
router.delete('/sensor/:id_sensor', eliminarSensor);

export default router;