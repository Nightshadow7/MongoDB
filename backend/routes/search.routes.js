import { Router } from "express";
import { search } from "../controllers/search.controllers.js";
const router = Router();

const pathSearch = `/search/`;

router.get(`${pathSearch}:coleccion/:criterio`, search);

export default router;
