import { Router } from 'express';
import { contactoController } from '../controllers/contactoController'

class ContactoRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        //Envia a controllers a ejecutar el metodo que llame
        this.router.get('/', contactoController.list);
        this.router.post('/', contactoController.prueba);
    }
}

const contactoRoutes = new ContactoRoutes();
export default contactoRoutes.router;