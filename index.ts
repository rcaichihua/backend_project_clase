import Server from './app/server/server';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.instance;

server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

server.app.use(cors({ origin: true, credentials: true }));

server.app.get('/', (req, res) => {
  res.status(200).json({
    status: 'OK',
    msg: 'APIs operativas'
  });
});

server.start(() => {
  console.log(`Servidor corriendo en el puerto ${server.port}`);
});
