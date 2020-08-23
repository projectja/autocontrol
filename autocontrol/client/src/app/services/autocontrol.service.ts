import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { BehaviorSubject } from "rxjs";
import { take } from 'rxjs/operators';

// con esta interface importada, se puede enviar el envio del uego por saveGame
import { Empleados } from '../models/empleados';

// COMPARTIR DATOS ENTRE SIBILINGS
import { Observable, Subject } from 'rxjs';

// COMUNICACION ENTRE COMPONENTES
// https://stackblitz.com/edit/angular-6-communicating-between-components-1gunkw?file=app%2F_services%2Fmessage.service.ts
@Injectable()
//
export class AutocontrolService {

  API_URI = 'http://localhost:3000/api';

// COMUNICACION ENTRE COMPONENTES SIBILINGS
//private subject = new Subject<any>();
// https://stackblitz.com/edit/angular-shared-service?file=app%2Fcommon%2Fshared.service.ts

comp1Val: string;
_comp1ValueBS = new BehaviorSubject<string>('');


comp2Val: string;
_comp2ValueBS = new BehaviorSubject<string>('');


// Es una buena practica definirlo asi
// https://medium.com/angular-chile/comunicaci%C3%B3n-entre-componentes-explicado-con-dragon-ball-z-angular-7-parte-2-5403ec132718
bulma$ = this._comp1ValueBS.asObservable(); 



// END COMUNICACION ENTRE COMPONENTES SIBILINGS

  constructor( private http: HttpClient ) { 

    // comunicacion sibilings

    //this.comp1Val;
    //this.comp2Val;
   

    //this._comp1ValueBS.next(this.comp1Val);
    //this._comp2ValueBS.next(this.comp2Val);

  }
 


  getEmpleados() {
    // para no colocar directamente la direction se utiliza una propiedad API_URI
    return this.http.get(`${this.API_URI}/empleados`);

  }

  getZonas() {
    // para no colocar directamente la direction se utiliza una propiedad API_URI
    return this.http.get(`${this.API_URI}/zonas`);

  }

  getEmpleado(id:string) {
    return this.http.get(`${this.API_URI}/empleado/${id}`);
  }

  deleteEmpleado(id:string) {
    return this.http.delete(`${this.API_URI}/empleado/${id}`);
  }

  saveEmpleado(empleado: Empleados) {
    console.log("SAVE GAME " , empleado);   
    return this.http.post(`${this.API_URI}/empleado/`, empleado);

  }

  updateEmpleados (id: string|number, updatedEmpleado:Empleados ): Observable<any> {
     console.log("actualizado", updatedEmpleado)
       return this.http.put(`${this.API_URI}/empleado/${id}`,updatedEmpleado)
     
  }

  getElementosZonaPorzona(id:number) {
    return this.http.get(`${this.API_URI}/elementosporzona/${id}`);
  }

  saveTarea(tareas: any) {
    console.log("SAVE TAREA  " , tareas);
    
    return this.http.post(`${this.API_URI}/tareas`, tareas);

  }

  getElementosGrid(){
    return this.http.get(`${this.API_URI}/tareas`); 


  }

  editTarea(idtask: any){   
    console.log('tarea ',idtask)
    
    return this.http.get(`${this.API_URI}/tareas/editarea/${idtask}`);
      
  }

  
  updateComp1Val(val) {
    this.comp1Val = val;
    this._comp1ValueBS.next(this.comp1Val);
    this.bulma$.pipe(take(1))
 
  }
  
  // actualiza el valor cuando mandan una actualizacion desde el
  // componente autocontrol. lo que seria un cick en el grid
  // END


  updateComp2Val(val) {
    this.comp2Val = val;
    this._comp2ValueBS.next(this.comp2Val);
  }

  enviar(mensaje) {
    // function que llamará quien quiera transmitir un mensaje.
    console.log ( " this._comp1ValueBS.next(mensaje) ", mensaje)
    this._comp1ValueBS.next(mensaje);
    console.log ("despues del mensaje anterior ")
  }


 

 

}
