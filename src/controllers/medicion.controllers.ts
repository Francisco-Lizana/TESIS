import { Request, Response } from "express";
import { Medicion} from '../models/Medicion';
import { Estacion } from "../models/Estacion";
import { Sensor } from "../models/Sensor";

export const agregarMedicioDeEstacion = async(req:Request, res: Response) =>{
    try{
        var {valor,fecha,id_estacion,id_sensor} = req.body;
        fecha = new Date();
        console.log("Body",req.body)
        if(id_estacion && valor && fecha && id_sensor){

            const obj = await Medicion.create({
                valor,
                fecha,
                id_estacion,
                id_sensor
            });
            res.status(201).json({
                message:"Se a agregado la medicion",
                method: "POST",
                data: obj
            });

        }else{
            res.status(400).json({
                message:"El parametro id (estacion) no puede estar vacio",
                method: "POST"
            });
        }
    }catch(error){
        res.status(500).json({
            message:"Error al agregar medion",
            method:"POST",
            errir:error
        })
    }
}

export const obtenerMedicionesDeEstacion =  async (req:Request, res: Response) => {
    try {
        const{id} = req.params;
        if(id){
            const list = await Medicion.findAll({where:{ id_estacion:id}});
            res.status(200).json({
                message: "Lista de mediciones de estacion ",
                method:"GET",
                data:list
            });
        }else{
            res.status(400).json({
                mesage: "El parametro no puede estar vacio",
                method:"GET"
            });
        }

    }catch(error){
        res.status(500).json({
            message: "Error en la obtención de las mediciones de una estacion",
            method: "GET",
            error:error
        })
    }

}
export const obtenerListaDeMediciones = async (req:Request, res:Response)=> {
    try {
        const list = await Medicion.findAll( {include:[Estacion, Sensor]});
        res.status(200).json({
            message: "Lista de mediciones de estaciones",
            method:"GET",
            data:list
        })
    }catch(error){
        res.status(500).json({
            message: "Error en la obtención de la lista de mediciones",
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