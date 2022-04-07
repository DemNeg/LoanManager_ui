import { TestBed } from '@angular/core/testing';

import { RepportsService } from './repports.service';

describe('RepportsService', () => {
  let service: RepportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
