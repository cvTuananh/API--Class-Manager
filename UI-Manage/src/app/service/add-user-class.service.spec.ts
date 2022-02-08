import { TestBed } from '@angular/core/testing';

import { AddUserClassService } from './add-user-class.service';

describe('AddUserClassService', () => {
  let service: AddUserClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUserClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
