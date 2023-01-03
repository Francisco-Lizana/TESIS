import { Router } from "express";
import { reporteExcelEstacion, reporteGeneralPDF } from "../controllers/reporte.controller";
const router =  Router();

router.post('/reporte/general/pdf/', reporteGeneralPDF);
router.post('/reporte/estacion/excel/', reporteExcelEstacion);


export default router;