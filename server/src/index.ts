import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import contactoRoutes from './routes/contactoRoutes';

class Server{
   
   public app: Application;

   constructor() {
       this.app = express();
       this.config();
       this.routes();
   }

   config(): void {
      this.app.set('port',process.env.PORT || 3000);
      this.app.use(morgan('dev'));
      this.app.use(cors());
      this.app.use(express.json());
      this.app.use(express.urlencoded({extended: false}));
   }

   routes(): void {
      //El usuario entra a url y lo manda a su route correspondiente 
      this.app.use('/get',indexRoutes);
      this.app.use('/send-email', contactoRoutes);
   }

   start(): void {
       this.app.listen(this.app.get('port'), () =>{
           console.log('Server on port ', this.app.get('port'));
       });
   }
}

const server = new Server();
server.start();