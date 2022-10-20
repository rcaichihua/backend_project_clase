import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Sequelize } from 'sequelize';
import { SERVER_PORT } from '../../environments/server.environment';
import db from '../../config/connection';
import { Route } from '../interfaces/route.interface';
export default class Server {
  private static _instance: Server;

  app: express.Application;
  port: number;

  private static _sequelize: Sequelize;

  constructor() {
    this.app = express();
    this.port = SERVER_PORT;

    this.dbConnection();
    this.configMiddlewares();
  }

  public static get instance(): Server {
    return this._instance || (this._instance = new this());
  }

  public static get sequelize(): Sequelize {
    return this._sequelize || (this._sequelize = db);
  }

  public configMiddlewares() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(cors({ origin: true, credentials: true }));
    this.app.get('/', (req, res) => {
      res.status(200).json({
        status: 'OK',
        msg: 'APIs operativas',
      });
    });
  }

  public configRouter(routes: Route[]) {
    routes.forEach((route) => {
      this.app.use(route.path, route.router);
    });
  }

  start(callback: () => void): void {
    this.app.listen(this.port, callback);
  }

  async dbConnection() {
    try {
      await Server.sequelize.authenticate();
      console.log('Base de datos esta en linea');
    } catch (e) {
      console.log('Error en la base de datos');
    }
  }
}
