import { Router } from "express";
import { agregarSensor, Obtenersensores } from "../controllers/sensores.controller";

const router = Router();

router.get('/sensor/lista', Obtenersensores);
router.post('/sensor', agregarSensor);

export default router;