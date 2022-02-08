import { TestBed } from '@angular/core/testing';

import { SubmitRegisterService } from './submit-register.service';

describe('SubmitRegisterService', () => {
  let service: SubmitRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
