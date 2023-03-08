// server.ts
import express, { Express, Request, Response, NextFunction } from 'express';
import { ApiRouter } from './routes/api-routes';
 
const port = process.env.PORT || 3000;

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRouter = new ApiRouter;
app.use('', apiRouter.router)
 
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)}
);