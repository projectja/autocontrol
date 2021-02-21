import { Router } from 'express';
import autocontrolController from '../controllers/autocontrolController';



class AutocontrolRoutes {
    public router: Router = Router();
    constructor() {
        this.config();

    }

    config(): void {
         // aqui definimos la ruta inicial:
         console.log('en autocontrolroutes.ts ')
        // utiliza la propiedad router con this.router que está vacio y se le va agregando un valor
        // cuando toma la ruta '/' y cuando visienten la ruta / se procesa indexcontroller.index
        this.router.get('/', autocontrolController.list );
        // solor obtener una rruta
        this.router.get('/:id', autocontrolController.getOne );
        // la ruta es la misma pero a traves del metodo POST:
        this.router.post('/', autocontrolController.create );
        this.router.delete('/:id', autocontrolController.delete);
        this.router.put('/:id', autocontrolController.update);
        
    }
}

const autocontrolRoutes = new AutocontrolRoutes();
// se exporta solo el enrutador "router":
export default autocontrolRoutes.router;






