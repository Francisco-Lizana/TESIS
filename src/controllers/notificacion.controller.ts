import { Request, Response } from "express";
import { Notificacion } from "../models/Notificacion";

export const agregarMedicioDeEstacion = async(req:Request, res: Response) => {
    try {
        const {id_trabajador, descripcion } = req.body;
        if(id_trabajador && descripcion){
            let obj = await Notificacion.create({id_trabajador, descripcion});
            if(obj){
                res.status(200).json({
                    message: "Notificacion ingresada con exito",
                    method: "POST",
                    data: obj
                })
            }else{
                res.status(400).json({
                    message: "No se  puedo ingresar la notificacion",
                    method: "POST",
                })
            }
        }else {
            res.status(400).json({
                message: "Los campos para notificar no pueden estar vacios",
                method: "POST",
            })
        }

    } catch (error) {
        res.status(500).json({
            message: "Error al ingresar las notifdicacion  de falla",
            method:"POST",
            error: error
        })
    }

}