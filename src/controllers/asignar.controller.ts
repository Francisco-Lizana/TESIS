import { Request, Response } from "express";
import { Op } from "sequelize/types";
import { Estacion } from "../models/Estacion";
import { Rol } from "../models/Rol";
import { Trabaja } from "../models/Trabaja";
import { Trabajador } from "../models/Trabajador";
import { Usuario } from "../models/Usuario";
import { MANTENEDOR, USUARIO_PLANTA } from "../utils/const/const";

export const asignarTrabajador = async (req: Request, res: Response) => {
  try {
    const { id_trabajador, id_rol, id_estacion } = req.body;
    if (id_rol && id_trabajador && id_estacion) {
      let obj = await Trabaja.create({ id_rol, id_trabajador, id_estacion });
      if (obj) {
        res.status(201).json({
          message: "Trabajador asignado con exito",
          method: "POST",
          data: obj,
        });
      } else {
        res.status(400).json({
          message: "No se pudo asignar al trabajador",
          method: "POST",
        });
      }
    } else {
      res.status(400).json({
        message:
          "Los parametros no pueden estar vacios para asignar a los trbajadores",
        method: "POST",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al asignar al trabajador a una de las estaciones",
      method: "POST",
      error: error,
    });
  }
};

export const obtenerAsignacionTrabajadores = async (
  req: Request,
  res: Response
) => {
  try {
    const { id_estacion } = req.params;

    let usuario_planta = await Trabajador.findAll({
      include: [
        {
          model: Usuario,
          attributes: {
            exclude: ["clave"],
          },
        },
        {
          model: Estacion,
          where: {
            id_estacion: id_estacion,
          },
        },
        {
          model: Rol,
          where: {
            id_rol: USUARIO_PLANTA,
          },
        },
      ],
    });
    let mantenedores = await Trabajador.findAll({
      include: [
        {
          model: Usuario,
          attributes: {
            exclude: ["clave"],
          },
        },
        {
          model: Estacion,
          where: {
            id_estacion: id_estacion,
          },
        },
        {
          model: Rol,
          where: {
            id_rol: MANTENEDOR,
          },
        },
      ],
    });

    res.status(200).json({
      message: "Lista de asignaciones de la estacion",
      method: "POST",
      data: {
        mantenedores: mantenedores,
        usuario_planta: usuario_planta,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener la lista de asignaciones de los trabajadores",
      method: "GET",
      error: error,
    });
  }
};

export const eliminarAsignacion = async (req: Request, res: Response) => {
  try {
    const { id_estacion, id_trabajador, id_rol } = req.body;
    await Trabaja.destroy({
      where: {
        id_estacion: id_estacion,
        id_trabajador: id_trabajador,
        id_rol: id_rol,
      },
    });

    res.status(200).json({
      message: "Se a aliminado con exito la asignacion",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar  la asignacion del trabajador",
      method: "GET",
      error: error,
    });
  }
};
