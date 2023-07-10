import express from "express";
import { obtenerCiclistas } from "../controllers/ciclista.controllers.js";

const router = express.Router()

router.get("/all", obtenerCiclistas);


export default router;
