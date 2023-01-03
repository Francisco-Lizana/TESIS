import { Request, Response } from "express";
import { Trabaja } from "../models/Trabaja";
import { Trabajador } from "../models/Trabajador";
import { MANTENEDOR, USUARIO_PLANTA } from "../utils/const/const";

export const obtenerTrabajadoresAsignados = async (
  req: Request,
  res: Response
) => {
  try {
    const { id_estacion } = req.params;
    if (id_estacion) {
      console.log("id_estacio::", id_estacion)
      let matenedores = await Trabaja.findAll({
        where: {
          id_estacion: id_estacion
        }
      });
      console.log(matenedores)

/*       let usuarios_planta = await Trabaja.findAll({
        where: {
          id_estacion: id_estacion,
          id_rol: USUARIO_PLANTA,
        },
        include: [Trabajador],
      }); */
      res.status(200).json({
        message: "Lista de mantenedores y usuarios de planta ",
        method: "GET",
        data: {
          mantenedores: matenedores
        },
      });
    } else {
      res.status(400).json({
        message: "El parametro no puede estar vacio",
        method: "GET",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los trabajadores asignados a la estación",
      method: "GET",
      error: error,
    });
  }
};

export const asignarTrabajador = async (req: Request, res: Response) => {
  try {
    const { id_estacion, id_rol, id_trabajador } = req.body;
    if (id_estacion && id_rol && id_trabajador) {
      let obj = await Trabaja.create({
        id_estacion,
        id_rol,
        id_trabajador,
      });
      res.status(200).json({
        message: "Exito al asignar el trabajador",
        method: "POST",
        data: obj,
      });
    } else {
      res.status(400).json({
        message: "Los parametros no pueden estar vacios",
        method: "POST",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al asignar trabjador a la estación de monitoreo",
      method: "POST",
      error: error,
    });
  }
};
