import { TestBed } from '@angular/core/testing';

import { EditClassService } from './edit-class.service';

describe('EditClassService', () => {
  let service: EditClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
