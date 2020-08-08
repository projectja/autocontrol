import { TestBed } from '@angular/core/testing';

import { AutocontrolService } from './autocontrol.service';

describe('AutocontrolService', () => {
  let service: AutocontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutocontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
