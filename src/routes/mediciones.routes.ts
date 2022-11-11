import { Router } from "express";
import {agregarMedicioDeEstacion, obtenerListaDeMediciones} from '../controllers/medicion.controllers';

const router =  Router();

router.get('/medicion/lista', obtenerListaDeMediciones);
router.post('/medicion', agregarMedicioDeEstacion);


export default router;