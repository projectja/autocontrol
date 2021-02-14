"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autocontrolController_1 = __importDefault(require("../controllers/autocontrolController"));
class TareasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // aqui definimos la ruta inicial:
        // utiliza la propiedad router con this.router que está vacio y se le va agregando un valor
        // cuando toma la ruta '/' y cuando visienten la ruta / se procesa indexcontroller.index
        this.router.post('/', autocontrolController_1.default.tareacreate);
        this.router.get('/', autocontrolController_1.default.tareaslista);
        this.router.put('/editarea/:id', autocontrolController_1.default.updateTarea);
        console.log(' antes !!!!  ');
        this.router.get('/editarea/:id', autocontrolController_1.default.editTarea);
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
exports.default = tareasautocontrolRoutes.router;
