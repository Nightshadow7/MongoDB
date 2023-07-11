import express from "express";
import { obtenerCiclistas , agregarCiclista , borrarCiclista , actualizarCiclista} from "../controllers/ciclista.controllers.js";

const router = express.Router()

router.get("/all", obtenerCiclistas);
router.post("/add", agregarCiclista);
router.delete("/del/:id", borrarCiclista);
router.patch("/upd/:id", actualizarCiclista);


export default router;
