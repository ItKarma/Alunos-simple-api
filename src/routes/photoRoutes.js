/* eslint-disable import/no-extraneous-dependencies */
import { Router } from 'express';
import photoController from '../controllers/photo.controller';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, photoController.store);

export default router;
