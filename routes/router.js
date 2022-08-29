import {json, Router} from 'express'
import { carroDelete, carroIndex, carroShow, carroStore, carroUptade } from '../controllers/CarroController.js'
const router = Router()
router.use(json())

router.get('/carros', carroIndex)
      .get('/carros/:id', carroShow)
      .post('/carros', carroStore)
      .put('/carros/:id', carroUptade)
      .delete('/carros/:id', carroDelete)

export default router