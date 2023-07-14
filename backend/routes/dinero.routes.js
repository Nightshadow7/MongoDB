import {Router} from 'express';
import {getDineros, postDineros , deleteDineros, patchDineros} from './../controllers/dinero.controller.js';


const router = Router();


router.get('/api/dinero', getDineros);
router.post('/api/dinero', postDineros);
router.delete('/api/dinero/:id',deleteDineros);
router.patch('/api/dinero/:id', patchDineros);


export default router;