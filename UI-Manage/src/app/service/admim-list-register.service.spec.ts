import { TestBed } from '@angular/core/testing';

import { AdmimListRegisterService } from './admim-list-register.service';

describe('AdmimListRegisterService', () => {
  let service: AdmimListRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmimListRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
