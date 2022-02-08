import { TestBed } from '@angular/core/testing';

import { ChangeAvaService } from './change-ava.service';

describe('ChangeAvaService', () => {
  let service: ChangeAvaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeAvaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
