import { Request, Response } from "express";
import { Plan } from "../models/Plan";

export const agregarPlan =async (req:Request, res:Response) => {
    try {
        const {id_estacion} = req.params;
        let configuracion = req.body;
        let obj =await Plan.create(
            {
                configuracion:configuracion, 
                id_estacion:id_estacion}); 

        console.log("PLAN_BODY::",req.body)
        res.status(200).json({
            data:null
        })
      
    } catch (error) {
        res.status(500).json({
            messages: "Error al crear el plan",
            method:'POST',
            error:error
        })
    }
}


export const eliminar =async (req:Request, res:Response) => {
    try {
        const {id_plan} = req.params;
        let obj =await Plan.findByPk(id_plan);
        console.log("OBJ", req.params)
        obj?.destroy();
        res.status(200).json({
            messages: "Plan eliminado",
            method:'GET'
        })
      
    } catch (error) {
        res.status(500).json({
            messages: "Error al eliminar el plan",
            method:'GET',
            error:error
        })
    }
}

