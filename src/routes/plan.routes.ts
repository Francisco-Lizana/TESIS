import { Router } from "express";
import {agregarPlan, eliminar} from "../controllers/plan.controller";
const router =  Router();

router.post('/plan/:id_estacion', agregarPlan);
router.get('/plan/:id_plan', eliminar);



export default router;