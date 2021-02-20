import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosListComponent } from './components/empleados-list/empleados-list.component';
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component';
import { AutocontrolFormComponent } from './components/autocontrol-form/autocontrol-form.component';
import { EditareaComponent } from './components/editarea/editarea.component';



const routes: Routes = [
  {
    // como está redireccionando a otro sitio hay que añadir pathMatch y full
    path:'',
    redirectTo: 'games', pathMatch: 'full'
  },
  {
    // cuando viiste la ruta /games se randeriza el componente gamelistcomponents
    path: 'games',  component: EmpleadosListComponent
  },
  {
    path: 'games/add', component: EmpleadoFormComponent

  },
  {
    path: 'tareas/editarea/:id', component: EditareaComponent

  },
  {

    path: 'games/edit/:id', component: EmpleadoFormComponent

  },
  {
    path: 'autocontrol', component: AutocontrolFormComponent

  },
  {
    path: 'elementoszona', component: AutocontrolFormComponent

  },
// 18/07 agregar una opción para editar el GRID con clickl
  {
    path: 'elementoszona', component: AutocontrolFormComponent

  },

 {
    path: 'editareas', component: EditareaComponent

  },
  


                                      


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
