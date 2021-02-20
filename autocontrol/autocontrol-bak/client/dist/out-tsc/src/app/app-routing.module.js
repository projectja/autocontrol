import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmpleadosListComponent } from './components/empleados-list/empleados-list.component';
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component';
import { AutocontrolFormComponent } from './components/autocontrol-form/autocontrol-form.component';
const routes = [
    {
        // como está redireccionando a otro sitio hay que añadir pathMatch y full
        path: '',
        redirectTo: 'games', pathMatch: 'full'
    },
    {
        // cuando viiste la ruta /games se randeriza el componente gamelistcomponents
        path: 'games', component: EmpleadosListComponent
    },
    {
        path: 'games/add', component: EmpleadoFormComponent
    },
    {
        path: 'games/edit/:id', component: EmpleadoFormComponent
    },
    {
        path: 'autocontrol', component: AutocontrolFormComponent
    },
    {
        path: 'elementoszona', component: AutocontrolFormComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map