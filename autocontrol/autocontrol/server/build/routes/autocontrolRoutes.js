"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autocontrolController_1 = __importDefault(require("../controllers/autocontrolController"));
class AutocontrolRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // aqui definimos la ruta inicial:
        console.log('en autocontrolroutes.ts ');
        // utiliza la propiedad router con this.router que está vacio y se le va agregando un valor
        // cuando toma la ruta '/' y cuando visienten la ruta / se procesa indexcontroller.index
        this.router.get('/', autocontrolController_1.default.list);
        // solor obtener una rruta
        this.router.get('/:id', autocontrolController_1.default.getOne);
        // la ruta es la misma pero a traves del metodo POST:
        this.router.post('/', autocontrolController_1.default.create);
        this.router.delete('/:id', autocontrolController_1.default.delete);
        this.router.put('/:id', autocontrolController_1.default.update);
    }
}
const autocontrolRoutes = new AutocontrolRoutes();
// se exporta solo el enrutador "router":
exports.default = autocontrolRoutes.router;
