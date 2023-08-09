import { Router } from "express";
import { search } from "../controllers/search.controllers.js";
const router = Router();

const pathSearch = `api/search/`;

router.get(`${pathSearch}`, search);

export default router;
