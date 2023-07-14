import {Router} from 'express';
import {getAcciones, postAcciones , deleteAcciones, patchAcciones} from './../controllers/acciones.controller.js';

const router = Router();


router.get('/api/acciones', getAcciones);
router.post('/api/acciones', postAcciones);
router.delete('/api/acciones/:id',deleteAcciones);
router.patch('/api/acciones/:id', patchAcciones);


export default router;