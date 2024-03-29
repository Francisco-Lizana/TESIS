import { Request, Response } from "express";
import { Actuador } from "../models/Actuador";
import { Estacion } from "../models/Estacion";
import { Plan } from "../models/Plan";
import { Rol } from "../models/Rol";
import { Sensor } from "../models/Sensor";
import { Trabaja } from "../models/Trabaja";
import { Trabajador } from "../models/Trabajador";
import { Usuario } from "../models/Usuario";

export const obtenerEstaciones = async (req: Request, res: Response) => {
  try {
    const list = await Estacion.findAll({
      include: [Sensor, Actuador, Plan],
    });

    if (list.length) {
      res.status(200).json({
        message: "Lista de estaciones",
        method: "GET",
        data: list,
      });
    } else {
      res.status(200).json({
        message: "No hay estaciones Registradas",
        method: "GET",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener la lista de estaciones",
      method: "GET",
      error: error,
    });
  }
};

export const obtenerEstacionesPorId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (id) {
      const obj = await Estacion.findByPk(id);
      if (obj) {
        res.status(200).json({
          message: "Obtener estacion por ID",
          method: "GET",
          data: obj,
        });
      } else {
        res.status(400).json({
          message: "Se genero un error al buscar la estación",
          method: "GET",
          err: "No existe estación con ese ID",
        });
      }
    } else {
      res.status(400).json({
        message: "El parametro ID no puede esta vacio",
        method: "GET",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener la estación por ID",
      method: "GET",
      error: error,
    });
  }
};

export const agregarEstacion = async (req: Request, res: Response) => {
  try {
    const { nombre, ubicacion } = req.body;
    if (nombre && ubicacion) {
      const obj = await Estacion.create({
        nombre,
        ubicacion,
      });
      res.status(200).json({
        message: "Estación agregada con exito",
        method: "POST",
        data: obj,
      });
    } else {
      res.status(400).json({
        message: "No se puede crear la estación",
        method: "POST",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al crear la estación",
      method: "GET",
      error: error,
    });
  }
};
export const eliminarEstacion = async (req: Request, res: Response) => {
  try {
    const { id_estacion } = req.params;
    if (id_estacion) {
      const estacion = await Estacion.findByPk(id_estacion);
      if (estacion) {
        estacion.destroy();
        res.status(200).json({
          message: "Estacion eliminada  con exito",
          method: "DELETE",
        });
      } else {
      }
    } else {
      res.status(400).json({
        message: "El ID no puede estar vacio",
        method: "DELETE",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar la estacion",
      method: "DELETE",
      error: error,
    });
  }
};

export const obtenerEstacionesAsignadas = async (
  req: Request,
  res: Response
) => {
  try {
    const { id_trabajador, id_rol } = req.body;
    let trabaja_es = await Trabaja.findAll({
      where: {
        id_trabajador: id_trabajador,
        id_rol: id_rol,
      },
    });
    console.log("TRABAJA::", trabaja_es)
    let estaciones = [];
    for (let a of trabaja_es) {
      const id = a.id_estacion;
      estaciones.push(
        await Estacion.findOne({
          where: {
            id_estacion: id,
          },
          include:[Sensor]
        })
      );
    }

    res.status(200).json({
      message: "Obtener estaciones dle usuario",
      methof: "GET",
      data: estaciones,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener estaciones del usuario",
      method: "GET",
      error: error,
    });
  }
};

export const obtenerConfiguracion = async (req: Request, res: Response) => {
  try {
    const { id_estacion } = req.params;
    res.status(200).json({
      message: "Obteniendo la configuracion",
      method: "GET",
      data: {
        sensor: [
          {
            id_sensor: 1,
            pin: 3,
            tipo: "TH",
            interval: 10000,
          },
          {
            id_sensor: 17,
            pin: 4,
            tipo: "LDR",
            interval: 2000,
          },
        ],
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener la configuracion de la estación",
      method: "GET",
      error: error,
    });
  }
};

export const obtenerEstacionPorID =async (req: Request, res: Response) => {
  try {
      const {id_estacion} = req.params;

      let estacion = await Estacion.findByPk(id_estacion,{
        include:[Sensor, Actuador]
      });
      res.status(200).json({
        data:estacion
      });


  } catch (error) {
    res.status(500).json({
      message: "Error al obtener la  estación por id",
      method: "GET",
      error: error,
    });
  }
}

