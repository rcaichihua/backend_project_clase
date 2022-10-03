import dotenv from 'dotenv';
dotenv.config();

import Server from './app/server/server';

import { userRoutes } from './app/routes/user.route';
import { rolRoutes } from './app/routes/rol.route';
import { genderRoute } from './app/routes/gender.route';

const server = Server.instance;

server.configRouter([
  { path: '/user', router: userRoutes },
  { path: '/rol', router: rolRoutes },
  { path: '/gender', router: genderRoute },
])

server.start(() => {
  console.log(`Servidor corriendo en el puerto ${server.port}`);
});
