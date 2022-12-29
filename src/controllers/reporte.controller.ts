import { Request, Response } from "express";
import { Medicion } from "../models/Medicion";
var html_to_pdf = require('html-pdf-node');
let ejs = require("ejs");
let path = require("path");
const fs = require('fs');

export const reporte = async (req: Request, res: Response) => {
  try {
    
    let options = { format: "A4" };
    ejs.renderFile(path.join(__dirname, '../templates/', "index.ejs"), {students: []}, (err:any, data:any) => {
        
        if (err) {
              res.send(err);
        } else {
          let file = { content: data };
          html_to_pdf.generatePdf(file, options).then((pdfBuffer:any) => {
            console.log("PDF Buffer:-", pdfBuffer);
            res.setHeader('Content-type', 'application/pdf')  
            res.send(pdfBuffer)
          });
        }
       });
      
    
  } catch (error) {
    res.status(500).json({
      message: "Error al optener reporte",
      method: "GET",
      error: error,
    });
  }
};


