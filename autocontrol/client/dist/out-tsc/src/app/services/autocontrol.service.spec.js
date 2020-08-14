import { TestBed } from '@angular/core/testing';
import { AutocontrolService } from './autocontrol.service';
describe('AutocontrolService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AutocontrolService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=autocontrol.service.spec.js.map