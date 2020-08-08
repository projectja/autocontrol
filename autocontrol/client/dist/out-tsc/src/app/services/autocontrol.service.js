import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AutocontrolService = class AutocontrolService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://localhost:3000/api';
    }
    getEmpleados() {
        // para no colocar directamente la direction se utiliza una propiedad API_URI
        return this.http.get(`${this.API_URI}/empleados`);
    }
    getZonas() {
        // para no colocar directamente la direction se utiliza una propiedad API_URI
        return this.http.get(`${this.API_URI}/zonas`);
    }
    getEmpleado(id) {
        return this.http.get(`${this.API_URI}/empleado/${id}`);
    }
    deleteEmpleado(id) {
        return this.http.delete(`${this.API_URI}/empleado/${id}`);
    }
    saveEmpleado(empleado) {
        console.log("SAVE GAME ", empleado);
        console.log;
        return this.http.post(`${this.API_URI}/empleado/`, empleado);
    }
    updateEmpleados(id, updatedEmpleado) {
        console.log("actualizado", updatedEmpleado);
        return this.http.put(`${this.API_URI}/empleado/${id}`, updatedEmpleado);
    }
    getElementosZonaPorzona(id) {
        return this.http.get(`${this.API_URI}/elementosporzona/${id}`);
    }
    saveTarea(tareas) {
        console.log("SAVE TAREA  ", tareas);
        return this.http.post(`${this.API_URI}/tareas`, tareas);
    }
    getElementosGrid() {
        return this.http.get(`${this.API_URI}/tareas`);
    }
};
AutocontrolService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AutocontrolService);
export { AutocontrolService };
//# sourceMappingURL=autocontrol.service.js.map