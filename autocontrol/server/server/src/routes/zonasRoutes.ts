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
        this.router.get('/', autocontrolController.zonalist );
        // solor obtener una rruta
        this.router.get('/:id', autocontrolController.zonagetOne );
        // la ruta es la misma pero a traves del metodo POST:
        this.router.post('/', autocontrolController.zonacreate );
        this.router.delete('/:id', autocontrolController.zonadelete);
        this.router.put('/:id', autocontrolController.zonaupdate);
    }
}

const autocontrolRoutes = new AutocontrolRoutes();
// se exporta solo el enrutador "router":
export default autocontrolRoutes.router;






