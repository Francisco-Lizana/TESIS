import { Request, Response } from "express";
import { Rol } from "../models/Rol";
import { Usuario} from '../models/Usuario';
import { conection as connection } from '../config/db';
import { RolUsuario } from "../models/RolUsuario";
import { obtenerAsignaciones } from "./estacion.controllers";

export const getUsuarios = async (req: Request, res: Response) => {

    try {
        const usuarios = await Usuario.findAll({include : [Rol]});

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
        console.log(req.body);
        const  {
            rut,
            nombre,
            apellido_paterno,
            apellido_materno,
            correo,
            roles
        } = req.body;

        
        const t = await connection.transaction();
        if(rut && nombre && apellido_materno && apellido_paterno && correo){
            const user= await Usuario.create({
                rut:rut,
                nombre:nombre,
                apellido_paterno:apellido_paterno,
                apellido_materno:apellido_materno,
                correo:correo,
                clave:"12345678"
            })
                       
            await user.$add("roles", roles!);
            let rul = await user.$get("roles");
            res.status(200).json({
                method: "POST",
                message: 'El usuario se creo con exito',
                data:user
            })

        }else {
            res.status(400).json({
                message: "Los parametro del cuerpo no pueden estar vacios",
                method :"POST",
                data : req.body    
            })
        }

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
            await RolUsuario.destroy({
                where:{usuario:rut}
            })
            let obj = await Usuario.findByPk(rut);

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

export const obtenerUsuariosPorRol = async (req:Request, res:Response) => {
    try{
        const {id_rol} = req.params;
        if(id_rol){
            const lista = await Rol.findByPk(id_rol,{ include:[Usuario] })
            res.status(200).json({
                message:"Lista de usuarios por rol",
                method:"GET",
                data:lista
            });
        }else{
            res.status(400).json({
                message:"El parametro id_rol no puede estar vacio",
                method:"GET"
            })
        }
    }catch(error){
        res.status(500).json({
            message: "Error al obtener usuarios por rol",
            method:"GET",
            error:error
        })
    }
}

