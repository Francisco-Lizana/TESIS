import { Request, Response } from "express";
import { Actuador } from "../models/Actuador";
import { Estacion } from "../models/Estacion";

export const obtenerActuadores = async (req: Request, res: Response) => {
  try {
    const lista = await Estacion.findAll({ include: [Actuador] });
    res.status(200).json({
      message: "Lista de actuadores",
      method: "GET",
      data: lista,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener la lista de actuadores",
      method: "GET",
      error: error,
    });
  }
};

export const agregarActuador = async (req: Request, res: Response) => {
  try {
    const { id_estacion } = req.params;
    const { descripcion, tipo, modelo, configuracion } = req.body;
    if (descripcion && tipo && modelo && id_estacion) {
      const obj = await Actuador.create({
        descripcion,
        tipo,
        modelo,
        configuracion,
        id_estacion,
      });
      res.status(201).json({
        message: "Actuador agregado con exito",
        method: "POST",
        data: obj,
      });
    } else {
      res.status(400).json({
        message: "Los campos no pueden estar vacios",
        method: "POST",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al agregar un actuador",
      method: "POST",
      error: error,
    });
  }
};

export const eliminarActuador = async (req: Request, res: Response) => {
  try {
    const { id_actuador } = req.params;
    if (id_actuador) {
      const obj = await Actuador.findByPk(id_actuador);
      obj?.destroy();
      res.status(200).json({
        message: "El Actuador se eliminp con exito",
        method: "GET",
      });
    } else {
      res.status(400).json({
        message: "Los parametros no pueden estar vacios",
        method: "GET",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al aliminar un actuador",
      method: "DELETE",
      error: error,
    });
  }
};
export const obtenerActuadorPorId = async (req: Request, res: Response) => {
  try {
    const { id_actuador } = req.params;
    let obj = await Actuador.findByPk(id_actuador);
    res.status(200).json({
        message: "Exito al obtener el actuador",
        method:'GET',
        data:obj
    })
  } catch (error) {
    res.status(500).json({
      message: "No se pudo obtener el actuador",
      method: "POST",
      error: error,
    });
  }
};

export const actualizarActuador = async (req: Request, res: Response) => {
  try {
    const { id_actuador } = req.params;
    const { modelo, tipo, descripcion } = req.body;
    let obj = await Actuador.findByPk(id_actuador);
    obj?.update({
      modelo,
      tipo,
      descripcion,
    });
    obj?.save();
    res.status(200).json({
      message: "Se actualizo el actuador",
      method: "POST",
      data: obj,
    });
  } catch (error) {
    res.status(500).json({
      message: "No se pudo actualizar el actuador",
      method: "POST",
      error: error,
    });
  }
};
