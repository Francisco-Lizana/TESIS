import { Router } from "express";
import { getRoles } from "../controllers/rol.controllers";

const router =  Router();

router.get('/rol/lista', getRoles);

export default router;