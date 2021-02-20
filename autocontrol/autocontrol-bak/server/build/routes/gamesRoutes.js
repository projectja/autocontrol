"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesControllers_1 = __importDefault(require("../controllers/gamesControllers"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // aqui definimos la ruta inicial:
        // utiliza la propiedad router con this.router que está vacio y se le va agregando un valor
        // cuando toma la ruta '/' y cuando visienten la ruta / se procesa indexcontroller.index
        this.router.get('/', gamesControllers_1.default.list);
        // solor obtener una rruta
        this.router.get('/:id', gamesControllers_1.default.getOne);
        // la ruta es la misma pero a traves del metodo POST:
        this.router.post('/', gamesControllers_1.default.create);
        this.router.delete('/:id', gamesControllers_1.default.delete);
        this.router.put('/:id', gamesControllers_1.default.update);
    }
}
const gamesRoutes = new GamesRoutes();
// se exporta solo el enrutador "router":
exports.default = gamesRoutes.router;
