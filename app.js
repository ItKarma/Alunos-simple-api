// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import { resolve } from 'path';
import homeRoutes from './src/routes/home';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import photoRoutes from './src/routes/photoRoutes';
import './src/database';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/alunos', alunoRoutes);
    this.app.use('/photo', photoRoutes);
  }
}

export default new App().app;
