import {Router} from 'express';
import {getTipos, postTipos , deleteTipos, patchTipos} from './../controllers/tipoDinero.controller.js';

const router = Router();


router.get('/api/tipoDinero', getTipos);
router.post('/api/tipoDinero', postTipos);
router.delete('/api/tipoDinero/:id',deleteTipos);
router.patch('/api/tipoDinero/:id', patchTipos);


export default router;