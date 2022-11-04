import { Request, Response } from "express";
import { Usuario} from '../models/Usuario';

export const getUsuarios = async (req: Request, res: Response) => {

    try {
        const usuarios = await Usuario.findAll();
        res.status(200).json({
            message:'Listado de Usuarios',
            method: "GET",
            data: usuarios
        });
    } catch (error) {
        res.status(500).json({
            message: "Se genero un error al obtener la lista de usuarios",
            method: "GET",
            error:error
        })
        
    }

}
export const agregarUsuario = async (req: Request, res: Response) =>{
    try {
        const  {
            rut,
            nombre,
            apellido_paterno,
            apellido_materno,
            correo
        } = req.body;
        console.log(req.body);
        return;

        /* onst usua = await Usuario.create(); */
    } catch (error) {
        
    }

}

export const getUsuarioPorRut = async (req: Request, res: Response) => {
    try{
        const {rut} = req.params;
        const usuario = await Usuario.findByPk(rut);

        res.status(200).json({
            message:'Obtener usuario por rut',
            method: "GET",
            data: usuario
        });
    }catch (error) {
        res.status(500).json({
            message: "Se genero un error al obtener el usuario por rut",
            method: "GET",
            error:error
        })
        
    }
}

export const eliminarUsuario = async (req: Request, res: Response) =>{
    try {
        const {rut} = req.params;
        
        if(rut){
            const obj = await Usuario.findByPk(rut);
            if(obj){
                obj.destroy();
                res.status(200).json({
                    message: "Se elimino al usuario exitosamente",
                    method: "DELETE"
                    
                })
            }else{
                res.status(400).json({
                    message: "Se genero un error eliminar el usuario",
                    method: "DELETE",
                    error: "El usuario no existe"
                })
            }

        }else{
            res.status(400).json({
                message: "Se genero un error eliminar el usuario",
                method: "DELETE",
                error: "El parametro rut no puede estar vacio"
            })
        }

    } catch (error) {
        res.status(500).json({
            message: "Se genero un error eliminar el usuario",
            method: "DELETE",
            error:error
        })
    }
}

