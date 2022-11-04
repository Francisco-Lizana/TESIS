import { Request, Response } from "express";
import { Rol} from '../models/Rol';

export const getRoles = async (req: Request, res: Response) => {
        try {
            const roles = await Rol.findAll();
            res.status(200).json({
                message:'Listado de Roles',
                method: "GET",
                data: roles
            });
        } catch (error) {
            res.status(500).json({
                message: "Se genero un error al obtener la lista de roles",
                method: "GET",
                error:error
            })
        }
}
