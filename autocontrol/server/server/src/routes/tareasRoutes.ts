import { Router } from 'express';
import autocontrolController from '../controllers/autocontrolController';



class TareasRoutes {
    public router: Router = Router();
    constructor() {
        this.config();

    }

    config(): void {
         // aqui definimos la ruta inicial:
        // utiliza la propiedad router con this.router que está vacio y se le va agregando un valor
        // cuando toma la ruta '/' y cuando visienten la ruta / se procesa indexcontroller.index
    
        
        this.router.post('/', autocontrolController.tareacreate );
        this.router.get('/', autocontrolController.tareaslista );
        this.router.put('/editarea/:id', autocontrolController.updateTarea);
        console.log (' antes !!!!  ')
        this.router.get('/editarea/:id', autocontrolController.editTarea ); 
        // solor obtener una rruta
        //this.router.get('/:id', autocontrolController.elementoszonagetone );
        // la ruta es la misma pero a traves del metodo POST:
        //this.router.post('/', autocontrolController.elementoszonacreate );
        //this.router.delete('/:id', autocontrolController.elementoszonadelete);
        // this.router.post('tareas/:id', autocontrolController.elementoszonaupdate);
    }
}

const tareasautocontrolRoutes = new TareasRoutes();
// se exporta solo el enrutador "router":
export default tareasautocontrolRoutes.router;






