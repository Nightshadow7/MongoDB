import express from "express";
const router = express.Router();
import { validateDocuments } from "./../../middlewares/validate.documents.js";
import { check } from 'express-validator';
import { login } from './../controllers/auth.controllers.js';

const authPath = '/auth/login';

router.get(`${authPath}`);
router.get(`${authPath}:id`);
router.post(`${authPath}`, login);
router.patch(`${authPath}:id`);

export default router;