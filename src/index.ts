import 'express-async-errors';
import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { UserRouter } from './features/user/user.router';
import { AuthRouter } from './features/auth/auth.router';
import { PermissionRouter } from './features/permission/permission.router';
import { RolRouter } from './features/rol/rol.router';
import { AuthMiddleware } from './common/middleware/auth.middleware';
import { ErrorHandlerMiddleware } from './common/middleware/error-handler.middleware';

const app = express();
const port = 3000;

/**
 * Middlewares
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

/**
 * Routes
 */
app.use('/api/auth', AuthRouter);
app.use('/api/users', AuthMiddleware, UserRouter);
app.use('/api/permissions', AuthMiddleware, PermissionRouter);
app.use('/api/rols', AuthMiddleware, RolRouter);

/**
 * Error Handler
 */
app.use(ErrorHandlerMiddleware);

/**
 * Start
 */
app.listen(port, () => {
  console.log(`running on http://localhost:${port}`);
});
