import {Router} from 'express';
import {getTraders, postTraders , deleteTraders, patchTraders} from'./../controllers/trader.controller.js';


const router = Router();


router.get('/api/trader', getTraders);
router.post('/api/trader', postTraders);
router.delete('/api/trader/:id',deleteTraders);
router.patch('/api/trader/:id', patchTraders);


export default router;