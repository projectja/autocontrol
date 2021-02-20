import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AutocontrolFormComponent = class AutocontrolFormComponent {
    constructor(fb, autocontrolservice) {
        this.fb = fb;
        this.autocontrolservice = autocontrolservice;
        this.empleados = [];
        this.myDate = new Date();
        this.autocontrolForm = this.fb.group({
            id: 0,
            fecha: this.myDate.toISOString().slice(0, -1),
            id_empleado: 0,
            idzona: [''],
            id_elementozona: 0,
            tarea: [''],
        });
        this.crearFormulario();
    }
    ngOnInit() {
        this.getEmpleados();
    }
    crearFormulario() {
        this.forma = this.fb.group({
            // esta plantilla tiene que existir
            nombre: [''],
            apellidos: [''],
        });
    }
    guardar() {
        console.log(this.forma);
    }
    getEmpleados() {
        this.autocontrolservice.getEmpleados().subscribe(res => {
            this.empleados = res;
            console.log(this.empleados);
        }, err => console.error(err));
    }
};
AutocontrolFormComponent = __decorate([
    Component({
        selector: 'app-autocontrol-form',
        templateUrl: './autocontrol-form.component.html',
        styleUrls: ['./autocontrol-form.component.css']
    })
], AutocontrolFormComponent);
export { AutocontrolFormComponent };
//# sourceMappingURL=autocontrol-form.component_bak.js.map