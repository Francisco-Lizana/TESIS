import { Router } from "express";
import { getUsuarios,
    getUsuarioPorRut,
     eliminarUsuario, 
     agregarUsuario} from "../controllers/usuario.controllers";

const router =  Router();

router.get('/usuario/lista',getUsuarios);
router.get('/usuario/:rut',getUsuarioPorRut);
router.post('/usuario',agregarUsuario);
router.delete('/usuario/:rut',eliminarUsuario);

/*EDITAR PATCH*/

export default router;