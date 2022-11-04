import { Request, Response } from "express";
import { where } from "sequelize/types";
import { Medicion} from '../models/Medicion';

export const obtenerMedicionesDeEstacion =  async (req:Request, res: Response) => {
    try {

    }catch(error){
        res.status(500).json({
            message: "Error en la obtención de las mediciones de una estacion",
            method: "GET",
            error:error
        })
    }

}
export const obtenerMedicionesDeEstacionPorFecha =  async (req:Request, res: Response) => {
    try {
        const {id, inicio, termino} = req.body;
        if(id && inicio && termino){
/*             list = await Medicion.findAll(where{
                fecha
            }) */
        }else{
            res.status(400).json({
                message: "El parametro no puede estar vacio",
                method: "GET"

            })
        }
    }catch(error){
        res.status(500).json({
            message: "Error en la obtención de las mediciones de una estacion por fechas",
            method: "GET",
            error:error
        })
    }


}