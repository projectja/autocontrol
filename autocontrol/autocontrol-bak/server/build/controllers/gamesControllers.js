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
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT * FROM games');
            const { id } = req.params;
            res.json(games);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // req.body tendrá los valroes....        
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM games WHERE id = ?', [id]);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: 'the game does not exists "' });
            console.log(games);
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
}
const gamesController = new GamesController();
exports.default = gamesController;
