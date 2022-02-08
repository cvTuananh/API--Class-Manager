import { TestBed } from '@angular/core/testing';

import { UserShowRegisterService } from './user-show-register.service';

describe('UserShowRegisterService', () => {
  let service: UserShowRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserShowRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
