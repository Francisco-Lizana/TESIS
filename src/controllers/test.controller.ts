import { Request, Response } from "express";

export const postTest = async (req: Request, res: Response)=>{
    try{
        const {body} = req.body;
        res.status(200).json({
            message:"Test de metodos POST",
            data:body
        })

    }catch(error){
        res.status(500).json({
            message: "Error en el servidor"
        });
    }

}