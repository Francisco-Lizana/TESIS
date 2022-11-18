import { Request, Response } from "express";
import { Usuario } from "../models/Usuario";
import * as jwt from 'jsonwebtoken';
import valid from '../config/utils';
import config from "../config/config";
import { Rol } from "../models/Rol";


export const login = async (req: Request, res: Response) => {
    try{
        const {correo, clave} = req.body;

        const usuario= await Usuario.findOne({
            where:{correo},include:[Rol]
        })
        if(!valid(clave!, usuario!.clave)){
            return res.status(500).json({
                message: 'contraseña incorrecta'
            })
        }
        
        const token = jwt.sign(
            {
                id: usuario!.id,
                correo:usuario!.correo,
                nombre: usuario!.nombre,
                rol:usuario!.roles,
                apellido_paterno: usuario!.apellido_paterno,
                apellido_materno: usuario!.apellido_materno,
                
            },
            config.jwtSecret,
            { expiresIn: '1h' }
        );

        res.status(200).header('auth-token', token)
        .json({
        message:'Token de Usuario',
        token
    });
    }catch(error){
        res.status(500).json({
            message:"No se a podido logear",
            method: "POST"
        })
    }
}