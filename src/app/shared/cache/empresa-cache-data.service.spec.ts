import { TestBed } from '@angular/core/testing';

import { EmpresaCacheDataService } from './empresa-cache-data.service';

describe('EmpresaCacheDataService', () => {
  let service: EmpresaCacheDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresaCacheDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
