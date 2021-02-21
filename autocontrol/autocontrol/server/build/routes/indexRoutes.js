"use strict";
// en este modulo vamos a craer un enrutador del servidor
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllers_1 = __importDefault(require("../controllers/indexControllers"));
class Indexroutes {
    constructor() {
        // se definie prpiedad router del tipo Router va almcenar un objeto que devuielve el metodo Router()
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // aqui definimos la ruta inicial:
        // utiliza la propiedad router con this.router que está vacio y se le va agregando un valor
        // cuando toma la ruta '/' y cuando visienten la ruta / se procesa indexcontroller.index
        this.router.get('/', indexControllers_1.default.index);
    }
}
const indexRoutes = new Indexroutes();
// se exporta solo el enrutador "router":
exports.default = indexRoutes.router;
