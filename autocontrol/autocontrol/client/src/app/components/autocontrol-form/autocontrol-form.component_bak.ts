import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AutocontrolService } from '../../services/autocontrol.service';




@Component({
  selector: 'app-autocontrol-form',
  templateUrl: './autocontrol-form.component.html',
  styleUrls: ['./autocontrol-form.component.css']
})
export class AutocontrolFormComponent implements OnInit {

  forma: FormGroup;
  empleados: any = [];
  myDate = new Date();

  autocontrolForm = this.fb.group({
    id: 0,
    fecha: this.myDate.toISOString().slice(0, -1),
    id_empleado:0,
    idzona:[''],
    id_elementozona: 0,
    tarea:[''],



    

    
  })


  constructor( private fb: FormBuilder, private autocontrolservice: AutocontrolService) {
    this.crearFormulario();
    
   }

  ngOnInit() {
    this.getEmpleados();
  }  

  crearFormulario() {

    this.forma = this.fb.group({
      // esta plantilla tiene que existir
      nombre:[''],
      apellidos:[''],


    });

    }

  guardar () {
    console.log(this.forma );
  }

  getEmpleados(){
    this.autocontrolservice.getEmpleados().subscribe(
      res => {
        this.empleados = res;
        console.log(this.empleados  )
        
      },
      err => console.error(err)
    )


  }

   
  


}
