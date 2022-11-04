import { Request, Response } from "express";
import { Estacion} from '../models/Estacion';

export const obtenerEstaciones =async (req:Request, res: Response) => {
    try {
        const list = await Estacion.findAll();

        if(list.length){
            res.status(200).json({
                message:"Lista de estaciones",
                method:"GET",
                data: list
            })
        }else{
            res.status(400).json({
                message: "No hay estaciones Registradas",
                method: "GET"
    
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener la lista de estaciones",
            method: "GET",
            error: error

        })
    }
}

export const obtenerEstacionesPorId =async (req:Request, res: Response) => {

    try {
        const {id} = req.params;
        if(id){
            const obj = await Estacion.findByPk(id);
            if(obj){
                res.status(200).json({
                    message: "Obtener estacion por ID",
                    method:"GET",
                    data: obj

                });
            }else{
                res.status(400).json({
                    message: "Se genero un error al buscar la estación",
                    method:"GET",
                    err: "No existe estación con ese ID"
                })
            }
        }else{
            res.status(400).json({
                message:"El parametro ID no puede esta vacio",
                method: "GET"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener la estación por ID",
            method: "GET",
            error: error

        })
    }
}

export const agregarEstacion = async (req:Request, res: Response) =>{
    try {
        const {nombre, ubicacion} =req.body;
        if(nombre && ubicacion){
            
        }else{
            res.status(400).json({
                message:"No se puede crear la estación",
                method:"POST",
            })
        }

    } catch (error) {
        res.status(500).json({
            message: "Error al crear la estación",
            method: "GET",
            error: error

        })
    }

}