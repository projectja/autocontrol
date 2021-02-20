import { Component, OnInit, ɵConsole,OnDestroy, AfterViewInit } from '@angular/core';
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

 // empleado:any
  tarea:any


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
  tareaid:number;
  router:  Router


   // Data table
   dataSource: any;
   displayedColumns: string[] = ['fecha', 'nombre', 'zona', 'parte', 'finalizada'];

  
// fin prueba para error

  constructor( private route:Router,private fb: FormBuilder,
              private activeroute:ActivatedRoute,
               private validadores: ValidadoresService, private autocontrolservice: AutocontrolService,
               private sharedService: AutocontrolService) { 

    this.verMensaje(); 
    this.crearFormulario();
 
  }

  ngOnInit() {

    this.getEmpleados();
    this.cargarZonas();
    
    //JESUS
    this.forma.get("fecha_tarea").setValue(this.tarea.fecha_tarea)

    this.forma.get("finalizada").setValue(this.tarea.finalizada)
   
    console.log("el NOMBRE ANTES DE IMPRIMIR ES ", this.tareaid) 

  }

  verMensaje() {
    // take es un operador que hará que solo obtengamos el último valor
    // que tiene bulma$ almacenado. Si no lo usamos, cuando enviemos un mensaje
    // de cualquiera de los dos componentes, se mostrará automaticamente
    // en el que ya haya visto un mensaje anteriormente.
    this.autocontrolservice.bulma$.pipe(take(1)).
    subscribe(mensaje => {
     this.tarea = mensaje
    });

    console.log("tareassss selecionada ",this.tarea)
  }

  ngAfterContentChecked() {
    this.comp1Val = this.sharedService.comp1Val;
  }

  crearFormulario() {
    this.forma = this.fb.group({
  
      fecha_tarea: 0,
      id_empleado     : 0,
      id_zona    : 0,
      id_elementozona: 0,
      nota: [''],
      finalizada: false
    }); 
    console.log (' crearFORMULARIO '+ this.tarea.id)

  }



  guardar() {
    console.log(  "VALOR DE FORMA EN GUARDAR() " ,this.forma );                                                                                                                                         
     

    this.tareaencurso = JSON.parse(JSON.stringify(this.forma.value))
   
    this.autocontrolservice.saveTarea(this.tarea.id, this.tareaencurso).subscribe(
      res => {
        //this.empleados = res;
        console.log("ESTSOS SON LOS EMPLEADOS: ", res )
        this.cargarGrid();
        
      },
      err => console.error(err)
      
    )
    this.route.navigate(['/autocontrol']);
    

    // Posteo de información
    this.forma.reset({
      nombre: 'Sin nombre'
    });

  }


  save_tarea_modificada() {
    console.log(  "VALOR DE FORMA EN GUARDAR() " ,this.forma );                                                                                                                                         
     
    this.tareaencurso = JSON.parse(JSON.stringify(this.forma.value))
   
    this.autocontrolservice.saveTarea(this.tarea.id, this.tareaencurso).subscribe(
      res => {
        //this.empleados = res;
        console.log("ESTSOS SON LOS EMPLEADOS: ", res )
        this.cargarGrid();
        
      },

      err => console.error("ddddw",err));
      this.route.navigate(['/autocontrol']);

  

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
        console.log("en get empleados ",this.empleados.nombre)

        this.setEmpleado();
        
      },

      err => console.error(err)
  )}

  setEmpleado() {
    const empleadoSeleccionado = this.empleados.find(empleado => 
     this.tarea.nombre == empleado.nombre
    )

    this.forma.get('id_empleado').setValue(empleadoSeleccionado.id)
  }

  cargarZonas(){
    this.autocontrolservice.getZonas().subscribe(
      res => {
        this.zonasTienda = res;
        console.log(this.zonasTienda)
        
        this.setZona();
        
        
      },
      err => console.error(err)
  )}

  setZona() {
    const zonaSeleccionada = this.zonasTienda.find(zona => 
      zona.nombre == this.tarea.zona // zonaSeleccionada
    )
    // si es nulo, da error porque intenta montar la zona de un nulo alfonso 14-02-21
    if (zonaSeleccionada != null) { 
      this.forma.get('id_zona').setValue(zonaSeleccionada.id)
      this.cargarElementosZona(zonaSeleccionada.id)
    }
  }

  cargarElementosZona(idZona: any){
    console.log('cargarELEMENTOSzonas variable idzona ',idZona)
    if (idZona != null) {    
      this.autocontrolservice.getElementosZonaPorzona(parseInt(idZona)).subscribe(
        res => {
          this.elementosZona = res;
          console.log(this.elementosZona )

          this.setElementoZona();
        },
        err => console.error(err)           
      )}
  }

  setElementoZona() {
    const elementoSeleccionado = this.elementosZona.find(elemento => 
      elemento.description_obj == this.tarea.parte // zonaSeleccionada //se suele utilizar el mismo descriptor description_obj deberia ser x convencion = parte
    )
    if (elementoSeleccionado != null) {
      this.forma.get('id_elementozona').setValue(elementoSeleccionado.id)
    }
    

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

    
    )
  }

    // Row clicked JESUS

    }

    


  

 






