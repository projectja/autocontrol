import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Tareas } from '../../models/tareas';
let AutocontrolFormComponent = class AutocontrolFormComponent {
    //[
    //  { nombre: 'Toyota', zona: 'Celica', parte: 'xxx' , fianlizada: true },
    //    { nombre: 'Toyota', zona: 'Celica', parte: 'xxx' , fianlizada: true },
    //    { nombre: 'Toyota', zona: 'Celica', parte: 'xxx' , fianlizada: true },
    //    { nombre: 'Toyota', zona: 'Celica', parte: 'xxx' , fianlizada: true }
    // ];
    // fin prueba para error
    constructor(fb, validadores, autocontrolservice) {
        this.fb = fb;
        this.validadores = validadores;
        this.autocontrolservice = autocontrolservice;
        this.empleados = [];
        this.zonasTienda = [];
        this.elementosZona = [];
        this.tareaencurso = new Tareas();
        this.tareasrealizadas = [];
        this.rowData = [];
        this.crearFormulario();
        this.cargarDataAlFormulario();
        this.crearListeners();
        this.columnDefs = [
            { headerName: 'Fecha', field: 'fecha_tarea', sortable: true },
            { headerName: 'Nombre', field: 'nombre', sortable: true },
            { headerName: 'Zona', field: 'zona' },
            { headerName: 'Parte', field: 'parte' },
            { headerName: 'Finalizada', field: 'finalizada' },
            { headerName: 'nota', field: 'nota' }
        ];
    }
    ngOnInit() {
        this.getEmpleados();
        this.cargarZonas();
        this.cargarGrid();
    }
    /*
  
    get pasatiempos() {
      return this.forma.get('pasatiempos') as FormArray;
    }
  
    get nombreNoValido() {
      return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
    }
  
    get apellidoNoValido() {
      return this.forma.get('apellido').invalid && this.forma.get('apellido').touched
    }
  
    get correoNoValido() {
      return this.forma.get('correo').invalid && this.forma.get('correo').touched
    }
  
    get usuarioNoValido() {
      return this.forma.get('usuario').invalid && this.forma.get('usuario').touched
    }
  
    get distritoNoValido() {
      return this.forma.get('direccion.distrito').invalid && this.forma.get('direccion.distrito').touched
    }
  
    get ciudadNoValido() {
      return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched
    }
  
    get pass1NoValido() {
      return this.forma.get('pass1').invalid && this.forma.get('pass1').touched;
    }
  
    get pass2NoValido() {
      const pass1 = this.forma.get('pass1').value;
      const pass2 = this.forma.get('pass2').value;
  
      return ( pass1 === pass2 ) ? false : true;
    }
  */
    crearFormulario() {
        this.forma = this.fb.group({
            fecha_tarea: 9,
            id_empleado: 0,
            id_zona: 0,
            id_elementozona: 0,
            nota: [''],
            finalizada: false
            /* nombre  : ['', [ Validators.required, Validators.minLength(5) ]  ],
            apellido: ['', [Validators.required, this.validadores.noHerrera ] ],
            correo  : ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
            usuario : ['', , this.validadores.existeUsuario ], */
            /* pass1   : ['', Validators.required ],
            pass2   : ['', Validators.required ],
            direccion: this.fb.group({
              distrito: ['', Validators.required ],
              ciudad  : ['', Validators.required ],
            
            }),
            
            pasatiempos: this.fb.array([])
          },{
            validators: this.validadores.passwordsIguales('pass1','pass2') */
        });
    }
    crearListeners() {
        // this.forma.valueChanges.subscribe( valor => {
        //   console.log(valor);
        // });
        // this.forma.statusChanges.subscribe( status => console.log({ status }));
        this.forma.get('id_empleado').valueChanges.subscribe(console.log);
    }
    cargarDataAlFormulario() {
        // this.forma.setValue({
        this.forma.reset({
            id_empleado: 0,
            id_zona: 0,
            nota: [''],
            id_elementozona: 0,
            finalizada: false
        });
    }
    /*
    
      agregarPasatiempo() {
        this.pasatiempos.push(  this.fb.control('')  );
      }
      
      borrarPasatiempo(i: number) {
        this.pasatiempos.removeAt(i);
      }
    
    */
    guardar() {
        console.log("VALOR DE FORMA EN GUARDAR() ", this.forma);
        if (this.forma.invalid) {
            return Object.values(this.forma.controls).forEach(control => {
                if (control instanceof FormGroup) {
                    Object.values(control.controls).forEach(control => control.markAsTouched());
                }
                else {
                    control.markAsTouched();
                }
            });
        }
        this.tareaencurso = JSON.parse(JSON.stringify(this.forma.value));
        this.autocontrolservice.saveTarea(this.tareaencurso).subscribe(res => {
            //this.empleados = res;
            console.log("ESTSOS SON LOS EMPLEADOS: ", res);
            this.cargarGrid();
        }, err => console.error(err));
        // Posteo de información
        this.forma.reset({
            nombre: 'Sin nombre'
        });
    }
    getEmpleados() {
        this.autocontrolservice.getEmpleados().subscribe(res => {
            this.empleados = res;
            console.log(res);
        }, err => console.error(err));
    }
    cargarZonas() {
        this.autocontrolservice.getZonas().subscribe(res => {
            this.zonasTienda = res;
            console.log(this.zonasTienda);
        }, err => console.error(err));
    }
    cargarElementosZona(selectedValue) {
        const idZona = this.forma.get('id_zona').value;
        console.log('cargarELEMENTOSzonas variable idzona ', idZona);
        if (idZona != null) {
            this.autocontrolservice.getElementosZonaPorzona(idZona).subscribe(res => {
                this.elementosZona = res;
                console.log(this.elementosZona);
            }, err => console.error(err));
        }
    }
    // metodo creado para probar error
    filterChanged(selectedValue) {
        console.log('value is ', selectedValue);
    }
    cargarGrid() {
        this.autocontrolservice.getElementosGrid().subscribe(res => {
            this.tareasrealizadas = res;
            this.rowData = res;
            console.log("tareas ", this.tareasrealizadas);
        }, err => console.error("dea error", err));
    }
};
AutocontrolFormComponent = __decorate([
    Component({
        selector: 'app-autoncontrol-form',
        templateUrl: './autocontrol-form.component.html',
        styleUrls: ['./autocontrol-form.component.css']
    })
], AutocontrolFormComponent);
export { AutocontrolFormComponent };
//# sourceMappingURL=autocontrol-form.component.js.map