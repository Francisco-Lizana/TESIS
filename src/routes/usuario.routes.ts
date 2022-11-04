import { Router } from "express";
import { getUsuarios,
    getUsuarioPorRut,
     eliminarUsuario } from "../controllers/usuario.controllers";

const router =  Router();

router.get('/usuario/lista',getUsuarios);
router.get('/usuario/:rut',getUsuarioPorRut);
router.delete('/usuario/:rut',eliminarUsuario);

/*EDITAR PATCH*/

export default router;