import { Component, OnInit, ɵConsole,OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';
//import { AutocontrolService } from '../../services/autocontrol.service';
import { AutocontrolService } from '../../services/index';
import { Tareas } from '../../models/tareas';
import { GridOptions } from 'ag-grid-community';
import { Router } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ActivatedRoute} from '@angular/router';
import {Input} from '@angular/core'
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';




@Component({
  selector: 'app-editarea',
  templateUrl: './editarea.component.html',
  styleUrls: ['./editarea.component.css']
})
export class EditareaComponent implements OnInit {

  
  comp1Val: string;
  comp2Val: string;

  mensajecadena:any


  @Input() childMessage: string;
  message$: any;
  subscription: Subscription;

 
  forma: FormGroup;
  
  empleados: any = [];
  zonasTienda: any = [];
  elementosZona: any = [];
  tareaencurso: Tareas = new Tareas();
  tareasrealizadas: any = [];
  gridOptions: GridOptions;


   // Data table
   dataSource: any;
   displayedColumns: string[] = ['fecha', 'nombre', 'zona', 'parte', 'finalizada'];

  
// fin prueba para error

  constructor( private route:Router,private fb: FormBuilder,
              private activeroute:ActivatedRoute,
               private validadores: ValidadoresService, private autocontrolservice: AutocontrolService,
               private sharedService: AutocontrolService) { 
              
    

    //this.cargardataAlFormularioEdit();
    this.verMensaje(); 
    this.crearFormulario();
   
     
   
    // this.crearListeners();
 
  }

  ngAfterContentChecked() {
    this.comp1Val = this.sharedService.comp1Val;
  }

  tareaid:number    ;
  ngOnInit() {

    
    this.getEmpleados();
    this.cargarZonas();
    //this.cargarDataAlFormulario();
    // esta variacion con  respecto al crar la tarea
    // aqui tenemos que ser capaces de mostrar la tarea
    // que ya existía en el registro
    // this.cargarGrid();   
   
    console.log("el NOMBRE ANTES DE IMPRIMIR ES ", this.tareaid) 

  }

  crearFormulario() {
    this.forma = this.fb.group({
  //  this.forma = this.fb.group({
  
      fecha_tarea: 0,
      id_empleado     : 0,
      id_zona    : 0,
      id_elementozona: 0,
      nota: [''],
      finalizada: false
    }); 
    console.log (' crearFORMULARIO '+ this.mensajecadena.id)

  }

  crearListeners() {
   // this.forma.get('id_empleado').valueChanges.subscribe( console.log );
  }

  cargarDataAlFormulario() {

    this.forma.setValue({
    //this.forma.reset({
      id_empleado     : 0,
      fecha_tarea: '12/05/2020',
      id_zona    : 0,
      nota: [''],
      id_elementozona: 0,      
      finalizada: false
     
    });
        this.forma.valueChanges.subscribe(console.log);

  }

  cargardataAlFormularioEdit() {

    //this.forma.setValue({
    this.forma.reset({
      id_empleado     :0, 
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
        console.log(this.zonasTienda)
        
        
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

    verMensaje() {
       // take es un operador que hará que solo obtengamos el último valor
      // que tiene bulma$ almacenado. Si no lo usamos, cuando enviemos un mensaje
      // de cualquiera de los dos componentes, se mostrará automaticamente
      // en el que ya haya visto un mensaje anteriormente.
      this.autocontrolservice.bulma$.pipe(take(1)).
      subscribe(mensaje => this.mensajecadena = mensaje);

      console.log("mensajecadena ",this.mensajecadena)

    }
   

    }

    


  

 






