import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let PaisService = class PaisService {
    constructor(http) {
        this.http = http;
    }
    getPaises() {
        return this.http.get('https://restcountries.eu/rest/v2/lang/es')
            .pipe(map((resp) => resp.map(pais => ({ nombre: pais.name, codigo: pais.alpha3Code }))));
    }
};
PaisService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PaisService);
export { PaisService };
//# sourceMappingURL=pais.service.js.map