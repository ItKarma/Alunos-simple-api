import { Router } from 'express';
import homeController from '../controllers/home.controller';

const router = new Router();

router.get('/', homeController.index);

export default router;
