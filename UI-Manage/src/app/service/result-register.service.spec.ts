import { TestBed } from '@angular/core/testing';

import { ResultRegisterService } from './result-register.service';

describe('ResultRegisterService', () => {
  let service: ResultRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
