"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class AutocontrolController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empleados = yield database_1.default.query('SELECT * FROM empleados');
            const { id } = req.params;
            res.json(empleados);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // req.body tendrá los valroes....        
            const { id } = req.params;
            const empleados = yield database_1.default.query('SELECT * FROM games WHERE id = ?', [id]);
            if (empleados.length > 0) {
                return res.json(empleados[0]);
            }
            res.status(404).json({ text: 'the game does not exists "' });
            res.json({ text: 'Game Founded ' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // ESTE METODO SE CREA para atender a la repsuesta del archivo
            // indexRoute cuando el cliente llama desde el navegador a la ruta / pero a 
            // traves del metodo POST (ver archivo gameRoutes.ts)
            res.json({ text: ' creating a game ' });
            yield database_1.default.query('INSERT INTO games set ?', [req.body]);
        });
    }
    update(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
        res.json({ text: ' el jeugo fue actualizado ', id });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM games WHERE id = ?', [id]);
            res.json({ text: ' game deleted ' });
        });
    }
    // zonas
    zonalist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const zonas = yield database_1.default.query('SELECT * FROM zonastienda');
            console.log('estoy en AUTONCONTROLCONTRLLER zonalist ');
            const { id } = req.params;
            res.json(zonas);
        });
    }
    zonagetOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // req.body tendrá los valroes....        
            const { id } = req.params;
            const empleados = yield database_1.default.query('SELECT * FROM zonastienda WHERE id = ?', [id]);
            if (empleados.length > 0) {
                return res.json(empleados[0]);
            }
            res.status(404).json({ text: 'the zonas does not exists "' });
            res.json({ text: 'Game Founded ' });
        });
    }
    zonacreate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // ESTE METODO SE CREA para atender a la repsuesta del archivo
            // indexRoute cuando el cliente llama desde el navegador a la ruta / pero a 
            // traves del metodo POST (ver archivo gameRoutes.ts)
            res.json({ text: ' creating a zona ' });
            yield database_1.default.query('INSERT INTO zonastienda set ?', [req.body]);
        });
    }
    zonaupdate(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE zonastienda set ? WHERE id = ?', [req.body, id]);
        res.json({ text: ' el juego fue actualizado ', id });
    }
    zonadelete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM zonas WHERE id = ?', [id]);
            res.json({ text: ' zona deleted ' });
        });
    }
    elementoszonaporzona(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(' elementoszonaporzona funcion ,', req);
            const elementoszona = yield database_1.default.query('SELECT * FROM elementoszona WHERE id_zona = ?', [id]);
            res.json(elementoszona);
        });
    }
    tareacreate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // ESTE METODO SE CREA para atender a la repsuesta del archivo
            // indexRoute cuando el cliente llama desde el navegador a la ruta / pero a 
            // traves del metodo POST (ver archivo gameRoutes.ts)
            // console.log("requerement ", req);
            yield database_1.default.query('INSERT INTO tareas_limpiezaylotes set ?', [req.body]);
            res.json({ text: ' creating a una tarea ' });
        });
    }
    updateTarea(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // ESTE METODO SE CREA para atender a la repsuesta del archivo
            // indexRoute cuando el cliente llama desde el navegador a la ruta / pero a 
            // traves del metodo POST (ver archivo gameRoutes.ts)
            const { id } = req.params;
            database_1.default.query('UPDATE tareas_limpiezaylotes set ? WHERE id = ?', [req.body, id]);
            res.json({ text: ' tarea update ' });
        });
    }
    tareaslista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(' elementoszonaporzona funcion ,', req);
            const elementoszona = yield database_1.default.query('SELECT tareas.id, tareas.fecha_tarea,emp.nombre,zona.nombre as zona,elementos.description_obj as parte,tareas.finalizada, tareas.nota FROM tareas_limpiezaylotes tareas  LEFT JOIN  empleados emp ON tareas.id_empleado = emp.id LEFT JOIN zonastienda zona ON tareas.id_zona = zona.id   LEFT JOIN elementoszona elementos ON tareas.id_elementozona = elementos.id');
            res.json(elementoszona);
        });
    }
    editTarea(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(' Editar tarea funcion ,', req);
            const tarea = yield database_1.default.query('SELECT * FROM tareas_limpiezaylotes  WHERE id = ?', [id]);
            res.json(tarea);
        });
    }
}
const autocontrolController = new AutocontrolController();
exports.default = autocontrolController;
