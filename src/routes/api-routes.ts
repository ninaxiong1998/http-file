// routes/api-routes.ts
import  express, { Router, Request, Response, NextFunction } from 'express';
import { ApiControllers } from '../controllers/api-controllers';

const apiControllers = new ApiControllers;

export class ApiRouter {
  router: Router;
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/', apiControllers.getHomePage);
    this.router.get('/file/:filename', apiControllers.getFilePage);
    this.router.post('/file/list', apiControllers.postFileListPage)
    this.router.put('/file', apiControllers.putFilePage)
    this.router.delete('/file/:filename', apiControllers.deleteFilePage)
    this.router.patch('/file/:oldFile/:newFile', apiControllers.patchFileNamePage)
  }
}