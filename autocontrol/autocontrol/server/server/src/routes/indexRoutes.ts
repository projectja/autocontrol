// en este modulo vamos a craer un enrutador del servidor

import { Router } from 'express';


import IndexControllers from '../controllers/indexControllers';
import indexController from '../controllers/indexControllers';


class Indexroutes {
    // se definie prpiedad router del tipo Router va almcenar un objeto que devuielve el metodo Router()
    public router: Router = Router();
    constructor() {
        this.config();      

    }
  
    config(): void {
        // aqui definimos la ruta inicial:
        // utiliza la propiedad router con this.router que está vacio y se le va agregando un valor
        // cuando toma la ruta '/' y cuando visienten la ruta / se procesa indexcontroller.index
        this.router.get('/', indexController.index);
    }


}

const indexRoutes = new Indexroutes();
// se exporta solo el enrutador "router":
export default indexRoutes.router;






