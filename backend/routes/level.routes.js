import express from "express";
const router = express.Router();
import { validateDocuments } from "../middlewares/validate.documents.js";
import {check} from 'express-validator';
import * as levelsControllers from './../controllers/level.controllers.js';



const levelPath = '/api/level/';

router.get(`${levelPath}`, levelsControllers.getLevel);
router.get(`${levelPath}:id`, levelsControllers.getOneLevel);
router.post(`${levelPath}` , levelsControllers.postLevel);
router.delete(`${levelPath}:id`, levelsControllers.deleteLevels);
router.patch(`${levelPath}:id`, levelsControllers.updateLevel);

export default router;