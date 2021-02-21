import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// con esto funcionara nuestro sirivio
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component';
import { EmpleadosListComponent } from './components/empleados-list/empleados-list.component';
// esto vale pasra decirle que esta app tendraa este proveedor
import { AutocontrolService } from './services/autocontrol.service';
import { AutocontrolFormComponent } from './components/autocontrol-form/autocontrol-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxFontAwesomeModule } from 'ngx-font-awesome';
import { AgGridModule } from 'ag-grid-angular';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            NavigationComponent,
            EmpleadoFormComponent,
            EmpleadosListComponent,
            AutocontrolFormComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            BrowserAnimationsModule,
            NgbModule,
            MatDatepickerModule,
            MatNativeDateModule,
            BsDatepickerModule,
            BrowserAnimationsModule,
            NgxFontAwesomeModule,
            BsDatepickerModule.forRoot(),
            AgGridModule.withComponents([])
        ],
        providers: [AutocontrolService,
            MatDatepickerModule
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map