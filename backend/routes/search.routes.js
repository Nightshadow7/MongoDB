import { Router } from "express";
import { search } from "../controllers/search.controllers.js";
const router = Router();

const pathSearch = `/search/`;

router.get(`${pathSearch}`, search);

export default router;
