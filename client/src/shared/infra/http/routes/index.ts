import { Router } from 'express';
import { createConnection } from 'typeorm';
import usersRouter from '../../../../modules/users/infra/http/routes/users.routes';

createConnection();
const routes = Router();

routes.use('/vehicles', usersRouter);

export default routes;
