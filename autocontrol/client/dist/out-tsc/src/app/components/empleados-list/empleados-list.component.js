import { __decorate } from "tslib";
import { Component, HostBinding } from '@angular/core';
let EmpleadosListComponent = class EmpleadosListComponent {
    constructor(autocontrolService) {
        this.autocontrolService = autocontrolService;
        this.classes = 'row';
        this.empleados = [];
    }
    ngOnInit() {
        this.getEmpleados();
    }
    getEmpleados() {
        this.autocontrolService.getEmpleados().subscribe(res => {
            this.empleados = res;
        }, err => console.error(err));
    }
    deleteEmpleado(id) {
        this.autocontrolService.deleteEmpleado(id).subscribe(res => {
            console.log(res);
        }, err => console.log(err));
    }
};
__decorate([
    HostBinding('class')
], EmpleadosListComponent.prototype, "classes", void 0);
EmpleadosListComponent = __decorate([
    Component({
        selector: 'app-game-list',
        templateUrl: './empleados-list.component.html',
        styleUrls: ['./empleados-list.component.css']
    })
], EmpleadosListComponent);
export { EmpleadosListComponent };
//# sourceMappingURL=empleados-list.component.js.map