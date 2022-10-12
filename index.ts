import dotenv from 'dotenv';
dotenv.config();

import Server from './app/server/server';

import { userRoutes } from './app/routes/user.route';
import { rolRoutes } from './app/routes/rol.route';
import { genderRoute } from './app/routes/gender.route';
import { areaRoute } from './app/routes/area.route';
import { criterionRoute } from './app/routes/criterion.route';
import { authRoutes } from './app/routes/auth.route';
import { gradeRoute } from './app/routes/grade.route';
import { rolUserRoutes } from './app/routes/rol-user.route';

const server = Server.instance;

server.configRouter([
  { path: '/auth', router: authRoutes },
  { path: '/user', router: userRoutes },
  { path: '/rol', router: rolRoutes },
  { path: '/rol-user', router: rolUserRoutes },
  { path: '/gender', router: genderRoute },
  { path: '/area', router: areaRoute },
  { path: '/criterion', router: criterionRoute },
  { path: '/grade', router: gradeRoute },
])

server.start(() => {
  console.log(`Servidor corriendo en el puerto ${server.port}`);
});
