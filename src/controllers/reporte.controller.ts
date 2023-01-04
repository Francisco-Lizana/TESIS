import { Request, Response } from "express";
import { Medicion } from "../models/Medicion";
import { Op, Sequelize } from "sequelize";
import { Sensor } from "../models/Sensor";
import { Estacion } from "../models/Estacion";
import { Actuador } from "../models/Actuador";
var html_to_pdf = require("html-pdf-node");
let ejs = require("ejs");
let path = require("path");
const fs = require("fs");
var xl = require("excel4node");

export const reporteGeneralPDF = async (req: Request, res: Response) => {
  try {
/*     let inicio: string = "2022-12-07T00:00:00.000Z";
    let termino: string = "2022-12-14T23:59:00.000Z"; */
    
    const {inicio, termino,id_estacion}=req.body;
    //let id_estacion = 7;
    diferenciaDate(inicio, termino);

    let footer: string = "";
    let header: string = "";
    ejs.renderFile(
      path.join(__dirname, "../templates/", "footer.ejs"),
      {},
      (err: any, data: any) => {
        if (err) {
        } else {
          footer = data;
        }
      }
    );
    ejs.renderFile(
      path.join(__dirname, "../templates/", "header.ejs"),
      {},
      (err: any, data: any) => {
        if (err) {
        } else {
          header = data;
        }
      }
    );
    let options = {
      format: "A4",
      printBackground: true,
      margin: {
        top: "1.2cm",
        right: "1cm",
        bottom: "1.2cm",
        left: "1cm",
      },
      displayHeaderFooter: true,
      headerTemplate: header,
      footerTemplate: footer,
    };
    let estacion = await Estacion.findByPk(id_estacion, {
      include: [Sensor, Actuador],
    });
    
    let promedios: any = await Medicion.findAll({
      where: {
        fecha: {
          [Op.between]: [inicio, termino],
        },
      },
      attributes: {
        include: [
          [Sequelize.fn("avg", Sequelize.col("valor")), "promedio"],
          [Sequelize.fn("min", Sequelize.col("valor")), "minimo"],
          [Sequelize.fn("max", Sequelize.col("valor")), "maximo"],
          "id_sensor"
        ],
        exclude:["id_medicion", "valor", "fecha", "id_estacion"]
      },
      include:[Sensor],
      group: "id_sensor",
    });

    let sensores: any = [];
    for await (const iterator of parseObject(promedios)) {
      let medicionesAux: any = await Medicion.findAll({
        where: {
          fecha: { [Op.between]: [inicio, termino] },
          id_sensor: iterator.sensor.id_sensor,
        },
      });
      let medicionesRender: any[] = [];
      medicionesAux.forEach((item: any) => {
        var a: any = { fecha: item.fecha, valor: item.valor };
        medicionesRender.push(a);
      });
     
      sensores.push({ sensor: iterator.sensor, mediciones: medicionesRender });
    }
   

    let datosRender = {
      promedios: parseObject(promedios),
      inicio: inicio.substring(0, 10),
      termino: termino.substring(0, 10),
      estacion: estacion,
      datas: parseObject(sensores),
    };

    ejs.renderFile(
      path.join(__dirname, "../templates/", "index.ejs"),
      datosRender,
      (err: any, data: any) => {
        if (err) {
          res.send(data);
        } else {
          let file = { content: data };
          html_to_pdf.generatePdf(file, options).then((pdfBuffer: any) => {
            res.setHeader("Content-type", "application/pdf");
            res.send(pdfBuffer);
          });
        }
      }
    );
  } catch (error) {
    res.status(500).json({
      message: "Error al optener reporte",
      method: "GET",
      error: error,
    });
  }
};

export const reporteExcelEstacion = async (req: Request, res: Response) => {
  try {
    const {inicio, termino,id_estacion}=req.body;
    /* let id_estacion = 7; */

    let md = await Medicion.findAll({
      where: {
        fecha: {
          [Op.between]: [inicio, termino],
        },
        id_estacion: id_estacion,
      },
      include: [Sensor],
    });

    let mediciones = parseObject(md);
    var wb = new xl.Workbook();
    var ws = wb.addWorksheet("MEDICIONES");
    var style = wb.createStyle({
      font: {
        color: "#040404",
        size: 12,
      },
    });
    var greenS = wb.createStyle({
      font: {
        color: "#388813",
        size: 12,
        bold: true,
      },
      alignment: {
        wrapText: true,
        horizontal: "center",
      },
      fill: {
        type: "pattern",
        patternType: "solid",
        bgColor: "#FFFF00",
        fgColor: "#FFFF00",
      },
    });
    ws.cell(1, 1).string("ID SENSOR").style(greenS);
    ws.cell(1, 2).string("TIPO").style(greenS);
    ws.cell(1, 3).string("MODELO").style(greenS);
    ws.cell(1, 4).string("VALOR").style(greenS);
    ws.cell(1, 5).string("FECHA").style(greenS);
    ws.cell(1, 6).string("HORA").style(greenS);

    for (var i = 0; i < mediciones.length; i++) {
      ws.cell(i + 2, 1)
        .number(mediciones[i].sensor.id_sensor)
        .style(style);
      ws.cell(i + 2, 2)
        .string(mediciones[i].sensor.tipo)
        .style(style);
      ws.cell(i + 2, 3)
        .string(mediciones[i].sensor.modelo)
        .style(style);
      ws.cell(i + 2, 4)
        .number(mediciones[i].valor)
        .style(style);
      ws.cell(i + 2, 5)
        .date(new Date(mediciones[i].fecha))
        .style(style);
      ws.cell(i + 2, 6)
        .string(mediciones[i].fecha.substring(11, 16))
        .style(style);
    }
    ws.column(1).setWidth(10);
    ws.column(2).setWidth(30);
    ws.column(3).setWidth(10);
    ws.column(4).setWidth(10);
    ws.column(5).setWidth(10);

    ws.row(1).filter();

    wb.write(
      "RGE_[" +
        inicio.substring(0, 10) +
        "]-[" +
        termino.substring(0, 10) +
        "](" +
        new Date().toString().substring(0, 10) +
        ").xlsx",
      res
    );
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener el reporte de estaciones",
      method: "POST",
      error: error,
    });
  }
};

function parseObject(obj: Object) {
  return JSON.parse(JSON.stringify(obj));
}

function diferenciaDate(inicio: string, fin: string) {
  var inicioTime = new Date(inicio).getTime();
  var finTime = new Date(fin).getTime();
  var dif = (finTime - inicioTime) / (1000 * 60 * 60 * 24);
  //console.log("DIF::", Math.round(dif))
  return dif;
}
