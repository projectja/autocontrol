import { __decorate } from "tslib";
import { Component, HostBinding } from '@angular/core';
import { Empleados } from '../../models/empleados';
let EmpleadoFormComponent = class EmpleadoFormComponent {
    constructor(autocontrolService, router, activedRoute) {
        this.autocontrolService = autocontrolService;
        this.router = router;
        this.activedRoute = activedRoute;
        this.classes = 'row';
        this.empleado = new Empleados();
        this.edit = false;
    }
    ngOnInit() {
        const params = this.activedRoute.snapshot.params;
        if (params.id) {
            this.autocontrolService.getEmpleado(params.id)
                .subscribe((res) => {
                console.log("NGONINIT ", res);
                console.log("RES ", res);
                //this.game = res;
                this.empleado = res;
                console.log("THIS.GAME ", this.empleado);
                this.edit = true;
            }, err => console.error(err));
        }
    }
    saveNewEmpleado() {
        // PAAA GUARDARLO LLAMAMOS AL METODO DEL SERVCVIICIO
        //delete this.game.created_at;
        //delete this.game.id;
        console.log('saveNEWgame');
        this.autocontrolService.saveEmpleado(this.empleado)
            .subscribe(res => {
            console.log("hola", res);
            this.router.navigate(['/empleados']);
        }, err => console.error("error", err));
    }
    updateEmpleado() {
        delete this.empleado.created_at;
        console.log(' en el update GAME QUE PASA ', this.empleado);
        this.autocontrolService.updateEmpleados(this.empleado.id, this.empleado)
            .subscribe(res => {
            console.log("guyas");
        }, err => console.error('dfdffd'));
    }
};
__decorate([
    HostBinding('class')
], EmpleadoFormComponent.prototype, "classes", void 0);
EmpleadoFormComponent = __decorate([
    Component({
        selector: 'app-empleado-form',
        templateUrl: './empleado-form.component.html',
        styleUrls: ['./empleado-form.component.css']
    })
], EmpleadoFormComponent);
export { EmpleadoFormComponent };
//# sourceMappingURL=empleado-form.component.js.map