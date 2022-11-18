import { Request, Response } from "express";
import { Estacion } from "../models/Estacion";
import { Sensor } from "../models/Sensor";

export const Obtenersensores = async (req: Request, res: Response) => {
    try {
        const sensores = await Sensor.findAll({include:[Estacion]});
        res.status(200).json({
            message:'Listado de Sensores',
            method: "GET",
            data: sensores
        });
    } catch (error) {
        res.status(500).json({
            message: "Se genero un error al obtener la lista de Sensores",
            method: "GET",
            error:error
        })
    }
}
export const agregarSensor = async (req:Request, res:Response) =>{
    try{
        const {
            descripcion,
            tipo,
            modelo,
            escala,
            configuracion,
            id_estacion
        }=req.body;
        if(descripcion && tipo && modelo && escala && id_estacion){
            const obj = await Sensor.create({descripcion ,tipo, modelo ,escala , configuracion, id_estacion})
            res.status(200).json({
                message:"Se a agregado el sensor exitosamente",
                method:"POST",
                data:obj
            })
        }else{
            res.status(400).json({
                message:"Error al agregar la estacion",
                method:"POST"
            })
        }

    }catch(error){
        res.status(500).json({
            message: "Error al agregar el sensor",
            method: "POST"
        })
    }
}