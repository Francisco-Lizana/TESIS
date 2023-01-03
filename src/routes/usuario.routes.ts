import { Router } from "express";
import { getUsuarios,
    getUsuarioPorRut,
     eliminarUsuario, 
     agregarUsuario,
     obtenerUsuariosPorRol,
     actualizar
    } from "../controllers/usuario.controllers";

const router =  Router();

router.get('/usuario/lista',getUsuarios);
router.get('/usuario/:rut',getUsuarioPorRut);
router.post('/usuario',agregarUsuario);
router.delete('/usuario/:rut',eliminarUsuario);
router.get('/usuario/trabajador/:id_rol' ,obtenerUsuariosPorRol);
router.post('/usuario/actualizar/' ,actualizar);


export default router;