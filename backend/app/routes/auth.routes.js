import { Router } from "express";
import * as authsControllers from "../controllers/auth.controllers.js";
import {authMiddleware} from "./../../middlewares/auth.validation.js";
const router = Router();

router.post(`/user`, [ authMiddleware ] , authsControllers.loginUser);
router.post(`/admin`, [ authMiddleware ] , authsControllers.loginAdmin);
export default router;