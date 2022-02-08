import { TestBed } from '@angular/core/testing';

import { RegisterClassService } from './register-class.service';

describe('RegisterClassService', () => {
  let service: RegisterClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
