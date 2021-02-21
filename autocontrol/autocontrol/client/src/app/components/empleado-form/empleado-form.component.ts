import { Component, OnInit, HostBinding } from '@angular/core';
import { Empleados } from '../../models/empleados';
import { AutocontrolService } from 'src/app/services/autocontrol.service';
import {  Router  } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {

  @HostBinding('class') classes='row';

  empleado:Empleados = new Empleados();

  edit: boolean = false;

  constructor(private autocontrolService: AutocontrolService, private router : Router, private activedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.autocontrolService.getEmpleado(params.id)
        .subscribe(   (res:Empleados) => {
            console.log("NGONINIT ", res);
            console.log("RES ",res);                  
            //this.game = res;
            this.empleado = res;
            console.log("THIS.GAME ", this.empleado);
            this.edit = true;
          },
          err => console.error(err)
        )
    }    
  }

  saveNewEmpleado() {
    // PAAA GUARDARLO LLAMAMOS AL METODO DEL SERVCVIICIO
    //delete this.game.created_at;
    //delete this.game.id;
    console.log('saveNEWgame')
    this.autocontrolService.saveEmpleado(this.empleado)
      .subscribe(
        res => {console.log("hola",res);
          this.router.navigate(['/empleados'])
        },
        err => console.error("error", err)
      )
  }

  updateEmpleado() {
    delete this.empleado.created_at;
    console.log (' en el update GAME QUE PASA ' , this.empleado)
    this.autocontrolService.updateEmpleados(this.empleado.id, this.empleado)
    .subscribe(  
        res => { console.log("guyas");        
       }, err => console.error  ('dfdffd')
    )
            
    
       
      

  }

}
