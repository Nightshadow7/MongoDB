import { Router } from "express";
import { check } from "express-validator";
import { validateDocuments } from "../middlewares/validate.documents.js";
import { uploadFile } from "../controllers/upload.controllers.js";
const router= Router();

const pathUpload = `/search/`;

router.post(`${pathUpload}`, uploadFile);

export default router;
