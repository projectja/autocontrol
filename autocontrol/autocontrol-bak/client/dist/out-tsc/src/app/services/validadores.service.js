import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ValidadoresService = class ValidadoresService {
    constructor() { }
    existeUsuario(control) {
        if (!control.value) {
            return Promise.resolve(null);
        }
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'strider') {
                    resolve({ existe: true });
                }
                else {
                    resolve(null);
                }
            }, 3500);
        });
    }
    noHerrera(control) {
        var _a;
        if (((_a = control.value) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'herrera') {
            return {
                noHerrera: true
            };
        }
        return null;
    }
    passwordsIguales(pass1Name, pass2Name) {
        return (formGroup) => {
            const pass1Control = formGroup.controls[pass1Name];
            const pass2Control = formGroup.controls[pass2Name];
            if (pass1Control.value === pass2Control.value) {
                pass2Control.setErrors(null);
            }
            else {
                pass2Control.setErrors({ noEsIgual: true });
            }
        };
    }
};
ValidadoresService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ValidadoresService);
export { ValidadoresService };
//# sourceMappingURL=validadores.service.js.map