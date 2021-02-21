"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const autocontrolRoutes_1 = __importDefault(require("./routes/autocontrolRoutes"));
const zonasRoutes_1 = __importDefault(require("./routes/zonasRoutes"));
const elementosZonaRoutes_1 = __importDefault(require("./routes/elementosZonaRoutes"));
const tareasRoutes_1 = __importDefault(require("./routes/tareasRoutes"));
class Server {
    constructor() {
        this.app = express_1.default(); //inicializa epxress. Cuando se creabajo una instancia de app, el contstructor es lo primero que se ejecuta
        this.config(); // configura la app , este metodo no devuelve nada ---una vez configurado podré iniciar con START (abajo)
        this.routes(); // express cuando NO HAY rutas devuelve un mensaje CANNOT GET, para evitar eso hay que definir las rutas
        // lo que se se ha con router() es utilizar el enrutador
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        //con morgan vemos en la consola peticiones post, get
        this.app.use(morgan_1.default('dev'));
        // con cors angular podra pedir datos a nuestro servidor:
        this.app.use(cors_1.default());
        // hará que podramos aceptar peticiones json y poder responder:
        this.app.use(express_1.default.json());
        // esto es en caso desde que queremos enviar datos desde formulario html
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        // SOLO se accederan a las rutas relacioandas con los juegos
        // cuando el usauriuo coloque /api/games. ESTO ES MUY IMPORTANTE,
        // cuando se coloca api/games, se ejecuta
        // lo relacioando con ese ruta
        console.log('en INDEX.TS de nodej , centro config rutas ');
        this.app.use('/api/empleados', autocontrolRoutes_1.default);
        this.app.use('/api/zonas', zonasRoutes_1.default);
        this.app.use('/api/elementosporzona', elementosZonaRoutes_1.default);
        // ojo con estas rutas de este .ts porque aqui se especifica
        // la raiz de todas las subrutas que apereceran en tareasRoutes
        // ejemplo, api/tareas es digamos la raiz de lo que puede
        // aparecer debajo despues como /api/tareas/editartarea....
        this.app.use('/api/tareas', tareasRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
