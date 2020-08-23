// updated e ngit 08-08 dev-branch
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';
import { AutocontrolService } from '../../services/autocontrol.service';
import { Tareas } from '../../models/tareas';
import { GridOptions } from 'ag-grid-community';
import { Router } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';



// COMPARTIR DATOS ENTRE SIBILINGS COMPONENT
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
// FIN CONMPATIR DATOS ENTRE SIBILINGS





@Component({
  selector: 'app-autoncontrol-form',
 
  //template: `<app-editarea [childMessage]="forma"></app-editarea>`,
  templateUrl: './autocontrol-form.component.html',
  styleUrls: ['./autocontrol-form.component.css']
})

export class AutocontrolFormComponent implements OnInit {
 
  


  forma: FormGroup;
  empleados: any = [];  
  zonasTienda: any = [];
  elementosZona: any = [];
  tareaencurso: Tareas = new Tareas();
  tareasrealizadas: any = [];
  gridOptions: GridOptions;
  comp1Val:string;


   // Data table
   dataSource: any;
   displayedColumns: string[] = ['fecha', 'nombre', 'zona', 'parte', 'finalizada'];


// fin prueba para error

  constructor( private route:Router,private fb: FormBuilder,
               private validadores: ValidadoresService,
                private autocontrolservice: AutocontrolService ,
                private sharedService: AutocontrolService
  ) { 

    this.sharedService.comp1Val = "Component 1 initial value";


  this.crearFormulario();
  this.cargarDataAlFormulario();
   
  this.crearListeners();


  }
  
  addValue(str) {
    this.sharedService.updateComp1Val(str);
  }

  ngOnInit() {
    this.getEmpleados();
    this.cargarZonas();
    this.cargarGrid();    
  }


  crearFormulario() {

    this.forma = this.fb.group({
      fecha_tarea: 9,
      id_empleado     : 0,
      id_zona    : 0,
      id_elementozona: 0,
      nota: [''],
      finalizada: false
    }); 

  }


  crearListeners() {
    this.forma.get('id_empleado').valueChanges.subscribe( console.log );
  }

  cargarDataAlFormulario() {

    //this.forma.setValue({
    this.forma.reset({
      id_empleado     : 0, 
      id_zona    : 0,
      nota: [''],
      id_elementozona: 0,      
      finalizada: false
    });

  }

  cargardataAlFormularioEdit() {

    //this.forma.setValue({
    this.forma.reset({
      id_empleado     : 2, 
      id_zona    : 0,
      nota: [''],
      id_elementozona: 0,      
      finalizada: false
    });

  }

  guardar() {
    console.log(  "VALOR DE FORMA EN GUARDAR() " ,this.forma );                                                                                                                                         
         
    if ( this.forma.invalid ) {


      return Object.values( this.forma.controls ).forEach( control => {
        
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
        
        
      })
         
    }
    this.tareaencurso = JSON.parse(JSON.stringify(this.forma.value))
   
    this.autocontrolservice.saveTarea(this.tareaencurso).subscribe(
      res => {
        //this.empleados = res;
        console.log("ESTSOS SON LOS EMPLEADOS: ", res )
        this.cargarGrid();
        
      },

      err => console.error(err)
  )

    // Posteo de información
    this.forma.reset({
      nombre: 'Sin nombre'
    });

  }

  getEmpleados(){
    this.autocontrolservice.getEmpleados().subscribe(
      res => {
        this.empleados = res;
        console.log(res)
        
      },

      err => console.error(err)
  )}

  cargarZonas(){
    this.autocontrolservice.getZonas().subscribe(
      res => {
        this.zonasTienda = res;
        console.log(this.zonasTienda  )
        
        
      },
      err => console.error(err)
  )}

  cargarElementosZona(selectedValue: number){
    const idZona = this.forma.get('id_zona').value
    console.log('cargarELEMENTOSzonas variable idzona ',idZona)
    if (idZona != null) {    
      this.autocontrolservice.getElementosZonaPorzona(idZona).subscribe(
        res => {
          this.elementosZona = res;
          console.log(this.elementosZona )
        },
        err => console.error(err)           
      )}
  }
 
  // metodo creado para probar error
  filterChanged(selectedValue:string){
    console.log('value is ',selectedValue);
 
  }

  cargarGrid(){
    this.autocontrolservice.getElementosGrid().subscribe(
      res => {
        this.tareasrealizadas = res;
       
        console.log("tareas ", this.tareasrealizadas )

        this.dataSource = res
      },
      err => console.error("dea error", err)           
    )}




  // Row clicked JESUS
  onRowClicked(row: any, event: MouseEvent): void {
    
     // function que llamará quien quiera transmitir un mensaje.
    this.autocontrolservice.enviar(row);
   // this.addValue(this.sharedService.comp1Val)
      this.autocontrolservice.editTarea(row.id).subscribe(
        res => {
          this.tareasrealizadas = res;
         
          console.log("tareas ", this.tareasrealizadas )
  
          this.dataSource = res
        },
        err => console.error("dea error", err)           
      )

      console.log("dddddd",row)   
      

        const idZona = this.forma.get('id_zona').value
        console.log('cargarELEMENTOSzonas variable idzona ',idZona)
        
       this.route.navigate(['tareas/editarea/'+row.id]);
        
  }
  //
  // traspaso de mensajes SIBILINGS COMPONENTS  
  sendMessage(): void {
      // send message to subscribers via observable subject
    
  }

  // END MESSAJES ENTRE SIBILINGS COMPONENTES
  


}

    


  

 






