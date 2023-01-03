import { Request, Response } from "express";
import { Estacion } from "../models/Estacion";
import { Sensor } from "../models/Sensor";

export const Obtenersensores = async (req: Request, res: Response) => {
    try {
        const sensores = await Estacion.findAll({include:[Sensor]});
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
export const actualizarSensor = async (req: Request, res: Response) => {
    try {
        const {id_sensor} = req.params;
        const {modelo, descripcion, escala, tipo} = req.body;
        const sensor:any = await Sensor.findByPk(id_sensor);
        sensor.modelo = modelo;
        sensor.escala = escala;
        sensor.descripcion = descripcion;
        sensor.tipo = tipo;
        sensor?.save()
        res.status(200).json({
            message:'Listado de Sensores',
            method: "GET",
            data: sensor
        });
    } catch (error) {
        res.status(500).json({
            message: "Se genero un error al obtener la lista de Sensores",
            method: "GET",
            error:error
        })
    }
}
export const obtenerSensor = async (req: Request, res: Response) => {
    try {
        const {id_sensor} = req.params;
        let sensor= await Sensor.findByPk(id_sensor);

        res.status(200).json({
            message:'Exito al obtener el sensor',
            method: "GET",
            data: sensor
        });
    } catch (error) {
        res.status(500).json({
            message: "Se genero un error al obtener el sensor",
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
            res.status(201).json({
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

export const eliminarSensor = async (req:Request, res:Response) =>{
    try{
        const {id_sensor} = req.params;

        if(id_sensor){
            const obj = await Sensor.findByPk(id_sensor);
            obj?.destroy()
            res.status(200).json({
                message: "El sensor se a eliminado exitosamente",
                method:"DELETE",
            })
        }else{
            res.status(400).json({
                message: "El parametro id_estacion no puede estar vacio",
                method: "DELETE"
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Error al eliminar el sensor",
            method: "DELETE",
            error:error
        })
    }

}