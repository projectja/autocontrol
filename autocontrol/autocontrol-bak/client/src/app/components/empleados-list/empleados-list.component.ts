import { Component, OnInit, HostBinding } from '@angular/core';
import { AutocontrolService } from '../../services/autocontrol.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './empleados-list.component.html',
  styleUrls: ['./empleados-list.component.css']
})
export class EmpleadosListComponent implements OnInit {

  @HostBinding('class') classes = 'row'
  empleados: any = [];
  

  constructor(private autocontrolService: AutocontrolService) { }

  ngOnInit() {
    this.getEmpleados();
    
  }

  getEmpleados() {
    this.autocontrolService.getEmpleados().subscribe(
      res => {
        this.empleados = res;
      },
      err => console.error(err)
    );

  }

  deleteEmpleado ( id: string ) {
    this.autocontrolService.deleteEmpleado(id).subscribe(
      res => {
        console.log(res)      
      },
      err => console.log(err)
    )
  }



}
