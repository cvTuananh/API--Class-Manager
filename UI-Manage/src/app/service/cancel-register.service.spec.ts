import { TestBed } from '@angular/core/testing';

import { CancelRegisterService } from './cancel-register.service';

describe('CancelRegisterService', () => {
  let service: CancelRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancelRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
