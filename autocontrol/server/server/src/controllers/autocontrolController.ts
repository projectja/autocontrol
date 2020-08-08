import {Request, Response} from 'express';

import pool from '../database';

class AutocontrolController {

    public async list (req: Request, res: Response) {
        const empleados  = await pool.query('SELECT * FROM empleados');
        const { id } = req.params;
        res.json(empleados);
    }

    public async getOne(req: Request, res: Response): Promise<any>{
        // req.body tendrá los valroes....        
        const { id } = req.params;
        const empleados  = await pool.query('SELECT * FROM games WHERE id = ?',[id] );
        if (empleados.length > 0){
            return res.json(empleados[0]);            
        }
        res.status(404).json({text: 'the game does not exists "'});
          res.json({text: 'Game Founded '})

    }

    public async create(req: Request, res: Response): Promise<void>{
        // ESTE METODO SE CREA para atender a la repsuesta del archivo
        // indexRoute cuando el cliente llama desde el navegador a la ruta / pero a 
        // traves del metodo POST (ver archivo gameRoutes.ts)
        res.json({text: ' creating a game '})
        await pool.query('INSERT INTO games set ?',[req.body]);   
    }

    public update (req: Request, res: Response) {
        const { id } = req.params;
        pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
            
        res.json({text:' el jeugo fue actualizado ', id   });
    }

    public async delete (req: Request, res: Response):Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id]);
        res.json({text:' game deleted '});
       
    }


// zonas

public async zonalist (req: Request, res: Response) {
    const zonas  = await pool.query('SELECT * FROM zonastienda');
    console.log('estoy en AUTONCONTROLCONTRLLER zonalist ')
    const { id } = req.params;
    res.json(zonas);

}

public async zonagetOne(req: Request, res: Response): Promise<any>{
    // req.body tendrá los valroes....        
    const { id } = req.params;
    const empleados  = await pool.query('SELECT * FROM zonastienda WHERE id = ?',[id] );
    if (empleados.length > 0){
        return res.json(empleados[0]);            
    }
    res.status(404).json({text: 'the zonas does not exists "'});
      res.json({text: 'Game Founded '})

}

public async zonacreate(req: Request, res: Response): Promise<void>{
    // ESTE METODO SE CREA para atender a la repsuesta del archivo
    // indexRoute cuando el cliente llama desde el navegador a la ruta / pero a 
    // traves del metodo POST (ver archivo gameRoutes.ts)
    res.json({text: ' creating a zona '})
    await pool.query('INSERT INTO zonastienda set ?',[req.body]);   
}

public zonaupdate (req: Request, res: Response) {
    const { id } = req.params;
    pool.query('UPDATE zonastienda set ? WHERE id = ?', [req.body, id]);
        
    res.json({text:' el juego fue actualizado ', id   });
}

public async zonadelete (req: Request, res: Response):Promise<void>{
    const { id } = req.params;
    await pool.query('DELETE FROM zonas WHERE id = ?', [id]);
    res.json({text:' zona deleted '});
   
}

public async elementoszonaporzona (req: Request, res: Response) {
    const { id } = req.params;
    console.log(' elementoszonaporzona funcion ,', req)
    const elementoszona  = await pool.query('SELECT * FROM elementoszona WHERE id_zona = ?', [id]);    
    res.json(elementoszona);
}

public async tareacreate(req: Request, res: Response): Promise<void>{
    // ESTE METODO SE CREA para atender a la repsuesta del archivo
    // indexRoute cuando el cliente llama desde el navegador a la ruta / pero a 
    // traves del metodo POST (ver archivo gameRoutes.ts)
   
   // console.log("requerement ", req);
    await pool.query('INSERT INTO tareas_limpiezaylotes set ?',[req.body]);   
    res.json({text: ' creating a una tarea '})
}


public async tareaslista (req: Request, res: Response) {
    const { id } = req.params;
    console.log(' elementoszonaporzona funcion ,', req)
    const elementoszona  = await pool.query ('SELECT tareas.id, tareas.fecha_tarea,emp.nombre,zona.nombre as zona,elementos.description_obj as parte,tareas.finalizada, tareas.nota FROM tareas_limpiezaylotes tareas  LEFT JOIN  empleados emp ON tareas.id_empleado = emp.id LEFT JOIN zonastienda zona ON tareas.id_zona = zona.id   LEFT JOIN elementoszona elementos ON tareas.id_elementozona = elementos.id');    
    res.json(elementoszona);
}

public async editTarea (req: Request, res: Response) {
    const { id } = req.params;
    console.log(' Editar tarea funcion ,', req)
    const tarea  = await pool.query('SELECT * FROM tareas_limpiezaylotes  WHERE id = ?', [id]);    
    res.json(tarea);
}



}

const  autocontrolController = new AutocontrolController();
export default autocontrolController;
