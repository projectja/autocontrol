import { Router } from 'express';
import autocontrolController from '../controllers/autocontrolController';



class AutocontrolRoutes {
    public router: Router = Router();
    constructor() {
        this.config();

    }

    config(): void {
         // aqui definimos la ruta inicial:
        // utiliza la propiedad router con this.router que está vacio y se le va agregando un valor
        // cuando toma la ruta '/' y cuando visienten la ruta / se procesa indexcontroller.index
        console.log('en elementoszonaroutes.ts ')
        this.router.get('/:id', autocontrolController.elementoszonaporzona );
        
        this.router.post('/', autocontrolController.tareacreate );
        // solor obtener una rruta
        //this.router.get('/:id', autocontrolController.elementoszonagetone );
        // la ruta es la misma pero a traves del metodo POST:
        //this.router.post('/', autocontrolController.elementoszonacreate );
        //this.router.delete('/:id', autocontrolController.elementoszonadelete);
        //this.router.put('/:id', autocontrolController.elementoszonaupdate);
    }
}

const autocontrolRoutes = new AutocontrolRoutes();
// se exporta solo el enrutador "router":
export default autocontrolRoutes.router;






