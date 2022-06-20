import express, { NextFunction } from 'express';
import cors from 'cors';
import routes from './routes';
import 'reflect-metadata';
import AppError from '../../error/AppError';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', routes);
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  console.log(err);
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  } else if (err instanceof QueryFailedError) {
    return response.status(500).json({
      status: err.name,
      message: `Unexpected error: ${err.message}`,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});
app.listen(3333, () => {
  console.log('Servidor NODE está online!!');
});
