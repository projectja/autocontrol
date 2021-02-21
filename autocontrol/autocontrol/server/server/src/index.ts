import express, { Application } from  'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import autocontrolRoutes from './routes/autocontrolRoutes';
import zonasRoutes from './routes/zonasRoutes';
import elementosZonaRoutes from './routes/elementosZonaRoutes';
import tareasRoutes from './routes/tareasRoutes';

class Server {
    app: Application;
    constructor(){
        this.app = express(); //inicializa epxress. Cuando se creabajo una instancia de app, el contstructor es lo primero que se ejecuta
        this.config(); // configura la app , este metodo no devuelve nada ---una vez configurado podré iniciar con START (abajo)
        this.routes();  // express cuando NO HAY rutas devuelve un mensaje CANNOT GET, para evitar eso hay que definir las rutas
        // lo que se se ha con router() es utilizar el enrutador

    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        //con morgan vemos en la consola peticiones post, get
        this.app.use(morgan('dev'));
        // con cors angular podra pedir datos a nuestro servidor:
        this.app.use(cors());
        // hará que podramos aceptar peticiones json y poder responder:
        this.app.use(express.json());
        // esto es en caso desde que queremos enviar datos desde formulario html
        this.app.use(express.urlencoded({extended: false}));   
    }

    routes(): void {
        this.app.use('/',indexRoutes);
        // SOLO se accederan a las rutas relacioandas con los juegos
        // cuando el usauriuo coloque /api/games. ESTO ES MUY IMPORTANTE,
        // cuando se coloca api/games, se ejecuta
        // lo relacioando con ese ruta
        console.log('en INDEX.TS de nodej , centro config rutas ');
        this.app.use('/api/empleados',autocontrolRoutes);
        this.app.use('/api/zonas',zonasRoutes);
        this.app.use('/api/elementosporzona',elementosZonaRoutes);
        // ojo con estas rutas de este .ts porque aqui se especifica
        // la raiz de todas las subrutas que apereceran en tareasRoutes
        // ejemplo, api/tareas es digamos la raiz de lo que puede
        // aparecer debajo despues como /api/tareas/editartarea....
        this.app.use('/api/tareas',tareasRoutes);

    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });

    }



}

const server = new Server();
server.start();

