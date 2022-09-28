import express from 'express';
import { Sequelize } from 'sequelize';
import http from 'http';
import { SERVER_PORT } from '../../environments/server.environment';
import db from '../../config/connection';

export default class Server {
  private static _instance: Server;

  app: express.Application;
  port: number;

  private static _sequelize: Sequelize;

  private readonly httpServer: http.Server;

  constructor() {
    this.app = express();
    this.port = SERVER_PORT;

    this.httpServer = new http.Server(this.app);

    this.dbConnection();
  }

  public static get instance(): Server {
    return this._instance || (this._instance = new this());
  }

  public static get sequelize(): Sequelize {
    return this._sequelize || (this._sequelize = db);
  }

  start(callback: () => void): void {
    this.httpServer.listen(this.port, callback);
  }

  async dbConnection() {
    try {
      await Server.sequelize.authenticate();
      console.log('Base de datos esta en linea');
    }
    catch (e) {
      console.log('Error en la base de datos');
    }
  }

}
